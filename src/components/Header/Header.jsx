import React from 'react';
import { Layout, Menu } from 'antd';

const Header = () => {
    return (
        <Layout.Header >
            <Menu theme='dark'
                  mode="horizontal"
                  defaultSelectedKeys={['1']}
                  style={{ lineHeight: '64px' }}>
                <Menu.Item key='1'>Популярные</Menu.Item>
                <Menu.Item key='2'>Новинки</Menu.Item>
                <Menu.Item key='3'>Топ просмотров</Menu.Item>
            </Menu>
        </Layout.Header>
    )
};

export default Header;
