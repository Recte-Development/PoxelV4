import { build } from "esbuild";
import { obfuscate } from "js-confuser";
import { buildStructsFile } from "./structsetter.js";
import fs from "fs";
import http from "http";
import path from "path";

buildStructsFile();

const MAIN_INPUT = "main.js";
const MAIN_OUTPUT = "Recte.user.js";
const OBFUSCATE = false;

const PORT = 3000;
const HOST = "127.0.0.1";

const OBFUSCATE_OPTIONS = {
  target: "node",
  preset: "low",
  stringCompression: 1,
  stringEncoding: 1,
  renameLabels: false,
};

async function buildAndServe() {
  try {
    // 🔨 Build
    await build({
      entryPoints: [MAIN_INPUT],
      bundle: true,
      outfile: MAIN_OUTPUT,
      format: "iife",
      target: "esnext",
      minify: true,
      treeShaking: false,
    });

    console.log(`✅ esbuild build complete: ${MAIN_OUTPUT}`);

    if (OBFUSCATE) {
      const builtCode = fs.readFileSync(MAIN_OUTPUT, "utf8");
      const obfuscated = await obfuscate(builtCode, OBFUSCATE_OPTIONS);
      fs.writeFileSync(MAIN_OUTPUT, obfuscated.code);
      console.log(`🔒 Obfuscation complete: ${MAIN_OUTPUT}`);
    } else {
      console.log(`⚠️ Obfuscation skipped (OBFUSCATE = false)`);
    }

    const server = http.createServer((req, res) => {
      let filePath;

      if (req.url === "/") {
        // simple HTML wrapper
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
          ext === ".html"
            ? "text/html"
            : ext === ".js"
            ? "application/javascript"
            : "text/plain";

        res.writeHead(200, { "Content-Type": contentType });
        res.end(content);
      });
    });

    server.listen(PORT, HOST, () => {
      console.log(`🚀 Server running at http://${HOST}:${PORT}`);
      console.log(`📄 Serving: ${MAIN_OUTPUT}`);
    });

  } catch (err) {
    console.error("❌ Build or obfuscation failed:", err);
    process.exit(1);
  }
}

buildAndServe();