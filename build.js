import { build } from "esbuild";
import { obfuscate } from "js-confuser";
import { buildStructsFile } from "./structsetter.js";
import fs from "fs";
import http from "http";
import path from "path";

const MAIN_INPUT = "main.js";
const MAIN_OUTPUT = "Recte.user.js";
const OBFUSCATE = false;

const PORT = 3000;
const HOST = "127.0.0.1";

const OBFUSCATE_OPTIONS = {
  target: "browser",
  compact: true,
  stringCompression: 1,
  renameLabels: false,
  controlFlowFlattening: 1,
  opaquePredicates: 0.6,
  stringEncoding: 1,
  stringSplitting: 0.6,
  stringConcealing: true,
  renameGlobals: true,
  identifierGenerator: "hexadecimal",
};

function injectDeadCode(code) {
  const blocks = Array.from({ length: 3 }, () => {
    const rand = Math.random().toString(16).slice(2);
    return `(function(){function _0x${rand}(){const arr=Array.from({length:5},()=>Math.random());if(arr.join("")==="nope"){console.log("fake branch");}return arr.sort().reverse();}_0x${rand}();})();`;
  });
  return blocks.join("\n") + code;
}

function injectAntiDebug(code) {
  return `setInterval(()=>{const b=performance.now();debugger;if(performance.now()-b>100)console.clear();},2000);\n` + code;
}

async function buildAndServe() {
  try {
    const t0 = performance.now();

    buildStructsFile();

    const t1 = performance.now();
    console.log(`Structs: ${(t1 - t0).toFixed(0)}ms`);

    await build({
      entryPoints: [MAIN_INPUT],
      bundle: true,
      outfile: MAIN_OUTPUT,
      format: "iife",
      platform: "browser",
      target: "esnext",
      minify: true,
      treeShaking: true,
    });

    console.log(`esbuild: ${(performance.now() - t1).toFixed(0)}ms  —  total so far: ${(performance.now() - t0).toFixed(0)}ms`);

    if (OBFUSCATE) {
      let code = fs.readFileSync(MAIN_OUTPUT, "utf8");
      code = injectDeadCode(code);
      code = injectAntiDebug(code);
      const obfuscated = await obfuscate(code, OBFUSCATE_OPTIONS);
      fs.writeFileSync(MAIN_OUTPUT, obfuscated.code);
      console.log(`Obfuscation: ${(performance.now() - t0).toFixed(0)}ms total`);
    } else {
      console.log(`⚠️ Obfuscation skipped`);
    }

    const server = http.createServer((req, res) => {
      let filePath;
      if (req.url === "/") {
        filePath = path.resolve("./index.html");
      } else if (req.url === `/${MAIN_OUTPUT}`) {
        filePath = path.resolve(`./${MAIN_OUTPUT}`);
      } else {
        res.writeHead(404);
        res.end("Not found");
        return;
      }

      fs.readFile(filePath, (err, content) => {
        if (err) {
          res.writeHead(500);
          res.end("Server error");
          return;
        }
        const ext = path.extname(filePath);
        const contentType =
          ext === ".html" ? "text/html" :
          ext === ".js"   ? "application/javascript" :
                            "text/plain";
        res.writeHead(200, { "Content-Type": contentType });
        res.end(content);
      });
    });

    server.listen(PORT, HOST, () => {
      console.log(`Server: http://${HOST}:${PORT}  —  serving ${MAIN_OUTPUT}`);
    });

  } catch (err) {
    console.error("❌ Build failed:", err);
    process.exit(1);
  }
}

buildAndServe();
