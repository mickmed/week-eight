import React from 'react'

class Logged extends React.Component{
    constructor(){
        super()
        this.state = {
            logged: false
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        console.log('hi')
        this.setState(prevState => {
            return{
                logged: !prevState.logged
            }
        })
        console.log(this.state.logged)
       
    }
    render(){
        return(
            <div>
                <button onClick={this.handleClick}>
                    {this.state.logged ? "LOG OUT" : "LOG IN"}
                </button>
                <hr></hr>
            </div>
        )
    }
    
}
export default Logged