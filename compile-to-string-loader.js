// const { getRemainingRequest } = require("loader-utils");
//
// /**
//  * @type {import('webpack').LoaderDefinitionFunction}
//  */
// module.exports = function compileToStringLoader(content, map, meta) {
//   const callback = this.async();
//   const loaderContext = this;
//
//   if (/NOPE/.test(this.request)) {
//     callback(null, content);
//     return;
//   }
//
//   debugger;
//
//   this.importModule(this.request + "?NOPE").then(source => {
//     console.log(loaderContext);
//     callback(null, `module.exports = ${JSON.stringify(source)};`);
//     setTimeout(() => {
//       debugger;
//     }, 0);
//   });
// };

/**
 * @type {import('webpack').LoaderDefinitionFunction}
 */
/* module.exports = async function compileToStringLoader(content, map, meta) {

  if (!/webpack\[asset\/source\]/.test(this.request)) {
    debugger;
  }

   if (/NOPE/.test(this.request)) {
     callback(null, content);
     return;
   }

  const result = await this.importModule(this.request);
  return result.default || result;


} */

/**
 * @type {import('webpack').PitchLoaderDefinitionFunction}
 */
// module.exports.pitch = async function (remaining, previous, data) {
// const loaderContext = this;

// console.log(remaining, previous, data, loaderContext);

// debugger;

//if (!/webpack\[asset\/source\]/.test(this.request)) {
//  const result = await this.importModule(this.resourcePath + ".webpack[asset/source]" + "!=!" + this.request);
//  debugger;
//  return result.default || result;
//}

//   if (!/COMPILE_XX/.test(this.request)) {
//     const result = await this.importModule(this.request);
//     return result.default || result;
//   }
//
//
//   if (!/NOPE/.test(this.request)) {
//     const result = await this.importModule(
//       /* this.resourcePath + ".webpack[asset/source]" + "!=!" + */ this.request + "?NOPE"
//     );
//     debugger;
//     return result.default || result;
//   }
// };
