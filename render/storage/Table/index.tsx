import React from "react";
import basic from './basic';
import {Renderer} from '../../core/factory'

const Table = (props) => {
    const {schema, observable} = props;
    return (
        <div>
            this is a table components
        </div>
    );
};

export default Renderer(basic)(Table);