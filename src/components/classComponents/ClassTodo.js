import React from 'react'
import '../../App.scss'
import ListItems from '../classComponents/ListItemsClass'
import {Form, Col} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

library.add(faTrash);

class ClassTodo extends React.Component{
    constructor(props){
        super(props);
        this.state={
            items:[],
            currentItem:{
                text:'',
                key:''
            }
        }
        this.handleInput = this.handleInput.bind(this);
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.setUpdate = this.setUpdate.bind(this);
    }
    handleInput= (event) =>{
        this.setState({
            currentItem:{
                text:event.target.value,
                key:Date.now()
            }
        })
    }
    addItem = (event) =>{
        event.preventDefault();
        const newItem = this.state.currentItem;
        console.log(newItem);
        if(newItem.text !==""){
            const newItems=[...this.state.items, newItem];
            this.setState({
                items:newItems,
                    currentItem:{
                        text:'',
                        key:''
                    }
                }
            )
            console.log(newItems)
        }
        
    }
    deleteItem=(key) =>{
        const filteredItems = this.state.items.filter(item =>
            item.key!==key);
        this.setState({
            items:filteredItems
        })
    }
    setUpdate=(text, key)=>{
        const items = this.state.items;
        items.map(item =>{
            if(item.key===key){
                item.text=text;
            }
        })
        this.setState({
            items:items
        })
    }
    
    render(){
        return(
            <div className="bodyClass">
                
                    <Form className="todoformC" onSubmit={this.addItem}>
                                <input
                                    size="sm"
                                    type="text" placeholder="Class Todo" 
                                    value={this.state.currentItem.text}
                                    onChange={this.handleInput}
                                    className="border border-primary"
                                />
                                <Button type="submit" variant="outline-success">Add</Button>
                    </Form>
                
                <ListItems items={this.state.items} 
                    deleteItem={this.deleteItem}
                    setUpdate={this.setUpdate}
                />
            </div>
        )
    }
}

export default ClassTodo;