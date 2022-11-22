import React from 'react';

export default function EmptyTodosSearched({searchValue}){
    return(
        <p>{`No hay resultados para "${searchValue}"`}</p>
    )
}