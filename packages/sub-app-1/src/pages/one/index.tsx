import {connectMaster, useHistory, useModel} from "umi";
import {Button, Descriptions, Divider, Typography} from "antd";
import {useEffect, useState} from "react";
import qiankunConfig from "@/utils/qiankunConfig";

const {Title, Text} = Typography;

function Record(props: any) {
  const handleClick = () => {
    props?.callback({name: 'sub-app-1-one', message: '我收到你的你的slogan啦~'})
  }

  return <>
    <Text>来自主应用消息: {props.slogan}</Text>
    <Button style={{marginLeft: 8}} onClick={handleClick}>Reply</Button>
  </>
}

const Sub = connectMaster(Record)

export default function One(props: any) {

  const globalProps = useModel('@@qiankunStateFromMaster');

  const [qiankun_props] = useState(qiankunConfig.getGlobalProps())
  const [qiankun_state, setQiankenState] = useState(qiankunConfig.getGlobalState())

  useEffect(() => {
    qiankunConfig.addListener((state: any) => {
      setQiankenState(state)
    })
  }, [])

  return (
    <Typography>
      <Title level={2}>主应用通过路由声明实现微应用加载及通信</Title>
      <Title level={4}>应用间通信</Title>
      <ul>
        <li>
          <Title level={5}>基于qiankun-apps的透传</Title>
          <Record {...qiankun_props?.defaultProps} />
          <Divider/>
        </li>
        <li>
          <Title level={5}>基于qiankun-initGlobalState</Title>
          <Record {...qiankun_state} />
          <Divider/>
        </li>
        <li>
          <Title level={5}>基于umi-useModel</Title>
          <Record {...globalProps} />
          <Divider/>
        </li>
        <li>
          <Title level={5}>基于umi-connectMaster</Title>
          <Sub/>
        </li>
      </ul>
      <Divider/>
      <Text type="danger">需要注意的是, umi通信方式仅能在主子都是umi上使用</Text>

    </Typography>

  )

}
