import { Component } from "react";
import styled from "styled-components";
import "../src/components/employers-add-form/employers-add-form.css";


const ButtonActive = styled.div`
      button {
        background: ${props => !props.active ? "blue" : null}
      }

`
class AddUsers extends Component{
    constructor(props){
        super(props)
        this.state = {
               name: "",
               age: "",
               active: true
        }
    }
    
    addSubmit = (e) => {
        e.preventDefault()
        if(this.state.name ==="" && this.state.age === ""){
              return
        }
          this.props.onAdd(this.state.name,this.state.age)
          this.setState({
            name:"",
            age:''
          })
    }
    onValueChange = (e) => {
         this.setState({[e.target.name]:e.target.value})
    }
    render(){
       const {name , age} = this.state;

        return(<form
            onSubmit={this.addSubmit} 
            className="add-form d-flex">
            <input type="text"
                 className="form-control new-post-label"
                 placeholder="Name"
                 onChange={this.onValueChange}
                 name="name"
                 value={name}
                 
                 />    
            <input type="number"
                 className="form-control new-post-label"
                 placeholder="Age"
                 onChange={this.onValueChange}
                 name="age"
                 value={age}
                 
                 />
            <ButtonActive>
                <button type="submit" className="btn btn-outline-light">
                    Додати
                </button>
            </ButtonActive>
            </form>)
    }
}
export default AddUsers;