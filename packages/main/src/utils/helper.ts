import {history} from "@umijs/max";


export async function customFetch(url: string, ...args: any) {
    //  拦截子应用加载资源失败的情况处理
    try {
        return await window.fetch(url, ...args);
    } catch (e) {
        // history.push('/404', {message: '微应用加载失败，请检查应用是否可运行'})
    }
    return {
        async text() {
            return '';
        },
    }
}
