import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos:[
        
    ]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action)=>{
            const todo = {
                id: nanoid(),
                text: action.payload.text
            }
            state.todos.push(todo);
        },
        removeTodo: (state, action)=>{
            state.todos = state.todos.filter((todo)=>(todo.id !== action.payload))
        },
        updateTodo: (state, action)=>{
            const {id, text} = action.payload;
            const todo = state.todos.find((todo)=>(
                todo.id === id
            ))
            if(todo){
                todo.text = text;
            }
        }
    }
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions; //for individual components
export default todoSlice.reducer; //this is imported in store.js as todoReducer