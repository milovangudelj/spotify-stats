import { build } from "esbuild";

const dependencies = ["express", "dotenv"];
const peerDependencies = [];

const sharedConfig = {
  entryPoints: ["api/index.ts", "src/getAlbum.ts"],
  bundle: true,
  minify: true,
  external: dependencies.concat(peerDependencies),
  outdir: "dist",
};

build({
  ...sharedConfig,
  platform: "node", // for CJS
});

build({
  ...sharedConfig,
  platform: "neutral", // for ESM
  format: "esm",
});
