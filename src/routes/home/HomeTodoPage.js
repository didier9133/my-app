import React from 'react';
import TodoItem from "../../ui/TodoItem";
import TodoList from "../../ui/TodoList";
import TodoCounter from '../../ui/TodoCounter';
import CreateTodoButton from '../../ui/CreateTodoButton';
import TodoHeader from '../../ui/TodoHeader';
import TodosLoading from '../../ui/TodosLoading';
import EmptyTodos from '../../ui/EmptyTodos';
import TodosError from '../../ui/TodosError';
import TodoSearch from '../../ui/TodoSearch';
import EmptyTodosSearched from '../../ui/EmptyTodosSearched';

function HomeTodoPage({results,setOpenNew,openNew,completedTodos, totalTodo,searchValue, setsearchValue,searchedArr,loading,error, deleteTodos,completeTodos,setResults}) {
  
  return( 
    < >
      <TodoHeader>
        <TodoCounter completedTodos={completedTodos} totalTodo={totalTodo}></TodoCounter>
        <TodoSearch  loading={loading} results={results} setResults={setResults} searchValue={searchValue} setsearchValue={setsearchValue}></TodoSearch>
      </TodoHeader>
      
      <TodoList>
            {error && <TodosError error={error}></TodosError>}
            {loading && <TodosLoading></TodosLoading>}
            {(!loading && !totalTodo) && <EmptyTodos ></EmptyTodos>}
            {(searchValue && !searchedArr.length) && <EmptyTodosSearched searchValue={searchValue}></EmptyTodosSearched>}
            {!loading && searchedArr.map(element=>
                <TodoItem id={element.id} key={element.id} text={element.text} completed={element.complete} deleteTodos={deleteTodos} completeTodos={completeTodos}></TodoItem>
            )}
      </TodoList>
{/* 
      {openModal && (
        <Modal>
          <TodoForm addTodos={addTodos} setOpenModal={setOpenModal}></TodoForm>
        </Modal>
      )} */}

      <CreateTodoButton setOpenNew={setOpenNew} openNew={openNew} ></CreateTodoButton> 
      
    </>
  )
  
}

export default HomeTodoPage;

