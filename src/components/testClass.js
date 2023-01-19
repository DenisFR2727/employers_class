import React from "react";
import ListUsers from "../listUsers";
import AddUsers from "../add-users";
import "./testClass.css"
class TestClass extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
         counter:10,
         count:10,
         users: [
            {name:'Vasa',age: 24,id:1},
            {name:'Denis',age: 30,id:2},
            {name:'Gleb',age: 24,id:3},
         ]
         
      }
      this.id = 4
    }
    Increment = () =>{
         if(this.state.counter <= 40){
            this.setState({counter:this.state.counter + 10})
         }
    }
    Decrement = () =>{
         if(this.state.counter >= -40){
            this.setState({counter:this.state.counter - 10})
         }
          
    }
   Rnd = () =>{
          let  min = Math.ceil(-50);
          let  max = Math.floor(50);
    this.setState({counter:Math.floor(Math.random() * (max - min + 1)) + min}) //Максимум и минимум включаются
   }
   Reset = () =>{
        this.setState((state, props) => ({
            counter: this.state.count
          }));
    
   }
   onAddUser = (name,age) => {
        const user = {
           name,
           age,
           id:this.id
        }
        this.setState(({users}) => {
           const newArr = [...users, user]
           return {
               users:newArr
           }
        }) 
       
   }
   
    
    render() {
       const {users} = this.state;
       console.log(users)
      return (
        <div className="appX">
          <div className="counter">{this.state.counter}</div>
          <div className="controls">
            <button onClick={this.Increment}>INC</button>
            <button onClick={this.Decrement}>DEC</button>
            <button onClick={this.Rnd}>RND</button>
            <button onClick={this.Reset}>RESET</button>
          </div>
          <ListUsers users={users} />
          <AddUsers  onAdd={this.onAddUser}/>
        </div>
      )
    }
  }
  
  export default TestClass;
  
  // 1) Начальное значение счетчика должно передаваться через props
  // 2) INC и DEC увеличивают и уменьшают счетчик соответственно на 1. Без ограничений, но можете добавить границу в -50/50. По достижению границы ничего не происходит
  // 3) RND изменяет счетчик в случайное значение от -50 до 50. Конструкцию можете прогуглить за 20 секунд :) Не зависит от предыдущего состояния
  // 4) RESET сбрасывает счетчик в 0 или в начальное значение из пропсов. Выберите один из вариантов