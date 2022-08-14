import React from 'react';

const Renderer = (config) => {
    return (component) => {
        // 注册组件
        return component;
    }
}

const render = (props) => {
    return (
        <div>
            开始加载报表
        </div>
    )
}

export {Renderer, render};