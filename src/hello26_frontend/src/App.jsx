import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [ringSize, setRingSize] = useState('');
  const [material, setMaterial] = useState('Gold');
  const [luxPrice, setLuxPrice] = useState(null);

  const handleRingSizeChange = (e) => setRingSize(e.target.value);
  const handleMaterialChange = (e) => setMaterial(e.target.value);

  const calculatePrice = () => {
    const size = parseFloat(ringSize);
    if (isNaN(size) || size < 0) {
      alert('Please enter a valid ring size.');
      return;
    }

    let basePrice;
    switch (material) {
      case 'Gold':
        basePrice = 250;
        break;
      case 'Silver':
        basePrice = 180;
        break;
      case 'Platinum':
        basePrice = 350;
        break;
      default:
        return;
    }

    const price = basePrice + size * 10; // Hypothetical formula
    setLuxPrice(price.toFixed(2));
  };

  return (
    <div className="container">
      <h1>LuxRings - Smart Ring Price Calculator</h1>
      <p>Find the perfect fit and price for your LuxRing</p>
      <div className="input-group">
        <label htmlFor="ringSize">Ring Size (in mm):</label>
        <input
          type="number"
          id="ringSize"
          value={ringSize}
          onChange={handleRingSizeChange}
          placeholder="Enter ring size"
          className="input"
        />
      </div>
      <div className="input-group">
        <label htmlFor="material">Material:</label>
        <select
          id="material"
          value={material}
          onChange={handleMaterialChange}
          className="input"
        >
          <option value="Gold">Gold</option>
          <option value="Silver">Silver</option>
          <option value="Platinum">Platinum</option>
        </select>
      </div>
      <button onClick={calculatePrice} className="button">Calculate Price</button>
      {luxPrice && (
        <div className="result">
          <h2>Total Price: ${luxPrice}</h2>
        </div>
      )}
    </div>
  );
};

export default App;

