//functional component

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Style/App.css';
import img5 from '../Images/img5.jpeg';
import img6 from '../Images/img6.jpeg';
import img7 from '../Images/img7.jpeg';
import img8 from '../Images/img8.jpeg';

// Define state for moreItems using useState hook
const MoreItems = () => {
  const [moreItems] = useState([
    { id: 5, name: 'Vegetable Stir-Fry', description: 'Assorted vegetables stir-fried with tofu in a savory sauce', price: 11.99, image: img5 },
    { id: 6, name: 'BBQ Ribs', description: 'Tender pork ribs slow-cooked and basted with BBQ sauce', price: 18.99, image: img6 },
    { id: 7, name: 'Shrimp Scampi', description: 'Jumbo shrimp sautéed in garlic butter and white wine sauce', price: 15.99, image: img7 },
    { id: 8, name: 'Tiramisu', description: 'Classic Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cheese', price: 8.99, image: img8 },
  ]);

  return (
    <div className="more-items">
      <h2>More Items</h2>
      <div className="more-items-container">
        {moreItems.map(item => (
          <div key={item.id} className="more-item">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>Price: ${item.price}</p>
          </div>
        ))}
        <Link to="/menu" className="back-btn">Back to Menu</Link>{/* Link to go back to the menu */}
      </div>
    </div>
  );
}

export default MoreItems;
