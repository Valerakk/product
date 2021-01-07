import React, {Component} from 'react'
node_modules
import classes from './bookElem.css'
import getData from '../../../../dataJSON'
import ModalWindow from '../../modalWindow/modalWindow'


class BookElem extends Component {
   
    state = {}
    componentDidMount(){
    getData().then((res) => { const book = res.books.find(book => book.id === 1)
    this.setState(book)})
    }
     
    updateData = (value) => {
        this.setState ({
          name : value
        })
    }
    
    handleCange = (event) => {
      const {name,value} = event.target
      this.setState({[name]:value})
       console.log(event.target.value)
  
    }
     

    render()
    
    {
     
      return (
       
       <div className={classes.BookElem}>
          
          <ul>
            Автор:
            <div className={classes.BookElemLI}>
            {this.state.author}
            
             <br />
            </div>
            Назва:
            <div className={classes.BookElemLI}>
            {this.state.name}<br />
            </div>
            Оцінка:
            <div className={classes.BookElemLI}>
            {this.state.stars}<br />
            </div>
          </ul>
        </div>
      
       
      )
    }
  }
  
  export default BookElem