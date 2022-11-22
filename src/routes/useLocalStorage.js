import React, {useEffect} from 'react';

export default function useLocalStorage(itemName,initialValue){
    //useState

    // const[error, setError]=useState(false)
    // const[loading, setLoading]=useState(true)
    // const[item,setItemState]=useState(initialValue)
    // const[sinconizedItem, setSincronizedItem]=useState(true)
    
    //ACTION CREATORS (useReducer)

    const onError=(error)=>dispatch({type:actionTypes.error, payload:error})
    const onSucces=(parseItem)=>dispatch({type:actionTypes.succes, payload:parseItem})
    const onSave=(newItem)=>dispatch({type:actionTypes.new, payload:newItem})
    const onSincronize=()=>dispatch({type:actionTypes.sincronize})

    const[state,dispatch]=React.useReducer(reducer, initialState(initialValue))
    
    const{
      sinconizedItem,
      item,
      loading,
      error
    }=state

    useEffect(()=>{
      setTimeout(()=>{
        try{
          let parseItem;
          const localStorageItem=localStorage.getItem(itemName)
          
          if(!localStorageItem){
            localStorage.setItem(itemName,JSON.stringify(initialValue))
            parseItem=initialValue
          }else{
            parseItem=JSON.parse(localStorageItem)
          } 
          onSucces(parseItem)
          //  te(parseItem)
          // setLoading(false)
          // setSincronizedItem(true)
        }catch(error){
          onError(error)

          // setError(error)
        }
      },3000)
  
    },[sinconizedItem])
    
    const persistenciaItem=(newTodos)=>{
      try{
        localStorage.setItem(itemName,JSON.stringify(newTodos))
        onSave(newTodos)
        // setItemState(newTodos)
      }catch(error){
        dispatch({type:actionTypes.error, payload:error})
        // setError(error)
      }
      
    }

    const sincronize=()=>onSincronize()
      // setLoading(true)
      // setSincronizedItem(false)
    
  
    return({
      item,
      persistenciaItem,
      loading,
      error,
      sincronize
    })
  }
  
  const initialState=(initialValue)=>({
    sinconizedItem :true,
    item:initialValue,
    loading: true,
    error: false,
  })

  const actionTypes={
    error:'ERROR',
    succes:'SUCCES',
    new:'NEW',
    sincronize:'SINCRONIZE'
  }

  const reduceObj=(state, payload)=>({
    
    [actionTypes.error]:{
      ...state,
      error:payload,
    },
    
    [actionTypes.succes]:{
      ...state,
      loading:false,
      sinconizedItem:true,
      item:payload

    },

    [actionTypes.new]:{
      ...state,
      item:payload,
    },

    [actionTypes.sincronize]:{
      ...state,
      loading:true,
      sinconizedItem:false,
    }
  })

  const reducer=(state, action)=>{
    return reduceObj(state, action.payload)[action.type] || state
  }

