import React from 'react';
const ListItem = ( props ) => {

return (

  <div>
    <p>{props.item}</p>
    <button className="smallbtn" onClick={() => props.onClick(props.id)}>delete</button>  
  </div>

  );
};

export default ListItem;
