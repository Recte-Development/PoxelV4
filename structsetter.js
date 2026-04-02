import fs from "fs";
import path from "path";

const TARGET_DIR = "./";
const MASTER_STRUCTS = "./structfile/structs.js";
const OUTPUT_FILE = "structs.js";


function getJSFiles(dir) {
    const result = [];
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            result.push(...getJSFiles(full));
        } else if (entry.isFile() && entry.name.endsWith(".js") && entry.name !== OUTPUT_FILE) {
            result.push(full);
        }
    }
    return result;
}

function findStructImports(filePath) {
    const content = fs.readFileSync(filePath, "utf8");
    const regex = /import\s+\{([^}]*)\}\s+from\s+['"][^'"]*\/?structs\.js['"];?/g;

    const results = new Set();
    let match;

    while ((match = regex.exec(content)) !== null) {
        const names = match[1].split(",").map(n => n.trim()).filter(Boolean);
        names.forEach(n => results.add(n));
    }

    return results;
}

function extractClassCode(masterContent, className) {
    const regex = new RegExp(
        `export\\s+class\\s+${className}\\s*\\{[\\s\\S]*?\\n\\}`,
        "g"
    );
    return regex.exec(masterContent)?.[0] || null;
}

function findClassDependencies(classCode) {
    const regex = /new\s+([A-Z][A-Za-z0-9_]*)\s*\(/g;
    const deps = new Set();
    let match;
    while ((match = regex.exec(classCode)) !== null) {
        deps.add(match[1]);
    }
    return deps;
}

function resolveAllClasses(masterContent, needed) {
    let added = true;

    while (added) {
        added = false;

        for (const className of [...needed]) {
            const classCode = extractClassCode(masterContent, className);
            if (!classCode) continue;

            const deps = findClassDependencies(classCode);
            for (const dep of deps) {
                if (!needed.has(dep)) {
                    needed.add(dep);
                    added = true;
                }
            }
        }
    }

    return needed;
}

export function buildStructsFile() {
    console.log("Scanning project for struct usage…");

    const jsFiles = getJSFiles(TARGET_DIR);
    const needed = new Set();

    for (const file of jsFiles) {
        const imports = findStructImports(file);
        imports.forEach(i => needed.add(i));
    }

    if (needed.size === 0) {
        console.log("No classes imported from structs.js — nothing to generate.");
        return;
    }

    console.log("Initial classes used:", [...needed]);

    const masterContent = fs.readFileSync(MASTER_STRUCTS, "utf8");

    resolveAllClasses(masterContent, needed);

    console.log("Final class list (with dependencies):", [...needed]);

    let output = "";
    for (const className of needed) {
        const code = extractClassCode(masterContent, className);
        if (code) {
            output += code + "\n\n";
        } else {
            console.warn(`WARNING: Class "${className}" not found in master structs file. Ignoring its instantiations.`);
            output = stripUnknownClassInstantiations(output, className);
        }
    }

    const outputPath = path.join(TARGET_DIR, OUTPUT_FILE);
    fs.writeFileSync(outputPath, output.trim() + "\n", "utf8");

    console.log(`structs.js successfully generated at: ${outputPath}`);
}

function stripUnknownClassInstantiations(content, className) {
    const regex = new RegExp(`new\\s+${className}\\s*\\(([^)]*)\\)`, "g");
    return content.replace(regex, "$1");
}

