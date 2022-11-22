import React from 'react';
import { useNavigate } from 'react-router-dom';
import EditIcon from './TodoIcon/EditIcon';
import './TodoItem.css';

export default function TodoItem({completed, text,completeTodos, deleteTodos, id}){
    const navigate=useNavigate()
 
    return(
        <li className='TodoItem'>
            <span className={`Icon Icon-check ${completed && 'Icon-check--active'}`}onClick={()=>completeTodos(id)}> 
                ✔
            </span>
            <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>
                {text}
            </p>
            <span className="Icon Icon-delete" onClick={()=>deleteTodos(id)}>
                ❌
            </span>

            <EditIcon editTodos={()=>navigate(`edit/${id}`)}></EditIcon>
        </li>
    )
        
    
}

//&& este operador de cortocircuito valida si props.completed es verdadero ejecuta Icon-check--active y si no ejecuta el valor de props.completed