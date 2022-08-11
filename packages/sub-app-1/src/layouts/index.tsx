import {Descriptions, Layout, Menu, Typography} from "antd";
import React, {useEffect, useState} from "react";
import {useHistory} from "umi";
import './index.less'

const {Sider, Content} = Layout
const {Title} = Typography;

export default function BasicLayout(props: React.PropsWithChildren<any>) {

  const menus = [
    {
      key: '/one',
      label: '应用间通信',
    },
    {
      key: '/two',
      label: '应用间嵌套',
    },
    {
      key: '/sub-app-3',
      label: '路由微应用嵌套',
      children: [
        {
          key: '/sub-app-3/one',
          label: '嵌套路由1',
        },
        {
          key: '/sub-app-3/three',
          label: '嵌套路由2',
        }
      ]
    },
  ]

  const history = useHistory()

  const [openKeys, setOpenKeys] = useState<string[]>([])

  useEffect(() => {
    const arr = history.location.pathname.split('/')
    if (arr.length > 1) {
      setOpenKeys(arr.slice(1, arr.length - 1).map(path => '/' + path))
    }
  }, [])

  return (
    <Layout className="site-layout-background" style={{height: '100vh'}}>
      <Sider className="site-layout-background" width={200}>
        <Menu
          mode="inline"
          selectedKeys={[history.location.pathname]}
          style={{height: '100%'}}
          openKeys={openKeys}
          onClick={event => {
            history.push(event.key)
          }}
          onOpenChange={setOpenKeys}
          items={menus}
        />
      </Sider>
      <Content style={{padding: '24px', minHeight: 280, background: '#fff'}}>

        <Title level={4}>当前微应用</Title>
        <Descriptions bordered column={1} style={{marginBottom: 16}}>
          <Descriptions.Item label={'名称'}>sub-app-1</Descriptions.Item>
          <Descriptions.Item label={'框架'}>React</Descriptions.Item>
          <Descriptions.Item label={'构建'}>基于umi3 + @umijs/plugin-qiankun</Descriptions.Item>
          <Descriptions.Item label={'当前路由'}>{history.location.pathname}</Descriptions.Item>
        </Descriptions>

        {props.children}
      </Content>
    </Layout>
  )
}
