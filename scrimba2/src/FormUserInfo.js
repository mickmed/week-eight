import React from 'react'

class FormUserInfo extends React.Component{
    constructor(){
        super()
        this.state = {
            firstName: '',
            lastName: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }


    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    render(){
        return(
            <div>
            <form>
                <input 
                type="text" 
                value={this.state.firstName} 
                name="firstName" 
                placeholder="First Name" 
                onChange={this.handleChange}/>
                
                <input 
                type="text" 
                value={this.state.lastName} 
                name="lastName" 
                placeholder="Last Name" 
                onChange={this.handleChange}/>

                <h1>{this.state.firstName}{this.state.lastName}</h1>
            </form>
            <hr></hr>
            </div>
        )
    }
}
export default FormUserInfo