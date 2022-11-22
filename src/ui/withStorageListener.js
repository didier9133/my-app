import React, { useEffect, useState } from 'react';

export default function withStorageListener(WrappedComponent){
    return( function WrappedComponentWithStorageListener(props){
        
        const[storageChange, setStorageChange]=React.useState(false)
        const onChange=(e)=>{
            if(e.key==='todosV1'){
                setStorageChange(true)
            }
        }

        useEffect(()=>{ 
            window.addEventListener('storage',onChange)
            
            return ()=>{
                window.removeEventListener('storage',onChange)
            }
            
        },[storageChange])

        const toggleShow=()=>{
            props.sincronize()
            setStorageChange(false)
        }

        return(
            <WrappedComponent storageChange={storageChange} toggleShow={toggleShow}>

            </WrappedComponent>
        )
    })
}