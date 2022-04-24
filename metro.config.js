const {getDefaultConfig} = require('expo/metro-config');

module.exports = (async () => {
  const config = await getDefaultConfig(__dirname);

  const {transformer, resolver} = config;

    config.transformer = {
      ...transformer,
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: false,
        },
      }),
    };
    config.resolver = {
        ...resolver,
        sourceExts: ['jsx', 'js', 'ts', 'tsx', 'cjs'],
    };

    return config;
})();