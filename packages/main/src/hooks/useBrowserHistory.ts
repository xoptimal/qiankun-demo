import { useEffect } from 'react';
import { history } from '@umijs/max';

// 处理子应用push操作，父应用的菜单高亮不正确BUG
export function useBrowserHistory() {
    useEffect(() => {
        const handlePopState = (event: any) => {
            const { href } = event.target.location; // eg: http://localhost:1200/#/bps/producMange/imageAlbum?a=b
            // const pathNameWithSearch = href.split('#')[1]; // eg: /bps/producMange/imageAlbum?a=b
            // const pathname = pathNameWithSearch.split('?')[0];
            // console.group('---handlePopState---');
            //
            // console.log('event=>pathname-->', pathname);
            // console.log('event=>pathNameWithSearch-->', pathNameWithSearch);
            // console.groupEnd();

            console.log('history.pathname-->', history.location.pathname);
            console.log('href-->', href);

            //
            // // 如果2个不一样，说明是子应用自己push的路由
            // if (history.location.pathname !== pathname) {
            //     history.replace(pathNameWithSearch);
            // }
        };
        window.addEventListener('popstate', handlePopState);
        return () => {
            window.removeEventListener('popstate', handlePopState);
        };
    }, []);
}
