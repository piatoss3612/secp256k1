import commonjs from "rollup-plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import { nodeResolve } from "@rollup/plugin-node-resolve";

export default {
  input: "./index.ts",
  output: {
    file: "./dist/index.js",
    format: "cjs",
    exports: "named",
    sourcemap: true,
  },
  external: [
    "@noble/curves/secp256k1",
    "@noble/curves/abstract/modular",
    "@noble/curves/abstract/utils",
  ],
  plugins: [
    nodeResolve(),
    typescript({
      tsconfig: "./tsconfig.json",
      clean: true,
    }),
    commonjs(),
  ],
};
