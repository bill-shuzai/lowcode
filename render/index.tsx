import React from 'react';
import {render} from './core/factory';

const LcRenderer = (props) => {
    const {config, initData} = props;
    return (
        <>
            render(config);
        </>
    );
};

export default LcRenderer;