import React from "react";

class BtnClkCounter extends React.Component {
  constructor(){
      super()
      this.state = {
          count: 0
      }
      this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){
    this.setState(prevState => {
        return{
            count: prevState.count + 1
        }
    })
}
  
  render() {
    return (
      <div>
        <h1>click</h1>
        <button onClick={this.handleClick}>{this.state.count}</button>
        <hr />
      </div>
    );
  }
}

export default BtnClkCounter;
