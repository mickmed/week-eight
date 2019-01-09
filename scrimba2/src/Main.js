import React from 'react'
import todosData from './todoData'
import ToDo from './ToDo'
import Logged from './Logged'
import FormUserInfo from './FormUserInfo'
import StarWarsAPI from './StarWarsAPI'
import BtnClkCounter from './BtnClkCounter'


class Main extends React.Component{
    constructor(){
        super()
        this.state = {
            todos: todosData
        }
        
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id){
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if(todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }
   
    render(){
        const todoItems = this.state.todos.map(item => <ToDo handleChange={this.handleChange} count={this.state.count} key={item.id} item={item} />)
       
        return(
            <div>
                <FormUserInfo />
                <Logged />
                <StarWarsAPI />
                <BtnClkCounter />
                {todoItems}
                
            </div>
         
        )
    }

}

export default Main
