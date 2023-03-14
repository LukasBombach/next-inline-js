// /**
//  * @type {import('webpack').PitchLoaderDefinitionFunction}
//  */
// module.exports.pitch = async function (remaining, previous, data) {

/**
 * @type {import('webpack').LoaderDefinitionFunction}
 */
module.exports = async function (content, map, meta) {
  if (/NO_RECURSION/.test(this.request)) {
    return content;
  }

  if (/DO_COMPILE/.test(this.request)) {
    const result = await this.importModule(this.request + "?NO_RECURSION");
    return result.default || result;
  }

  return "module.exports = require('raw-loader!" + this.request + "?DO_COMPILE');";
};
