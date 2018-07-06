import React, { Component } from 'react';
import './Jumbotron.css';

class JumboTron extends Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="containter">
                    <h1 className="display-3">{this.props.title}</h1>
                    <p className="lead">{this.props.subtitle}</p>
                </div>

            </div>

        );
    }
}

export default JumboTron;