import React from 'react';
import './TodoItem.css'

export default function TodosLoading(){
    return(
        <>
            <div className='LoadingTodo-container'>
                <div className='Icon LoadingTodo-completeIcon'></div>
                <div className='LoadingTodo-text'></div>
                <div className='Icon LoadingTodo-deleteIcon'></div>
            </div>
            
            <div className='LoadingTodo-container'>
                <div className='Icon LoadingTodo-completeIcon'></div>
                <div className='LoadingTodo-text'></div>
                <div className='Icon LoadingTodo-deleteIcon'></div>
            </div>
            <div className='LoadingTodo-container'>
                <div className='Icon LoadingTodo-completeIcon'></div>
                <div className='LoadingTodo-text'></div>
                <div className='Icon LoadingTodo-deleteIcon'></div>
            </div>
            
       
        </>
   
    // <p>Estamos Cargando, no desesperes</p>
    
    )
}