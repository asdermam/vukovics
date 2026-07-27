import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const outputDir = resolve("_site");
const projectPath = "/vukovics";

await rm(outputDir, { recursive: true, force: true });
await mkdir(outputDir, { recursive: true });
await cp(resolve("dist/client"), outputDir, { recursive: true });

const workerUrl = pathToFileURL(resolve("dist/server/index.js"));
workerUrl.searchParams.set("pages-build", Date.now().toString());
const { default: worker } = await import(workerUrl.href);

const response = await worker.fetch(
  new Request("https://asdermam.github.io/", { headers: { accept: "text/html" } }),
  { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
  { waitUntil() {}, passThroughOnException() {} },
);

if (!response.ok) {
  throw new Error(`Static render failed with status ${response.status}`);
}

let html = await response.text();
html = html
  .replaceAll("/assets/", `${projectPath}/assets/`)
  .replaceAll('href="/favicon.svg"', `href="${projectPath}/favicon.svg"`)
  .replaceAll('href="/file.svg"', `href="${projectPath}/file.svg"`)
  .replaceAll('href="/globe.svg"', `href="${projectPath}/globe.svg"`)
  .replaceAll('href="/window.svg"', `href="${projectPath}/window.svg"`);

await Promise.all([
  writeFile(resolve(outputDir, "index.html"), html, "utf8"),
  writeFile(resolve(outputDir, "404.html"), html, "utf8"),
  writeFile(resolve(outputDir, ".nojekyll"), "", "utf8"),
]);

console.log(`GitHub Pages artifact created at ${outputDir}`);
