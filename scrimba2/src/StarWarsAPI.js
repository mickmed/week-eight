import React from 'react'

class StarWarsAPI extends React.Component{
    constructor(){
        super()
        this.state = {
            character: [],
            loading: true
        }
    }
    componentDidMount(){
        setTimeout(() => {
            fetch("http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=d0b2ad981ba2537740c52d989d291554")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    loading: false,
                    character:data
                })
            })
        }, 1500)
        
       
    }
    render(){
        const text = this.state.loading ? "loading..." : this.state.character.name
        return(
            <div>
                <p>{text}</p>
                <hr></hr>
            </div>
        )
    }
}

export default StarWarsAPI