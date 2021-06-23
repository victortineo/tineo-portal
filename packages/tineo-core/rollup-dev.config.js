import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import config from './rollup.config.js';

export default {
  ...config,
  plugins: [
    ...config.plugins,
    serve({
      open: true,
      verbose: true,
      contentBase: ["", "public"],
      host: "localhost",
      port: 3000,
    }),
    livereload({ watch: "dist" }),
  ]
};