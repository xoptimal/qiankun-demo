import {Button, Space} from "antd";
import styles from './index.module.less'

export default function Theme() {

    return (
      <div style={{background: '#f0f0f0', padding: 24, display: "flex", flexDirection: "column"}}>
        <h4>antd-组件库样式</h4>
        <Space>
          <Button type={"primary"}>主应用按钮1</Button>
          <Button>主应用按钮2</Button>
        </Space>
        <Space style={{marginTop: 16}} size={24}>
          <div>
            <h4>CSS Modules</h4>
            <a className={styles.link}>我是Link</a>
          </div>
          <div>
            <h4>内联样式</h4>
            <a style={{color: '#ea1244'}}>我是Link</a>
          </div>
          <div>
            <h4>外联样式</h4>
            <a className={"link"}>我是Link</a>
          </div>
          <div>
            <h4>默认</h4>
            <a>我是Link</a>
          </div>
        </Space>
      </div>
    )
}
