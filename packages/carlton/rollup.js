import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import json from "rollup-plugin-json";
import minify from "rollup-plugin-babel-minify";
import { name, version, description, author, license } from "./package.json";

export default {
  input: "src/index.js",
  plugins: [
    resolve({ browser: true }),
    json(),
    babel({ exclude: "node_modules/**" }),
    minify({
      comments: false,
      sourceMap: true,
      banner: `/**\n * ${name} | v${version}\n * ${description}\n * (c) ${new Date().getFullYear()} ${author}\n * @license ${license}\n */`
    })
  ],
  external: [
    "freesewing",
    "@freesewing/bent",
    "@freesewing/plugin-bundle",
    "@freesewing/plugin-buttons"
  ],
  output: {
    globals: {
      freesewing: "freesewing",
      "@freesewing/bent": "freesewing.patterns.bent",
      "@freesewing/plugin-bundle": "freesewing.plugins.bundle",
      "@freesewing/plugin-buttons": "freesewing.plugins.buttons"
    }
  }
};
