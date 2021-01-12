import React, { Component} from "react";
import classes from "./modalWindowEl.css";





class ModalWindowEL extends Component {

  constructor(props) {
    super(props);
    this.state = {...props.statee,errors:{name:"",author:"",stars:"" },}
  
    }
  
  

  componentDidUpdate(prevProps){
    if (prevProps.statee !== this.props.statee )
    this.setState({...this.props.statee})
  }
  
  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = {...this.state.errors}

    switch(name){
      case 'author':
        errors.author = 
        value.length < 1
        ? 'Поле не повинно бути пустим'
        : "";
    break;
      case 'name':
        errors.name = 
        value.length < 1
        ? 'Поле не повинно бути пустим'
        : "";
    break;
      case 'stars':
        errors.stars = 
        value.toString().length  > 0 
        ? ""
        : 'Поле не повинно бути пустим';
    break;
    default:
    break;

    }





    this.setState({errors, [name]: value } );
          
    
    
  };

  


  
  


  render() {
    const {handleSubmit,onCancel} = this.props;
    return (
      <div className={classes.BookElemLI}>
        <form >
          <b> Автор:</b>
          <input
            type="text"
            name="author"
            value={this.state.author}
            onChange={this.handleChange} 
          />
          {this.state.errors.author && this.state.errors.author.length  > 0 && (
                <span >{this.state.errors.author}</span>)}<br/>
         
          <b>Назва:</b>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
           {this.state.errors.name && this.state.errors.name.length > 0 && (
                <span >{this.state.errors.name}</span>)}<br/>
          
          <b>Оцінка:</b>
          <input
            type="number"
            name="stars"
            value={this.state.stars}
            onChange={this.handleChange}
            />
             {this.state.errors.stars && this.state.errors.stars.length > 0 && (
                <span >{this.state.errors.stars}</span>)}<br/>
          <button type="button" disabled={!this.state.author || !this.state.name || !this.state.stars} onClick={() => handleSubmit(this.state)}>
            Зберегти
          </button>{" "}
          {""}
          <button type="reset" onClick={() => onCancel(false)}>
            Скасувати
          </button>
        
        </form>
      </div>
    );
  }
}


export default ModalWindowEL;
