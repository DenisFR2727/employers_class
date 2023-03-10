import { Component } from "react";
// import "./employers-add-form.css";
import './employers-add-form.scss';

class EmployersAddForm extends Component{
     constructor(props){
          super(props);
          this.state = {
               name: '',
               salary: '',
          }

     }
     onValueChange = (e) => {
         this.setState({
              [e.target.name]:e.target.value
         })
     }
     addSubmit = (e) => {
          e.preventDefault();
          if(this.state.name === "" && this.state.salary === ""){
              return ""
          }
       this.props.onAdd(this.state.name,this.state.salary)
       this.setState({
          name:'',
          salary:''
       })
     }
    render(){
          const {name, salary } = this.state;
       return (
               <div className="app-add-form">
               <h3>Добавити нового співробітника</h3>
               <form
               onSubmit={this.addSubmit} 
               className="add-form d-flex">
               <input type="text"
                    className="form-control new-post-label"
                    placeholder="Як його звати?"
                    onChange={this.onValueChange}
                    name="name"
                    value={name}
                    />    
               <input type="number"
                    className="form-control new-post-label"
                    placeholder="З/П в $?"
                    onChange={this.onValueChange}
                    name="salary"
                    value={salary}
                    />
               
               <button type="submit" className="btn btn-outline-light">
                    Додати
               </button>
               </form>
          </div>
       )
    }
 
}
export default EmployersAddForm;