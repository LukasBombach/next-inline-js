/**
 * @this {import('webpack').LoaderContext<{}>}
 * @type {import('webpack').LoaderDefinitionFunction}
 */
function compileToStringLoader(content, sourceMap, additionalData) {
  const callback = this.async();
  callback(null, content, sourceMap, additionalData);
}

module.exports = compileToStringLoader;
