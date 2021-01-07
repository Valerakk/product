import React, {Component} from 'react'
import classes from './modalWindowEl.css'
import getData from '../../../../dataJSON'




class ModalWindowEL extends Component {
  

  
  state = {}
  componentDidMount(){
  getData().then((res) => { const book = res.books.find(book => book.id === 1)
    this.setState(book)})
    
   
  }


  handleCange = (event) => {
    const {name,value} = event.target
    this.setState({[name]:value})
     console.log(event.target.value)

  }
   
   
   
    render()
    {
      return (
       
        <div className={classes.BookElemLI}>
          <form >
           
           <b> Автор:</b>
           <input  type='text' name = 'author'  value = {this.state.author}  
           onChange = {this.handleCange.bind(this)}/>
           
            <b>Назва:</b>
            <input type='text' name = 'name' value = {this.state.name} 
            onChange = {this.handleCange.bind(this)}/>            
          
            <b>Оцінка:</b>
            <input type='number' name = 'stars'  value = {this.state.stars} 
            onChange = {this.handleCange.bind(this)}/>
            
            <button type = 'button' onClick = {()=>this.props.handleSubmit(this.state)} >Зберегти</button> {''}
            <button type = 'reset' onClick = {()=>this.props.onCancel(false)} >Скасувати</button>
            </form>
        </div>
          
        
      
       
      )
    }
  }
  
  export default ModalWindowEL