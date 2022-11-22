import React from 'react';
import TodoIcon from '.';

export default function EditIcon({editTodos}){
    return(
        <TodoIcon type={'edit'} onClick={editTodos} ></TodoIcon>
    )
}