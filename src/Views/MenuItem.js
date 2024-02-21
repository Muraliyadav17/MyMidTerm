//Class component

import React, { Component } from 'react';
import '../Style/App.css';

class MenuItem extends Component {
  render() {
     // Destructure props to extract item object
    const { name, description, price, image } = this.props.item;
    // Render the component's UI
    return (
      <div className="menu-item">
        <div className="image-container">
          <img src={image} alt={name} />
        </div>
        <div className="info">
          <h3>{name}</h3>
          <p>{description}</p>
          <p>Price: ${price}</p>
        </div>
      </div>
    );
  }
}

export default MenuItem;
