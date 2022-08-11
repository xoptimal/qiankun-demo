import {useNavigate} from "react-router-dom";

export default function Three(props) {

    const navigate = useNavigate()

    function handleClick() {
        navigate('/one')
    }

    return (
        <div style={{background: '#f0f0f0', minHeight: 300, padding: 24}}>
            <p>加载成功, 当前是sub-app-3/three 路由页面内容</p>
            <button onClick={handleClick}>跳转到one页面</button>
        </div>
    )
}
