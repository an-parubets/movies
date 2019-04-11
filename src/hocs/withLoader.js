import React from 'react';
import { Spin, Icon } from 'antd';

const withLoader = propName => Component => {
    return function () {
        if (isEmpty(propName)) return <Spin indicator={<Icon type={'loading'} style={{ fontSize: 24 }} spin />} />

        return <Component { ...props } />
    }
};

const isEmpty = (prop) => {
    return (
        prop === null
        || prop === undefined
        || (Array.isArray(prop) && prop.lengh === 0)
        || (prop.constructor === Object && Object.keys(prop).length === 0)
    )
};

export default withLoader;