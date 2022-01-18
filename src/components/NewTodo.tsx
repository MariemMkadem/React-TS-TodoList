import React, {useRef} from "react";
import './NewTodo.css';

type NewTodoProps = {
    onTodo : (text: string)=> void
}

const NewTodo: React.FC<NewTodoProps> = props=> {
    //<> type de contenu
    //(null) contient default value
    const textInputRef = useRef<HTMLInputElement>(null);
    const todoSubmitHandler = (event: React.FormEvent) => {
     /*La méthode preventDefault(), rattachée à l'interface Event, indique à l'agent utilisateur que 
       si l'évènement n'est pas explicitement géré, l'action par défaut ne devrait pas être exécutée 
       comme elle l'est normalement.*/
        event.preventDefault();
        const enteredText= textInputRef.current!.value;
        //console.log(enteredText);
        props.onTodo(enteredText);

    }
    return (
    <form onSubmit={todoSubmitHandler}>
        <div className="form-control"> 
            <label htmlFor="todo-text">todo text</label>
            <input type="text" id="todo-text" ref={textInputRef} />
        </div>
        <button type="submit"> Add todo </button>
    </form>

    )};
export default NewTodo;