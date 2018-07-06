import React, { Component } from 'react';
import './Footer.css'

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    Some text here &#169; {new Date().getFullYear()}</div>
            </footer>
        );
    }
}

export default Footer;