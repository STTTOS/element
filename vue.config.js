module.exports = {
  // chainWebpack: (config) => {
  //     config.resolve.alias.set('@ele', '@/components/element');
  // },
  configureWebpack: {
    resolve: {
      alias: {
        '@ele': '@/components/element',
      },
    },
  },
};
