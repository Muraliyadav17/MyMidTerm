//functional component

import React from 'react';
import { Link } from 'react-router-dom';
import MenuItem from './MenuItem';
import '../Style/App.css';
import img1 from '../Images/img1.jpeg';
import img2 from '../Images/img2.jpeg';
import img3 from '../Images/img3.jpeg';
import img4 from '../Images/img4.jpeg';
const Menu = () => {
   // Menu items data with image URLs
  const menuItems = [
    { id: 1, name: 'Spaghetti Carbonara', description: 'Creamy pasta with bacon and parmesan cheese', price: 12.99, image: img1 },
    { id: 2, name: 'Chicken Caesar Salad', description: 'Fresh romaine lettuce with grilled chicken, croutons, and Caesar dressing', price: 10.99, image: img2 },
    { id: 3, name: 'Margherita Pizza', description: 'Classic pizza with tomato sauce, mozzarella cheese, and fresh basil', price: 14.99, image: img3 },
    { id: 4, name: 'Grilled Salmon', description: 'Fresh grilled salmon served with seasonal vegetables', price: 16.99, image: img4 },
  ];

  return (
    <div className="menu"> {/* Menu container */}
      <h2>Menu</h2> 
      <div className="menu-items"> {/* Container for menu items */}
        {menuItems.map(item => (
          // Rendering MenuItem component for each menu item
          <MenuItem key={item.id} item={item} /> 
        ))}
      </div>
      <Link to="/more-items" className="more-btn">More Items</Link> {/* Link to navigate to more items page */}
    </div>
  );
}

export default Menu;
