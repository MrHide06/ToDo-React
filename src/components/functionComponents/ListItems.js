import React from 'react'
import '../../App.scss'
import FunctionTodo from './FunctionTodo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FlipMove from 'react-flip-move'


function ListItems({ item, deleteItem , setUpdate}){
    return (
        <div>
            <FlipMove duration={600} easing ="ease-in-out">
            <div className="list" key={item.key}>
                <p>
                    <input type="text" id={item.key} value={item.text}
                        onChange ={
                            (event) => {
                                setUpdate(event.target.value, item.key)
                            }
                        }
                    />
                    <span>
                        <FontAwesomeIcon className="faicons" icon ='trash' 
                            onClick={ () => deleteItem(item.key)}
                        />
                    </span>
                </p>
                
            </div>
            </FlipMove>
        </div>
    )
}

export default ListItems;