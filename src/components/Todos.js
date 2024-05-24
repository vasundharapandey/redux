import React from 'react'
import { useSelector } from 'react-redux'
import {useDispatch}from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'
import DeleteIcon from '@mui/icons-material/Delete';
function Todos() {

    const todos = useSelector(state => state.todos)
    console.log(todos);
    const dispatch=useDispatch()
    return (
        <>
            <div>Todos</div>

                <ul className='list-none'>
                    {todos.map((todo) => (
                        <li className='mt-4 flex justify-between items-center bg-zinc-800 px-4 py-3 rounded'
                            key={todo.id}>
                            <div className='text-white'>{todo.text}</div>
                            <button onClick={()=>dispatch(removeTodo(todo.id))}className='text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-md'>
                                <svg xmlns='http://www.w3.org/2000/svg' fill="none" viewBox='0 0 24 24' strokeWidth={1.5} stroke="currentColor" className='w-6 h-6'><DeleteIcon /></svg>

                            </button>
                        </li>
                    ))
                
            }


                </ul>

                {/* return <li>{todo.text}</li>
         */}
        </>
    )
}

export default Todos