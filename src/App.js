  import React, { Component } from 'react';
  import './App.css';
  import List from './List';

  class App extends Component {

    state = {
      count: 2,
      newItem: '',
      items: [
      { name: 'apple', key: 1 },
      { name: 'milk', key: 2 }
      ] 
    }

    addItem = () => {
      if (this.state.newItem) {

        let itemToAdd = {}
        itemToAdd.name = this.state.newItem
        itemToAdd.key = Math.random()

     this.setState({ count: this.state.count + 1, items: [...this.state.items, itemToAdd], newItem: '' })
     } 
    }

    deleteItem = (key) => {
      let items = [...this.state.items]
      let newItemsArray = []
      items.forEach((item) => {
        if (item.key !== key) { 
          newItemsArray.push(item)}
        })
     this.setState ({ items: newItemsArray, count: this.state.count - 1 })
    }

    render() {

    return(
    <div className="App">
       
       <header className="App-header">
        <h1>30 days of React</h1>
        <h2>Day Thirty / Testing React Apps</h2>
        <p>Total Items: {this.state.count}</p>
       </header>
       
       <div className="container">
        <input type='text' value={this.state.newItem} onChange={e => this.setState({ newItem: e.target.value})}></input>
        <button className='main-btn' onClick={this.addItem}>Add To List</button>
       </div>
      
      <div>
        <List items={this.state.items} deleteItem={this.deleteItem} />
      </div>

      </div>

      ) 
     }
   }

  export default App;
