import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './TodoForm.css'

export default function TodoForm({addTodos,searchedArr,editTodos}){
    const[newText,setNewText]=React.useState('')
    const {id}=useParams()
    const navigate=useNavigate()
    const elementEdit=id && searchedArr.find(element=>element.id===Number(id))
    const indexElementEdit=id && searchedArr.findIndex(element=>element.id===Number(id))

    const onSubmit=(e)=>{
        e.preventDefault();
        if(id){
            editTodos(indexElementEdit,newText)
        }else{
            addTodos(newText)
        }
        navigate('/')
    }

    if(id && newText ===''){  
        setNewText(elementEdit.text)
    }  

    const onWritable=(e)=>{
        setNewText(e.target.value)
    }


        return(
            <>
                <form onSubmit={onSubmit}>    
                    <label>{!id?'New TODO':'Edit TODO'}</label>
                    <textarea value={newText} onChange={onWritable}></textarea>
                    <button disabled={!newText} className='TodoForm-button--add TodoForm-button' type='submit'>{!id?'New TODO':'Edit'}</button>
                </form>
            </>
        )
}
    
