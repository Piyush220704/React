import React, {useState} from 'react'
import { useTodo } from '../contexts/TodoContext';


function TodoForm() {
    const [todo, setTodo] = useState("");
    const {addTodo} = useTodo();

    const add = (e) =>{
        e.preventDefault();
        if(!todo.trim()) return; //.trim() will ensure that no whitespace or empty string is added in todo
        addTodo({todo, completed: false}); //this argument is not a todos object it is a string with todo as todomessage(todo in todos object) when the adTodo method is called in app.js it takes a parameter object todo and gives it unique id and spread baaki ka which is here handled by add function
        setTodo('');
    }
    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e)=> setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;