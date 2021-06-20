import path from 'path';
import babel from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';

const PKG_JSON = require(path.join(process.cwd(), 'package.json'));
const LOCAL_GLOBALS = {
  react: "React",
  "styled-components": "styled",
};

export default {
  input: "src/index.js",
  globals: LOCAL_GLOBALS,
  external: ['styled-components', 'react', 'react-dom'],
  output: {
    file: PKG_JSON.main,  
    format: "umd",
    name: PKG_JSON.name,
    sourcemap: true,
  },
  plugins: [
    nodeResolve({
      extensions: [".js"],
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify( 'development' )
    }),
    babel({
      presets: ["@babel/preset-react"],
      plugins: [
        ['babel-plugin-styled-components', { ssr: true}],
        ["@babel/plugin-proposal-private-methods", { loose: true }],
        "@babel/plugin-transform-runtime"
      ],
      babelHelpers: 'runtime',
    }),
    commonjs(),
  ]
};