import React from 'react';
import './assets/css/portal.css';

const Footer = () => {
    const styleFooter = {
        width:  '100%',
        position: 'fixed',
        bottom: '0'
    };
    return (
        <>
            <footer className="app-footer" style={styleFooter}>
                <div className="container text-center py-3">
                    <small className="copyright">Designed with <span className="sr-only">love</span><i className="fas fa-heart" style={{ color: '#fb866a' }}></i> by <a className="app-link" href="http://themes.3rdwavemedia.com" target="_blank">Xiaoying Riley</a> for developers</small>
                </div>
            </footer>
        </>


    );
}

export default Footer;
