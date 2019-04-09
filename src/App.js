import React, { Component } from 'react';
import Scanner from'./Scanner';
import Result from './Result';
import Context from './config/Context';
import ContextProvider from './provider/ContextProvider';
import './App.css'
// import 'Additives' from './Additives'


export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      scanning: false,
      results:[]
    };
    this._scan=this._scan.bind(this);
    this._onDetected=this._onDetected.bind(this);
  }

  _scan() {
    this.setState({scanning: !this.state.scanning});
  }
  
   _onDetected(result){
    this.setState({ results: this.state.results.concat([result])});
    
  }

  render() {
    return (
      <div className="App">
        <button onClick={this._scan}>{this.state.scanning ? 'Stop' : 'Start'}</button>
        <div className="results">
          {this.state.results.map((result, index) => (
            <Result key={index} result={result}/>
          ))}
        {this.state.results.map((result, index) => (
            <ContextProvider key={index} result={result}>
            <Context.Consumer>
            {data=>
              <div>  
                <img  src={data.state.image} alt="product"  />
                <div>
                  <h1><strong>Name : {data.state.name}</strong></h1>
                  <h2>
                    <small>
                      {/* <Additives ingredient={data.state.additives}/> */}
                    </small>
                  </h2>
                </div> 
              </div> 
            }
          </Context.Consumer>
        </ContextProvider>
          ))}


        </div>
        {/* <div>
        {
          !this.state.results.length ? "" :

          
        <ContextProvider >
          <Context.Consumer>
            {data=>
              <div>  
                <img  src={data.state.image} alt="product"  />
                <div>
                  <h1><strong>Name : {data.state.name}</strong></h1>
                  <h2>
                    <small>
                      <Additives ingredient={data.state.additives}/> 
                    </small>
                  </h2>
                </div> 
              </div> 
            }
          </Context.Consumer>
        </ContextProvider>
        }
        </div> */}
        {this.state.scanning ? <Scanner onDetected={this._onDetected}/> : null}
      </div>
    );
  }
}