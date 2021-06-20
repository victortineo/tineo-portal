module.exports = {
  plugins: [['babel-plugin-styled-components', { ssr: true}], ["@babel/plugin-proposal-private-methods", { loose: true }]],
  presets: ['@babel/preset-env', '@babel/preset-react']
};
