const { getRemainingRequest } = require("loader-utils");

/**
 * @type {import('webpack').LoaderDefinitionFunction}
 */
module.exports = function compileToStringLoader(content, map, meta) {
  const callback = this.async();
  const loaderContext = this;

  if (/NOPE/.test(this.request)) {
    callback(null, content);
    return;
  }

  debugger;

  this.importModule(this.request + "?NOPE").then(source => {
    console.log(loaderContext);
    callback(null, `module.exports = ${JSON.stringify(source)};`);
    setTimeout(() => {
      debugger;
    }, 0);
  });
};
