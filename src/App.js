import React, { Component } from 'react';
import './App.css';
import NoiDung from './noidung';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      trangthai:"khoitao",
      trangthai2:"khoitao2"
    }
  }


  componentWillMount() {
    console.log('componentWillMount chay roi')
  }

  componentDidMount() {
     console.log('componentDidMount chay roi')
  }

  shouldComponentUpdate(nextProps, nextState) {
     console.log('shouldComponentUpdate chay roi')
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
     console.log('componentWillUpdate chay roi')
    
  }

  componentDidUpdate(prevProps, prevState) {
     console.log('componentDidUpdate chay roi')
    
  }

  capNhatState = () => {
    this.setState({
      trangthai:"trangthai da update"
    });
  }

  render() {     
     console.log('render chay roi')
     console.log(this.state.trangthai)
    return (
      <div className="App">
         <NoiDung ten={this.state.trangthai2}></NoiDung>
         <button onClick={()=>this.capNhatState()}>click update state</button>
      </div>
    );
  }
}

export default App;
