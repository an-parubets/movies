import React  from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from 'antd';
import { StyleSheet, css } from 'aphrodite';


import Header from './Header/Header';
import Routes from './routes';
import Footer from './Footer/Footer';
import ScrollToTop from './shared/ScrollToTop';


const styles = StyleSheet.create({
    container: {
        margin: '25px auto',
        minHeight: '85vh',
        padding: '0 50px'
    }
});


const Content = () => (
    <ScrollToTop>
        <Layout.Content className={css(styles.container)}>
            <Routes />
        </Layout.Content>
    </ScrollToTop>
);


export default function App() {
    return (
        <Router>
            <Header />
            <Content />
            <Footer />
        </Router>
    )
}