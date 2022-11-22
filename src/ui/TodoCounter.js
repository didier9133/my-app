import React from 'react';
import './TodoCounter.css';

export default function TodoCounter({completedTodos, totalTodo}){

    return(
        <h2 className='TodoCounter'>Has Completado {completedTodos} de {totalTodo} TODOs</h2>
    )
    
}