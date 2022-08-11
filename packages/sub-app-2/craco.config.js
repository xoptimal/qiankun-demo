const {name} = require('./package.json');
const CracoAntDesignPlugin = require("craco-antd");

module.exports = {
    plugins: [{
        plugin: CracoAntDesignPlugin,
        options: {
            customizeTheme: {
                "@primary-color": "#1DA57A",
            },
        }
    }],
    webpack: {
        configure: (config, {env, paths}) => {
            config.output.library = `${name}-[name]`;
            config.output.libraryTarget = 'umd';
            config.output.chunkLoadingGlobal = `webpackJsonp_${name}`;
            config.output.globalObject = 'window';
            return config
        }
    },
    devServer: (devServerConfig, { env, paths, proxy, allowedHost }) => {
        const config = {...devServerConfig}
        config.historyApiFallback = true;
        config.hot = false;
        // config.watchContentBase = false;
        config.liveReload = false;
        return config;
    },
}
