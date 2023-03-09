const path = require("node:path");

/**
 * @type {import('webpack').LoaderDefinitionFunction}
 */
module.exports = function compileToStringLoader(content, map, meta) {
  const callback = this.async();
  this._compilation.addEntry(
    this.context,
    path.relative(this.context, this.resourcePath),
    { name: "test" },
    (err, result) => {
      console.log("addEntry", err, result);
      callback(null, content);
    }
  );
};
