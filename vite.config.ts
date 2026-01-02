import { defineConfig } from "vite";

export default defineConfig({
  optimizeDeps: {
    // ansis 패키지를 사전에 최적화 목록에서 제외하거나 포함하여
    // ESM/CJS 혼합 문제를 방지합니다.
    include: [
      "monaco-editor/esm/vs/editor/editor.worker",
      "@shikijs/monaco",
      "ansis",
    ],
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/],
    },
  },
});
