/* eslint-disable no-unused-vars */
// eslint-disable-next-line react/prop-types
import React, { useState } from 'react'

/*
 {
    name, 
    isCompleted, 
    id, 
 } 
 */

export const TodoList = () => {
    const [todoText, setTodoText] = useState('');
    const [allTodos, setAllTodos] = useState([]);
    
    
    const TodoItem = ({todoItem, index}) => {
        const handleTodoStatusChange = (index) => {
            const mutateTodo = [...allTodos];
            mutateTodo[index].isCompleted = !mutateTodo[index].isCompleted;
            setAllTodos(mutateTodo);
        }

        return (
            <>
                <input type='checkbox' onChange={() => handleTodoStatusChange(index)} checked={todoItem.isCompleted} />
                <span style={{textDecoration: todoItem.isCompleted ? 'line-through' : 'none'}} key={todoItem.id} className='todo-item'>{todoItem.name}</span>
            </>
        )
    }

    const handleTodoInput = (e) => {
        console.log(e);
        const inputValue = e.target.value;
        setTodoText(inputValue);
    }

    const addTodo = () => {
        if(todoText.length) {
            const todo = {
                id: new Date().toString(),
                name: todoText, 
                isCompleted: false,
            }
            setAllTodos((prev) => [...prev, todo]);
            console.log(allTodos);
            setTodoText('');
        }
    }

  return (
    <>
        <div>TodoList</div>
        <div className='todo-input'>
            <input type='text' onChange={handleTodoInput} value={todoText}/>
            <button onClick={addTodo}>Add Todo</button>
        </div>
        <div>
            <h3>All Todos</h3>
            {allTodos.map((todo, index) => (
                !todo.isCompleted ?
                    <div className='all-todos' key={todo.id}>
                        <TodoItem todoItem={todo} index={index}/>
                    </div> 
                : 
                null
            ))}
        </div>

        <div className='completed-todo'>
        <h3>Completed todos</h3>
            {allTodos.map((todo, index) => (
                    todo.isCompleted ?
                        <div className='all-todos' key={todo.id}>
                            <TodoItem todoItem={todo} index={index}/>
                        </div> 
                    : 
                    null
                ))}
        </div>
    </>

  )
}
