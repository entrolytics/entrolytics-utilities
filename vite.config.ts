import { defineConfig } from "vite-plus";

export default defineConfig({
  pack: {
    entry: ["src/index.ts"],
    format: ["esm", "cjs"],
    fixedExtension: false,
    dts: true,
    clean: true,
    sourcemap: true,
    treeshake: true,
    minify: false,
  },
  run: {
    cache: {
      scripts: true,
      tasks: true,
    },
  },
  staged: {
    '*.{ts,tsx,js,jsx,mjs,cjs,json,md,yml,yaml}': 'vp check --fix',
  },
  lint: { options: { typeAware: true, typeCheck: true } },
});
