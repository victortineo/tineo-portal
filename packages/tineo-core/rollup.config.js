import babel from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import html from '@rollup/plugin-html';

export default {
  input: "src/index.js",
  output: {
    file: "dist/bundle.js",
    format: "iife",
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
    }),
    commonjs(),
    html({
      template({ attributes, bundle, files, publicPath, title }) {
        return `
          <html>
            <head>
              <meta charset="utf-8">
              <title>Tineo Portal | Home</title>
            </head>
            <body>
              <script src="${bundle}"></script>
              <script nomodule src="s.js"></script>
            </body>
          </html>
        `;
      }
    })
  ]
};