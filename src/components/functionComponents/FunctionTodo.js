import React, {useState} from 'react'
import '../../App.scss'
import ListItems from './ListItems'
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'

export default function FunctionTodo(props) {
    const [todo, setTodo] = useState({
        items:[],
        currentItems:{
            text:'',
            key:'',
        }    
    })
    
    const handleInput = (event)=>{
        setTodo({
            ...todo,
            currentItems:{
                text:event.target.value,
                key:Date.now()
            }
        })
        console.log(todo)
    }
    const addItem = (event) => {
        event.preventDefault();
        const newItem = todo.currentItems;
        if(newItem.text !==""){
        const newItems = [...todo.items, newItem];
        setTodo({
            items: newItems,
            currentItems: {
            text: "",
            key: "",
                    }
                }
            )
            console.log(newItems)
        }
        
    }
    
    const deleteItem = (key) => {
        const filteredItems = todo.items.filter(item =>
            item.key!==key);
            console.log(filteredItems)
            setTodo((prevState) => {
                return({
                ...prevState,
                items: filteredItems
                });
                }); 
        
    }
    const setUpdate = (text, key) =>{
        const items = todo.items;
        items.map(item =>{
            if(item.key===key){
                item.text=text;
            }
        })
        setTodo((prevState) => {
            return({
            ...prevState,
            items: items
            });
            }); 
    }
    
    return (
        <div className="bodyFunction">
                <Form className='todoform' onSubmit={addItem}>
                    <input type="text" placeholder="Function Todo" 
                        value={todo.currentItems.text}
                        onChange={handleInput}
                        className="border border-primary"/>
                    <input className="ml-3 rounded bg-primary text-white" type="submit" />
                </Form>
            
            {todo.items.map((item, key) => (
                <ListItems 
                    item={item} 
                    deleteItem={deleteItem}
                    setUpdate={setUpdate}
                />
            ))}
        </div>
    )
}
