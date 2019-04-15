import React from 'react';
import { isEmpty } from 'ramda';
import { Spin } from 'antd';
import { StyleSheet, css } from 'aphrodite';


const styles = StyleSheet.create({
    loader: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        height: '85vh',
        width: '100%'
    }
});


export const withLoader = Component => {
    return (props) => (
        isEmpty(props)
            ? <Spin className={css(styles.loader)} type='loading' size='large' />
            : <Component { ...props } />
        )
};
