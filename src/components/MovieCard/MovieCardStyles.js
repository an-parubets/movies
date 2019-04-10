import { StyleSheet } from 'aphrodite';

export const styles = StyleSheet.create({
    movie: {
        border: '1px solid rgba(0,0,0, 0.2)',
        boxShadow: '0 0 10px rgba(0,0,0, 0.3)',
        color: 'black',
        marginBottom: '20px',
        marginLeft: '20px',
        maxWidth: '440px',
        padding: '50px',
        position: 'relative',
        textDecoration: 'none',
        transition: 'box-shadow 0.3s',
        width: '45%',
        ':hover': {
            boxShadow: '0 0 10px rgba(0,0,0, 0.5)'
        }
    },
    info: {
        color: 'grey',
        display: 'flex',
        justifyContent: 'space-between',
        left: '0',
        margin: '0 50px',
        position: 'absolute',
        top: '20px',
        width: '80%'
    },
    title: {},
    picture: {
        width: '100%'
    },
    img: {
        width: '100%'
    },
    overview: {
        marginTop: '20px'
    }
});
