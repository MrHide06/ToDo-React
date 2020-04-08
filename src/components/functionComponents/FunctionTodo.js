import React, {useState} from 'react'
import '../../App.scss'
import ListItems from './ListItems'

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
        console.log(newItem);
        const toItem = todo.items
            const newItems=[...toItem,newItem];
            setTodo({
                items:newItems,
                    currentItems:{
                        text:'',
                        key:''
                    }
                }
            )
            console.log(newItems)

        
    }
    
    const deleteItem = (key) => {
        const filteredItems = todo.items.filter(item =>
            item.key!==key);
        setTodo({
            items:filteredItems
        })
    }
    const setUpdate = (text, key) =>{
        const items = todo.items;
        items.map(item =>{
            if(item.key===key){
                item.text=text;
            }
        })
        setTodo({
            items:items
        })
    }
    
    return (
        <div>
            <header>
                <form id="to-do-form" onSubmit={addItem}>
                    <input type="text" placeholder="Enter Text" 
                        value={todo.currentItems.text}
                        onChange={handleInput}
                    />
                    <button type="submit">Add</button>
                </form>
            </header>
                {/* <ListItems items={todo.items} 
                    deleteItem={deleteItem}
                    setUpdate={setUpdate}
                /> */}
        </div>
    )
}
