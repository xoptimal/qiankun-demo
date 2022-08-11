import React, {useEffect, useRef, useState} from "react";
import {PageContainer} from '@ant-design/pro-components';
import {MicroApp} from '@umijs/max';
import {loadMicroApp} from "qiankun";
import {customFetch} from "@/utils/helper";
import {Divider, Modal, Typography} from "antd";

const {Title, Text, Paragraph} = Typography;

let microApp: any = null;

const LoadMicroApp: React.FC = () => {

    const [replyMessage, setReplyMessage] = useState('')

    const containerRef = useRef(null)

    const handleOk = (type: number) => {
        if (type === 2) {
            setReplyMessage("you're welcome")
        } else {
            microApp.update({
                base: '/',
                replyMessage: "you're welcome",
                message: 'hello sub-app-3, load as loadMicroApp function',
                callback: (message: string) => callback(message, 3)
            })
        }
    }

    const callback = (message: string, type: number) => {
        Modal.success({
            title: `来自微应用sub-app-${type}的信息`,
            content: message,
            okText: "reply you're welcome",
            onOk: () => handleOk(type)
        });
    }

    useEffect(() => {
        if (containerRef.current) {
            microApp = loadMicroApp({
                name: 'sub-app-3',
                entry: '//localhost:5003',
                container: containerRef.current,
                props: {
                    base: '/',
                    message: 'hello sub-app-3, load as loadMicroApp function',
                    callback: (message: string) => callback(message, 3)
                },
            }, {
                // @ts-ignore
                fetch: customFetch
            });
        }
        return () => {
            microApp?.unmount()
            microApp = null
        }
    }, [containerRef.current])

    return (
        <PageContainer
            ghost
            title={"挂载微应用"}
        >
            <Typography>
                <ul>
                    <li>
                        <Title level={5}>微应用(sub-app-2)</Title>
                        <Text>基于umi-MicroApp组件</Text>
                        <div style={{border: 'solid 1px #cecece'}}>
                            <MicroApp
                                name="sub-app-2"
                                message={"hello sub-app-2, load as umi-MicroApp component"}
                                replyMessage={replyMessage}
                                callback={(message: string) => callback(message, 2)}/>
                        </div>
                        <Divider/>
                    </li>
                    <li>
                        <Title level={5}>路由微应用(sub-app-3)</Title>
                        <Text>基于qiankun-loadMicroApp方法</Text>
                        <div style={{border: 'solid 1px #cecece'}} ref={containerRef}/>
                    </li>
                </ul>
            </Typography>

        </PageContainer>
    );
};

export default LoadMicroApp;
