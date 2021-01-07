import React from 'react'
import classes from './modalWindow.css'
import ModalWindowEL from './modalWindowEl/modalWindowEl'

const ModalWindow = ({active,setActive,children}) => {
    const classs = classes.ModalActive + ' ' + classes.ModalWindow;
    const handleSubmit = (value) => {console.log(value) }
   
    return (
      <div className={active ? classs : classes.ModalWindow} onClick={()=>setActive(false)}>
          <div className={classes.ModalContent} onClick={e => e.stopPropagation()}>
          {children}
        
          
          <ModalWindowEL handleSubmit = {handleSubmit}  onCancel = {setActive}/>
         
          </div>
      </div>
     
    )
  }


export default ModalWindow;