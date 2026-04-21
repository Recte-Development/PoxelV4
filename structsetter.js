import fs from "fs";
import path from "path";

const TARGET_DIR = "./";
const MASTER_STRUCTS = "./structfile/structs.js";
const OUTPUT_FILE = "structs.js";

const SKIP_DIRS = new Set(["node_modules", ".git", "dist", "build", "structfile"]);

function getJSFiles(dir) {
    const result = [];
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        if (SKIP_DIRS.has(entry.name)) continue;
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            result.push(...getJSFiles(full));
        } else if (
            entry.isFile() &&
            entry.name.endsWith(".js") &&
            entry.name !== OUTPUT_FILE &&
            entry.name !== "structsetter.js" &&
            entry.name !== "build.js"
        ) {
            result.push(full);
        }
    }
    return result;
}

// Match imports from both `structs` and `structs.js` (with or without extension)
const IMPORT_REGEX = /import\s+\{([^}]*)\}\s+from\s+['"][^'"]*\/?structs(?:\.js)?['"];?/g;

function findStructImports(filePath) {
    const content = fs.readFileSync(filePath, "utf8");
    const results = new Set();
    let match;
    IMPORT_REGEX.lastIndex = 0;
    while ((match = IMPORT_REGEX.exec(content)) !== null) {
        for (const name of match[1].split(",")) {
            const trimmed = name.trim();
            if (trimmed) results.add(trimmed);
        }
    }
    return results;
}

// Scan master file once — O(n) instead of O(n * classes)
function buildClassMap(content) {
    const map = new Map();
    const regex = /export\s+class\s+(\w+)\s*\{[\s\S]*?\n\}/g;
    let m;
    while ((m = regex.exec(content)) !== null) {
        map.set(m[1], m[0]);
    }
    return map;
}

function findClassDependencies(classCode) {
    const deps = new Set();
    const regex = /new\s+([A-Z][A-Za-z0-9_]*)\s*\(/g;
    let match;
    while ((match = regex.exec(classCode)) !== null) {
        deps.add(match[1]);
    }
    return deps;
}

// BFS — each class processed exactly once instead of re-scanning on each iteration
function resolveAllClasses(classMap, needed) {
    const queue = [...needed];
    while (queue.length > 0) {
        const className = queue.shift();
        const classCode = classMap.get(className);
        if (!classCode) continue;
        for (const dep of findClassDependencies(classCode)) {
            if (!needed.has(dep)) {
                needed.add(dep);
                queue.push(dep);
            }
        }
    }
}

export function buildStructsFile() {
    const t0 = performance.now();
    console.log("Scanning project for struct usage…");

    const jsFiles = getJSFiles(TARGET_DIR);
    const needed = new Set();

    for (const file of jsFiles) {
        for (const name of findStructImports(file)) {
            needed.add(name);
        }
    }

    if (needed.size === 0) {
        console.log("No classes imported from structs.js — nothing to generate.");
        return;
    }

    console.log(`Found ${needed.size} imported classes across ${jsFiles.length} files`);

    const masterContent = fs.readFileSync(MASTER_STRUCTS, "utf8");
    const classMap = buildClassMap(masterContent);

    console.log(`Parsed ${classMap.size} classes from master file`);

    resolveAllClasses(classMap, needed);

    console.log(`Resolved ${needed.size} total classes (with dependencies)`);

    const parts = [];
    for (const className of needed) {
        const code = classMap.get(className);
        if (code) {
            parts.push(code);
        } else {
            console.warn(`WARNING: "${className}" not found in master structs — skipping`);
        }
    }

    const outputPath = path.join(TARGET_DIR, OUTPUT_FILE);
    fs.writeFileSync(outputPath, parts.join("\n\n") + "\n", "utf8");

    console.log(`structs.js written (${parts.length} classes) in ${(performance.now() - t0).toFixed(0)}ms`);
}
