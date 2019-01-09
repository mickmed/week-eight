import React from 'react'
import Greeting from './Greeting'


class Header extends React.Component {
    render (){
        return(
            <header>
                
                <Greeting />
               
            </header>
        )
    }
}

export default Header