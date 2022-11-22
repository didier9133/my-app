import React from 'react';
import withStorageListener from './withStorageListener';
import './ChangeAlert.css'


function ChangeAlert({storageChange, toggleShow}){
    
    if(storageChange)
    return(
        <div className='ChangeAlert-bg'>
            <div className='ChangeAlert-container'>
                <p>Hubo cambios que se realizaron y no se han actualizados</p>
                <button className='TodoForm-button TodoForm-button--add' onClick={()=>toggleShow()}>Refresh</button>

            </div>
        </div>
    )
     
    else return(
        null
    )
        
}

const ChangeAlertwithStorageListener=withStorageListener(ChangeAlert)

export{ChangeAlertwithStorageListener}