const { getRemainingRequest } = require("loader-utils");

/**
 * @type {import('webpack').LoaderDefinitionFunction}
 */
module.exports = function compileToStringLoader(content, map, meta) {
  const callback = this.async();
  const { compiler, compilation } = this;

  if (/NOPE/.test(this.request)) {
    callback(null, content);
    return;
  }

  this.importModule(this.request + "?NOPE").then(source => {
    console.log(source, compiler, compilation);
    callback(null, `module.exports = ${JSON.stringify(source)};`);
  });
};
