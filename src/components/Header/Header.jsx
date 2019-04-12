import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';

const Header = () => {
    return (
        <Layout.Header >
            <Menu theme='dark'
                  mode='horizontal'
                  defaultSelectedKeys={['1']}
                  style={{ lineHeight: '64px' }}>
                <Menu.Item key='1'><Link to={'/'}>Популярные</Link></Menu.Item>
                <Menu.Item key='2'><Link to={'/latest'}>Новинки</Link></Menu.Item>
                <Menu.Item key='3'><Link to={'/'}>Топ просмотров</Link></Menu.Item>
            </Menu>
        </Layout.Header>
    )
};

export default Header;
