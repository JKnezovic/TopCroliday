module.exports = {
  resolver: {
    /* resolver options */
    sourceExts: ['jsx', 'js', 'ts', 'tsx', 'cjs'],
  },
  maxWorkers: 2,
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
};
