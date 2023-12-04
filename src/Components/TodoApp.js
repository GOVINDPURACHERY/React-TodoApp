import React, {Component} from 'react';
import './TodoApp.css'
import { MdDelete } from "react-icons/md";
export class TodoApp extends Component{
    state = {
        input : "",
        items : []
    }
    handleChange = (event) => {
        this.setState({
            input : event.target.value
        });
        // console.log(this.state.input);
    };
    storeItems = (event) => {
        event.preventDefault();

        this.setState({
            items : [...this.state.items, this.state.input]
        });
        console.log(this.state.items)
        this.setState({
            input : ""
        })
    };
    deleteItem = (itemNum) => {
        this.setState({
            items : this.state.items.filter((data,index) => index !== itemNum) 
        })
    }
    render(){
        // console.log(this.state.items)
        return(
            <div className='todo-container'>
                <h1>Todo App</h1>   
                <form className='input-section' onSubmit={this.storeItems}>
                    
                    <input type='text'value={this.state.input} placeholder='Type something...' onChange={this.handleChange}/>
                    <button>Add</button>
                </form>
                <div className='listing-container'>
                    <div className='listing-content'>
                        <ul>
                            {this.state.items.map((data,index) => (
                                <li key={index}>{data} <i onClick={() => this.deleteItem(index)} ><MdDelete/></i></li>
                            ))}
                        </ul>
                    </div>
                </div>     
            </div>
        );
    }
}

export default TodoApp;