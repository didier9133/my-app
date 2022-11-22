import React from 'react';
import { HashRouter, Route, Routes} from 'react-router-dom';
import CreateNewTodo from './create/CreateNewTodo';
import EditTodoPAge from './edit/EditTodoPage';
import HomeTodoPage from './home/HomeTodoPage';
import useTodos from './useTodos';
import CreateTodoButton from '../ui/CreateTodoButton';
import TodoForm from '../ui/TodoForm';
import {ChangeAlertwithStorageListener} from '../ui/ChangeAlert'
import './App.css'
 

function App(){
  const {setOpenNew,openNew,completedTodos, totalTodo,searchValue, setsearchValue,searchedArr,loading,error, deleteTodos,completeTodos, results, setResults, sincronize,addTodos, editTodos}= useTodos()

  return(
    <>
      <HashRouter>
        <Routes>
          <Route path='/' element={   
            <HomeTodoPage 
            setOpenNew={setOpenNew} openNew={openNew} completedTodos={completedTodos} totalTodo={totalTodo} searchValue={searchValue} setsearchValue={setsearchValue} searchedArr={searchedArr} loading={loading} error={error} deleteTodos={deleteTodos} completeTodos={completeTodos} results={results} setResults={setResults} >
            </HomeTodoPage>}> 
          </Route>

          <Route path='/results/:searchedValue' element={
            (!loading &&  <HomeTodoPage 
              setOpenNew={setOpenNew} openNew={openNew} completedTodos={completedTodos} totalTodo={totalTodo} searchValue={searchValue} setsearchValue={setsearchValue} searchedArr={searchedArr} loading={loading} error={error} deleteTodos={deleteTodos} completeTodos={completeTodos} results={results} setResults={setResults} >
              </HomeTodoPage>)   
           }> 
          </Route>
           
          <Route path='/new' element={
            <CreateNewTodo>
              <div className='container-todo'>
                <TodoForm addTodos={addTodos}></TodoForm>
                <CreateTodoButton openNew={!openNew}/>
              </div>  
            </CreateNewTodo>}>
          </Route>
          
          <Route path='/edit/:id' element={
            <EditTodoPAge>
              <div className='container-todo'>
                {loading && <span>Cargando...</span>} 
                {!loading && 
                <>
                  <TodoForm addTodos={addTodos} searchedArr={searchedArr} editTodos={editTodos}></TodoForm>
                  <CreateTodoButton setOpenNew={setOpenNew} openNew={!openNew}/>
                </>}
              </div>
            </EditTodoPAge>}>
          </Route>
          
          <Route path='*' element={<span>NOT FOUND</span>}></Route>
        </Routes>
   
      </HashRouter>

      <ChangeAlertwithStorageListener sincronize={sincronize}></ChangeAlertwithStorageListener>
    </>
    
  )

}

export default App

// openNew={openNew} setOpenNew={setOpenNew} addTodos={addTodos}