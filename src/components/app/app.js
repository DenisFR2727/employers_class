import React from "react";
import { Component } from "react";
import nextId from "react-id-generator";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployersList from "../employers-list/employers-list";
import EmployersAddForm from "../employers-add-form/employers-add-form";
import TestClass from "../testClass";
import "./app.css";

class App extends Component{
    constructor(){
        super()
         this.state = {
             data: [
                {name:"John C.", salary:800, increase:false,rise:false,id:1},
                {name:"Denis H.", salary:300, increase:false,rise:true,id:2},
                {name:"Bob V.", salary:1200, increase:false,rise:false,id:3}
            ],
            term: "",
            filter:"",
         }
         this.maxId = nextId(100)
    }
    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data:data.filter(item => item.id  !== id)
            }
        })
    }
    onAddItem = (name,salary) => {
          const newItem = {
             name,
             salary,
             increase:false,
             rise:false,
             id:this.maxId
          }
          this.setState(({data}) =>{
              const newArr = [...data,newItem]
              return {
                 data:newArr
              }
          })
    }
    onToggleIncrease = (id) => {
         this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id){
                    return {...item, increase: !item.increase}
                }
                return item
            })
         }))
    }
    onToggleRise= (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id){
                    return {...item, rise: !item.rise}
                }
                return item
            })
         }))
    }
    searchEmp = (items, term) => {
        if(term.length === 0){
            return items
        }
        
        return items.filter(item =>{ return item.name.toLowerCase().indexOf(term) > -1 })
    }
    onUpdateSearch = (term) => {
        this.setState({term})
    }
    filterSearchEmp = (items,filter) => {
           switch(filter){
               case 'rise':
                  return items.filter(name => name.rise);
               case 'moreThen1000':
                 return items.filter(name => name.salary > 1000);
               default:
                 return items;
           }
    }
    onFilterSelect = (filter) => {
        this.setState({filter});
    }
    render(){
        const {data, term, filter} = this.state;
        const employers = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        const visibleData = this.filterSearchEmp(this.searchEmp(data, term),filter);
        return (
            <div className="app">
               <AppInfo employers={employers} increased={increased}/>
    
               <div className="search-panel">
                   <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                   <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
               </div>
    
               <EmployersList 
                        data={visibleData}
                        onDelete={this.deleteItem}
                        onToggleIncrease={this.onToggleIncrease}
                        onToggleRise={this.onToggleRise}
                        />
               <EmployersAddForm onAdd={this.onAddItem}/>
               <TestClass/>
            </div>
        )
    }
   
  
};

export default App;