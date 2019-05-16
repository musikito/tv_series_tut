import React, {Component} from 'react';
import './App.css';
import Intro from "../Intro";



class App extends Component {

  state = {
    series: []
  }

  componentDidMount(){
    const series = ["tv1","tv2","tv3"];

    setTimeout(()=>{
      this.setState({series:series});
    },3000)
  }

  render() {
    return (
      <div className="App">
        <Intro  message = "Your most loved series"/>
        The length of our array is - {this.state.series.length}
        
      </div>
    );
  }
  
}

export default App;
