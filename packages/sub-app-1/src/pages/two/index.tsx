import {MicroApp, MicroAppWithMemoHistory, useHistory} from "umi";
import {Divider, Modal, Typography} from "antd";
import {useState} from "react";

const {Title, Text, Paragraph} = Typography;

export default function Two() {

  const [replyMessage, setReplyMessage] = useState('')
  const [replyMessage2, setReplyMessage2] = useState('')

  const handleOk = (type: number) => {
    if (type === 2) {
      setReplyMessage("you're welcome")
    } else {
      setReplyMessage2("you're welcome")
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

  const history = useHistory()

  return (
    <div>
      <Typography>
        <Title level={4}>应用间嵌套</Title>
        <ul>
          <li>
            <Title level={5}>微应用(sub-app-2)</Title>
            <Text>基于umi-MicroApp组件</Text>
            <div style={{border: 'solid 1px #cecece'}}>
              <MicroApp name="sub-app-2"
                        message={"hello sub-app-2"}
                        replyMessage={replyMessage}
                        callback={(message: string) => callback(message, 2)}/>
            </div>
            <Divider/>
          </li>
          <li>
            <Title level={5}>路由微应用(sub-app-3)</Title>
            <Text>基于umi-MicroAppWithMemoHistory组件</Text>
            <Paragraph>
              加载微应用对应的路由页面, 需要配置base, 以及访问的路径
            </Paragraph>
            <div style={{border: 'solid 1px #cecece'}}>
              <MicroAppWithMemoHistory name="sub-app-3"
                                       base={window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__ ? '/sub-app-1' : '/'}
                                       message={"hello sub-app-3"}
                                       replyMessage={replyMessage2}
                                       callback={(message: string) => callback(message, 3)}/>
            </div>
            <Text type="danger">需要注意的是url配置是无效的, 只会根据当前主应用下的路径是寻找微应用对应的页面</Text>
          </li>
        </ul>
        <Divider/>
      </Typography>
    </div>
  )
}
