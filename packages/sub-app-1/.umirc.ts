import {defineConfig} from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  theme: {
    "primary-color": "#ea1244"
  },
  mfsu: false,
  antd: {},
  routes: [
    {
      path: '/theme',
      name: 'theme',
      component: '@/pages/theme',
    },
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        {
          path: '/one',
          name: 'one',
          component: '@/pages/one',
        },
        {
          path: '/two',
          name: 'two',
          component: '@/pages/two',
        },
        {
          name: 'micro-3',
          path: '/sub-app-3',
          microApp: 'sub-app-3',
        },
        {
          path: '/',
          redirect: '/one'
        },
      ]
    },

  ],
  fastRefresh: {},
  qiankun: {
    master: {
      // 注册子应用信息
      apps: [
        {
          name: 'sub-app-2',
          entry: '//localhost:5002',
        },
        {
          name: 'sub-app-3',
          entry: '//localhost:5003',
        },
      ],
    },
    slave: {},  //微应用必须配置
  },
  runtimeHistory: {}, //  开始运行时history功能
  mountElementId: 'micro-app-1',  //  容器ID
  base: '/',  //  umi微应用独立访问需要配置这个参数, 否则默认获取package.name作为base
  // publicPath: `/${packageName}/`,
  // outputPath: `./dist/${packageName}`,
  // hash: true,
});
