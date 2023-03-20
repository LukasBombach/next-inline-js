const path = require("node:path");

/**
 * @this {import('webpack').LoaderContext<{}>}
 * @type {import('webpack').LoaderDefinitionFunction}
 */
function compileToStringLoader(content, sourceMap, additionalData) {
  const callback = this.async();

  const webpack = this._compiler.webpack;
  const compiler = this._compiler;
  const context = compiler.context;
  const entry = path.relative(context, this.resourcePath);

  new webpack.EntryPlugin(context, entry, {
    name: "my-entry-test-name",
    filename: "my-entry-test-filename",
  }).apply(compiler);

  this.addDependency(this.resourcePath);

  callback(null, content, sourceMap, additionalData);
}

module.exports = compileToStringLoader;
