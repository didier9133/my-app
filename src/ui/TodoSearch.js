import React,{useEffect} from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import './TodoSearch.css';


export default function TodoSearch({searchValue, setsearchValue, loading}){
    
    const{searchedValue}=useParams()
    const location=useLocation()
    console.log(location.key)
    let navigate=useNavigate()
    let prevValue

    useEffect(()=>{
        if(location.key==='default' && searchedValue){
            prevValue=searchedValue
            setsearchValue(prevValue)
        } 
    },[])
  
    const onWritteble=(e)=>{
        prevValue= e.target.value 
        setsearchValue(prevValue)
        prevValue
            ?navigate(`/results/${prevValue}`)
            :navigate('/')
    }

    
    return(
        <div>
           
            <input onChange={onWritteble} disabled={loading} value={prevValue} className='TodoSearch' placeholder='Search...'></input>
            
        </div>
        
    )
    
}

