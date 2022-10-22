console.log('vue.config.js');

let sav = '';
for (let e in process.env) {
    if (/VUE_APP_/i.test(e)) {
        sav += `$${e}: "${process.env[e]}";`;
    }
}

let webPackConfig = {};

// we would use this in our project but this does not work here.
// webPackConfig = {
//     devtool: 'source-map',
//     module: {
//         rules: [
//             {
//                 test: /.html$/,
//                 loader: 'vue-template-loader',
//                 exclude: /index.html/,
//             },
//             {
//                 test: /\.js$/,
//                 loader: 'babel-loader',
//                 exclude: /node_modules/,
//             },
//         ],
//     },
//     optimization: {
//         runtimeChunk: 'single',
//         splitChunks: {
//             chunks: 'all',
//             maxInitialRequests: Infinity,
//             minSize: 0,
//             cacheGroups: {
//                 vendor: {
//                     test: /[\\/]node_modules[\\/]/,
//                     name(module) {
//                         const packageName = module.context.match(
//                             /[\\/]node_modules[\\/](.*?)([\\/]|$)/
//                         )[1];
//                         return `npm.${packageName.replace('@', '')}`;
//                     },
//                 },
//             },
//         },
//     },
// };

module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: sav,
            },
        },
    },
    devServer: {
        disableHostCheck: true,
    },
    configureWebpack: {},
    pluginOptions: {
        s3Deploy: {
            registry: undefined,
            awsProfile: 'default',
            region: 'eu-central-1',
            bucket: 'vue-app',
            createBucket: true,
            staticHosting: true,
            staticIndexPage: 'index.html',
            staticErrorPage: 'index.html',
            assetPath: 'dist',
            assetMatch: '**',
            deployPath: '/',
            acl: 'public-read',
            pwa: false,
            enableCloudfront: true,
            cloudfrontMatchers: '/*',
            uploadConcurrency: 20,
            pluginVersion: '3.0.0',
        },
        i18n: {
            locale: 'de',
            fallbackLocale: 'us',
            localeDir: 'locales',
            enableInSFC: false,
        },
    },
};
