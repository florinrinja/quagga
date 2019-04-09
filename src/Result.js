import React, { Component } from 'react';

export default class Result extends Component {
    render() {
        const result = this.props.result;
        
        if (!result) {
            return null;
        }
        return (
            <p>
                {result.codeResult.code} 
            </p>
        );
    }
}

// line 12 
//{result.codeResult.code} [{result.codeResult.format}]