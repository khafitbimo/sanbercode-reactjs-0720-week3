import React from 'react';
// import logo from './logo.svg';
import './App.css';
import HargaBuah from './tugas11/HargaBuah';
import CountDown from './tugas12/CountDown'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      count: 10,
      showComponent12: true
    }
  }

  componentDidMount(){
    this.timerID = setInterval(
        ()=>this.tick(),
        1000
    )

    
  }

  tick(){
    this.setState({
        date: new Date(),
        count: this.state.count - 1
    })
    if (this.state.count===0) {
      this.setState({
        showComponent12: !this.state.showComponent12
      })
      clearInterval(this.timerID)
    }
    
  }


  render(){

    return (
      <div>
        
        <HargaBuah />
        {this.state.showComponent12===true ? <CountDown countStart={this.state.count}/> : null}
       
      </div>
      
    );
  }
  
}

export default App;
