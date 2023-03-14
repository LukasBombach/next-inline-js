// /**
//  * @type {import('webpack').PitchLoaderDefinitionFunction}
//  */
// module.exports.pitch = async function (remaining, previous, data) {

/**
 * @type {import('webpack').LoaderDefinitionFunction}
 */
module.exports = async function (content, map, meta) {
  if (/GET_SOURCE_CODE/.test(this.request)) {
    return content;
  }

  this._compilation.hooks.executeModule.tap("MyPlugin", (...params) => {
    debugger;
    console.log(params);
  });

  const result = await this.importModule(this.request + "?GET_SOURCE_CODE");
  debugger;
  return result.default || result;
};
