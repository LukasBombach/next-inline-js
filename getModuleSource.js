import { LoaderImportDependency } from "webpack";

/**
 * @typedef {Object} ImportModuleOptions
 * @property {string=} layer the target layer
 * @property {string=} publicPath the target public path
 * @property {string=} baseUri target base uri
 */

/**
 * @callback ImportModuleCallback
 * @param {(Error | null)=} err error object
 * @param {any=} exports exports of the evaluated module
 */

/** @typedef {new (...args: any[]) => Dependency} DepConstructor */

/**
 * @param {string} request the request string to load the module from
 * @param {ImportModuleOptions=} options options
 * @param {ImportModuleCallback=} callback callback returning the exports
 * @returns {void}
 */
export const getModuleSource = (request, options, callback) => {
  const dep = new LoaderImportDependency(request);
  dep.loc = {
    name: request,
  };
  const factory = compilation.dependencyFactories.get(/** @type {DepConstructor} */ (dep.constructor));
  if (factory === undefined) {
    return callback(new Error(`No module factory available for dependency type: ${dep.constructor.name}`));
  }
  compilation.buildQueue.increaseParallelism();
  compilation.handleModuleCreation(
    {
      factory,
      dependencies: [dep],
      originModule: loaderContext._module,
      contextInfo: {
        issuerLayer: options.layer,
      },
      context: loaderContext.context,
      connectOrigin: false,
    },
    err => {
      compilation.buildQueue.decreaseParallelism();
      if (err) {
        return callback(err);
      }
      const referencedModule = moduleGraph.getModule(dep);
      if (!referencedModule) {
        return callback(new Error("Cannot load the module"));
      }
      compilation.executeModule(
        referencedModule,
        {
          entryOptions: {
            baseUri: options.baseUri,
            publicPath: options.publicPath,
          },
        },
        (err, result) => {
          if (err) return callback(err);
          for (const d of result.fileDependencies) {
            loaderContext.addDependency(d);
          }
          for (const d of result.contextDependencies) {
            loaderContext.addContextDependency(d);
          }
          for (const d of result.missingDependencies) {
            loaderContext.addMissingDependency(d);
          }
          for (const d of result.buildDependencies) {
            loaderContext.addBuildDependency(d);
          }
          if (result.cacheable === false) loaderContext.cacheable(false);
          for (const [name, { source, info }] of result.assets) {
            const { buildInfo } = loaderContext._module;
            if (!buildInfo.assets) {
              buildInfo.assets = Object.create(null);
              buildInfo.assetsInfo = new Map();
            }
            buildInfo.assets[name] = source;
            buildInfo.assetsInfo.set(name, info);
          }
          callback(null, result.exports);
        }
      );
    }
  );
};
