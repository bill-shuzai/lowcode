import { useState} from "react";
import {Button} from 'antd';
import {Prompt, Link} from "react-router-dom";
// import style from './index.css';

const Home = () => {
    const [isPrompt, setIsPrompt] = useState(false);

    const onButtonClick = () => {
        setIsPrompt(!isPrompt);
    }

    return (
        <div>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                <Button type="primary" onClick={onButtonClick}>{isPrompt ? '需要展示离开弹窗' : '不展示'}</Button>
                <Link to='/sub'>其他页</Link>
            </div>
            <div>test</div>
            <Prompt when={isPrompt} message='是否不保存退出'></Prompt>
        </div>
    );
}

export default Home;