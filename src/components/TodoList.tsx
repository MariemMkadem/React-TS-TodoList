import React from 'react'
import './TodoList.css'

//describe how owr props look like
interface todoListProps {
    //array of objects
    items : {id: string, text:string}[];
    onDelete: (todoId: string) => void;

}
// React.FC using extraType feature
// typescript will understand that here we will get props 
const Todolist: React.FC<todoListProps>= props=> {
    return <ul>
        {props.items.map(todo=> (
            <li key={todo.id}>
                <span>{todo.text}</span>
                <button onClick={props.onDelete.bind(null,todo.id)}> DELETE</button>
            </li>
        ))}
    </ul>

};

export default Todolist;