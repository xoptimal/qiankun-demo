import './public-path';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const rootId = "#micro-app-3"

function render(props) {
    const {container} = props;
    ReactDOM.render(<App {...props} />, container ? container.querySelector(rootId) : document.querySelector(rootId));
}

if (!window.__POWERED_BY_QIANKUN__) {
    render({});
}

export async function bootstrap(props) {
}

export async function mount(props) {
    render(props);
}

export async function unmount(props) {
    const {container} = props;
    ReactDOM.unmountComponentAtNode(container ? container.querySelector(rootId) : document.querySelector(rootId));
}

export async function update(props) {
    render(props)
}
