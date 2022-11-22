import React from 'react';
import useLocalStorage from './useLocalStorage';

function generatotID(todos){
  const INITIALVALUE=1
  const idList=todos.map(element=>element.id)
  const idMax=idList.length? Math.max(...idList)+1 :INITIALVALUE

  return idMax
}

export default function useTodos(){
    // const[openModal,setOpenModal]=React.useState(false)
    
    const{item:todos, persistenciaItem:persistenciaTodos,loading, error, sincronize}=useLocalStorage('todosV1',[])
    const[searchValue, setsearchValue]=React.useState('')
  
    const[openNew, setOpenNew]=React.useState(false)
    
    const completeTodos=(id)=>{
      const newTodos=[...todos]
      const todoIndex= newTodos.findIndex(i=>i.id===id)
      newTodos[todoIndex].complete ?newTodos[todoIndex].complete=false :newTodos[todoIndex].complete=true
      persistenciaTodos(newTodos)
    }
    
    const addTodos=(text)=>{
      const id=generatotID(todos)
      const newTodos=[...todos]
      newTodos.push({text,complete:false,id})
      persistenciaTodos(newTodos)
    }

    const deleteTodos=(id)=>{
      const newTodos=[...todos]
      const todoIndex= newTodos.findIndex(i=>i.id===id)
      newTodos.splice(todoIndex,1)
      persistenciaTodos(newTodos)
    }

    const editTodos=(index,newText)=>{
      const newTodos=[...todos]
      newTodos[index].text=newText
      persistenciaTodos(newTodos)
    }
  
    const completedTodos=todos.filter(i=>i.complete).length
    const totalTodo=todos.length
  
    const searchLower=searchValue.toLocaleLowerCase()
    let searchedArr;
  
    
    if(!searchValue>=1){
      searchedArr=todos
    }else{
      searchedArr= todos.filter(i=>{
        const todoLower=i.text.toLocaleLowerCase()
        return todoLower.includes(searchLower)
  
      })

    }
    
    return(
      {
        completedTodos,
        totalTodo,

        searchValue, 
        setsearchValue,

        deleteTodos, 
        completeTodos, 
        searchedArr,
        loading,
        error,
        persistenciaTodos,
        addTodos,
        sincronize,
        openNew,
        setOpenNew,
        editTodos,
        todos  
      }
    )
}

