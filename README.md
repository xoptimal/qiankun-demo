# qiankun+umi4+react+antd 微前端构建指南

### 前言
随时umi4的到来, 我把qiankun学习计划也提上了日程, 在系统的学习一周后, 下面通过umi4+qiankun+react 展开说说我的学习成果吧~

### 项目结构
- 主应用(基于umi4构建)
- 微应用(基于umi3构建)
- 微应用2(基于react-create-app构建)
- 微应用3(react-create-app + router构建)

### 主要完成以下功能:

#### 挂载
- 基于qiankun提供的loadMicroApp方法
- 基于umi-plugin-qiankun提供的MicroApp , MicroAppWithMemoHistory 组件
- 基于umi-plugin-qiankun提供的路由声明形式绑定挂载
- 微应用嵌套微应用挂载

#### 通信
- 基于qiankun-apps注册时的props属性透传
- 基于qiankun提供的全局状态-initGlobalState
- 基于umi-plugin-qiankun提供的hooks-useQiankunStateForSlave
  - umi微应用使用hooks-useModel, hoc-connectMaster方式获取内容

#### 样式隔离
- 基于qiankun提供的sandbox-experimentalStyleIsolation实现样式隔离
- 基于css-loader添加前缀

#### 错误处理
- 基于qiankun提供的autoCaptureError属性开启组件异常捕获
- 基于qiankun提供的errorBoundary属性实现自定义异常页面
- 基于qiankun提供的addGlobalUncaughtErrorHandler全局异常捕获

### 环境准备

clone
```
https://github.com/xoptimal/qiankun-demo.git
```
项目使用pnpm管理依赖, 请务先安装pnpm
```
npm install -g pnpm
```
安装依赖
```
pnpm i
```
启动项目
```
pnpm dev

http://localhost:5000
```

### 预览
主应用
![](https://raw.githubusercontent.com/xoptimal/images/main/img/202208112337882.png)
微应用页面形式挂载
![](https://raw.githubusercontent.com/xoptimal/images/main/img/202208112338315.png)
微应用路由形式挂载
![](https://raw.githubusercontent.com/xoptimal/images/main/img/202208112338386.png)
![](https://raw.githubusercontent.com/xoptimal/images/main/img/202208112339050.png)
应用间通信
![](https://raw.githubusercontent.com/xoptimal/images/main/img/202208112339696.png)
微应用嵌套微应用挂载
![](https://raw.githubusercontent.com/xoptimal/images/main/img/202208112340643.png)
微应用嵌套微应用路由形式挂载
![](https://raw.githubusercontent.com/xoptimal/images/main/img/202208112340385.png)
样式隔离
![](https://raw.githubusercontent.com/xoptimal/images/main/img/202208112341501.png)
微应用路由形式加载自定义错误页面
![](https://raw.githubusercontent.com/xoptimal/images/main/img/202208112343939.png)
微应用组件形式加载自定义错误页面
![](https://raw.githubusercontent.com/xoptimal/images/main/img/202208112344590.png)

### 参考链接
* [qiankun官网](https://qiankun.umijs.org/)
* [umi4-微前端配置指引](https://umijs.org/docs/max/micro-frontend)
* [umi3-微前端配置指引](https://v3.umijs.org/zh-CN/plugins/plugin-qiankun)
* [在 create-react-app 中使用 - Ant Design](https://ant-design.gitee.io/docs/react/use-with-create-react-app-cn)

### 最后

欢迎交流, 如果本项目对你有帮助的话, 欢迎━(*｀∀´*)ノ亻!  ⭐⭐⭐ ~
