import React, {useState} from 'react'
import ModalWindow from './modalWindow/modalWindow'
import ButtonR from '../../UI/buttonR/buttonR'

const Appp = () => {
const [modalActive,setModalActive] = useState(false)
    return(
        <div>
            
            <ModalWindow active = {modalActive} setActive ={setModalActive}/>
               
        
            
            <ButtonR onClick = {()=> setModalActive(true) }></ButtonR>
             
        </div>


    )}
    
export default Appp