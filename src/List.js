import React, { Component } from 'react';
import ListItem from './ListItem';

class List extends Component {


render () {

let items = (
       <div>
        {this.props.items.map((item) => {
          return <ListItem
          item={item.name}
          id={item.key}
          key={item.key}
          onClick={this.props.deleteItem}/>
        })} 
      </div> 
    );

 return (

    <div>
      <ul className="list">
       {items}
      </ul>
    </div>
 
  )};
};


export default List;
