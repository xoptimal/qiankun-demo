// 运行时配置
import {addGlobalUncaughtErrorHandler, initGlobalState, MicroAppStateActions} from "qiankun";
import React, {useState} from "react";
import {notification} from 'antd';

import './app.css'
import CustomErrorBoundary from "@/components/CustomErrorBoundary";
import {getMicroAppRouteComponent} from "@@/plugin-qiankun-master/getMicroAppRouteComponent";
import {customFetch} from "@/utils/helper";

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://next.umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string }> {
    return {name: '@umijs/max'};
}

export const layout = () => {

    const [openKeys, setOpenKeys] = useState<string[]>([])

    return {
        logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
        menu: {
            locale: false,
        },
        menuProps: {
            openKeys
        },
        onOpenChange: setOpenKeys,
        rightContentRender: false,
        token: {
            sider: {
                menuBackgroundColor: '#004FD9',
                menuTextColor: 'rgba(255,255,255,0.85)',
                subMenuSelectedTextColor: '#fff',
                menuTextColorSecondary: 'rgba(255,255,255,0.65)',
                menuSelectedTextColor: '#fff',
                menuTitleTextColor: 'rgba(255,255,255,0.95)',
                menuItemHoverBgColor: 'rgba(0,0,0,0.06)',
                menuItemCollapsedHoverBgColor: 'rgba(0,0,0,0.06)',
                menuItemSelectedBgColor: 'rgba(0,0,0,0.15)',
                menuItemCollapsedSelectedBgColor: 'rgba(0,0,0,0.15)',
                menuItemDividerColor: 'rgba(255,255,255,0.15)',
                collapsedButtonBgColor: '#fff',
                collapsedButtonTextColor: 'rgba(0,0,0,0.45)',
                collapsedButtonHoverTextColor: 'rgba(0,0,0,0.65)',
                menuSubArrowColor: 'rgba(255,255,255,0.15)',
            },
            appListIconTextColor: 'rgba(255,255,255,0.85)',
            appListIconHoverTextColor: 'rgba(255,255,255,0.95)',
            appListIconHoverBgColor: 'rgba(0,0,0,0.06)',
        },
    };
};

const callback = (data: { name: string, message: string }) => {
    notification.open({
        type: 'info',
        message: `来自${data.name}的Reply`,
        description: data.message,
        onClick: () => {
            console.log('Notification Clicked!');
        },
    });
}

export function patchClientRoutes({routes}: any) {
    routes[0].children.forEach((item: any, index: number) => {
        if (item.microApp) {
            console.log("item", item)
            routes[0].children[index].element = getMicroAppRouteComponent({
                appName: item.microApp,
                base: item.microAppProps?.base || '/',
                routePath: item.path,
                masterHistoryType: item.microAppProps?.hisory || 'browser',
                routeProps: {
                    errorBoundary: (error: any) => <CustomErrorBoundary error={error}/>
                }
            })()
        }
    })
}

const state = {
    slogan: 'Hello MicroFrontend from qiankun-initGlobalState',
    callback
}

// 初始化 state
const actions: MicroAppStateActions = initGlobalState(state);

//  监听数据变化
actions.onGlobalStateChange((state, prev) => {
    // update
    //actions.setGlobalState(state);
});

//  取消监听
// actions.offGlobalStateChange();

// export function patchClientRoutes({ routes }) {
//     console.log('routes', routes)
// }

export const qiankun: any = {
    apps: [
        {
            name: 'sub-app-1',
            entry: '//localhost:5001',
            activeRule: '/sub-app-1',
            container: '#micro-app-1',
            props: {
                autoCaptureError: true,
                base: '/sub-app-1',
                defaultProps: {
                    slogan: 'Hello MicroFrontend from qiankun-apps-props',
                    callback
                }
            },
        },
        {
            name: 'sub-app-2',
            entry: '//localhost:5002',
            activeRule: '/sub-app-2',
            container: '#micro-app-2',
            sandbox: {
                experimentalStyleIsolation: true
            },
        },
        {
            name: 'sub-app-3',
            entry: '//localhost:5003',
            activeRule: '/sub-app-3',
            container: '#micro-app-3',
            sandbox: {
                experimentalStyleIsolation: true
            },
        },
    ],
    lifeCycles: {
        afterMount: (props: any) => {
            // 这里需要做一次set才能保证微应用能触发到change, 以便能拿到state
            actions.setGlobalState(state);
        },
        beforeLoad: (props: any) => {
        },
        beforeMount: (props: any) => {
        },
        beforeUnmount: (props: any) => {
        },
    },
    fetch: customFetch
};

//  umi下自带的父子通信方式
export function useQiankunStateForSlave() {
    return {
        slogan: 'Hello MicroFrontend from umi-useQiankunStateForSlave',
        callback
    };
}

//  捕获全局微应用错误
addGlobalUncaughtErrorHandler((event) => {
    //  这里会频繁触发, 注意使用
})
