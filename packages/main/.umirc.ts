import {defineConfig} from '@umijs/max';
import routes from "./config/routes";

export default defineConfig({
    antd: {
        configProvider: {
            prefixCls: 'mainAnt',
        },
    },
    access: {},
    model: {},
    initialState: {},
    request: {},
    layout: {
        title: '@umijs/max',
    },
    lessLoader: {
        modifyVars: {
            '@ant-prefix': 'mainAnt',
            "primary-color": "#004FD9"
        },
        javascriptEnabled: true,
    },
    routes,
    npmClient: 'pnpm',
    qiankun: {
        master: {
            prefetch: false
        }
    },
    mfsu: false
});

