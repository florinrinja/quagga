import React, { Component } from 'react';
import Quagga from 'quagga';


export default class Scanner extends Component {
    constructor(props) {
        super(props);
        this._onDetected = this._onDetected.bind(this);
    }

    componentDidMount() {
        Quagga.init(
            {
                inputStream: {
                    type: 'LiveStream',
                    constraints: {
                        width: 640,
                        height: 480,
                        facingMode: 'environment', // or user
                    },
                },
                locator: {
                    patchSize: 'medium',
                    halfSample: true,
                },
                numOfWorkers: 0,
                decoder: {
                    readers: ['ean_reader', 'ean_8_reader'],
                    debug: {
                        drawBoundingBox: true,
                        showFrequency: false,
                        drawScanline: false,
                        showPattern: false
                    },
                    multiple: false
                },
                locate: true,
            },
            function(err) {
                if (err) {
                    return console.log(err);
                }
                Quagga.start();
            }
        );
        Quagga.onDetected(this._onDetected);
    }

    componentWillUnmount() {
        Quagga.offDetected(this._onDetected);
    }

    _onDetected(result) {
        this.props.onDetected(result);
        Quagga.pause();
    }

    render() {
        return <div id="interactive" className="viewport" />;
    }
}

