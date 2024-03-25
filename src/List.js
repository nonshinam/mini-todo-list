
import React from 'react'

import {IoMdDoneAll} from 'react-icons/io'
import {TbTrashX} from 'react-icons/tb'


export default function Cart (props) {

  function removeAll(event){
    props.onClickRemoveAll(event)
  }
  function tikTask(id){
    props.onTik(id)
  }
  function removeTask(id){
    props.onRemove(id)
  }
  
    return (
      <>
        <div className={`itemBox ${props.state ?'line':''}`} >
          <button onClick={()=>tikTask(props.id)}><IoMdDoneAll/></button> 
          <h5 className='clock'>{props.clock}</h5>
          <h5 className='task'>{props.task}</h5>
          <button onClick={()=>removeTask(props.id)}><TbTrashX/></button>
        </div>
      </>
    )
  }


