import React from 'react';
import './CreateTodoButton.css';
import { useNavigate } from 'react-router-dom';

export default function CreateTodoButton ({openNew}){
    
    const navigate=useNavigate()
    
    const navegador=()=>{
      (openNew)
        ?navigate('/')
        :navigate('/new')  
      
        
    }

    return(
        <>
           <button className={`CreateTodoButton ${openNew && 'CreateTodoButtonOpen'}`} onClick={(e)=>navegador()}>+</button>   
        </>
    )
    
}


