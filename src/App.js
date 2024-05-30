import React, { useState } from 'react';
import './App.css';

function App() {
  const [fruits, setFruits] = useState(['Apple', 'Banana', 'Orange']);
  const [newFruit, setNewFruit] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (event) => {
    setNewFruit(event.target.value);
    setError('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const normalizedNewFruit = newFruit.trim().toLowerCase();
    if (normalizedNewFruit) {
      const isDuplicate = fruits.some(
        (fruit) => fruit.toLowerCase() === normalizedNewFruit
      );
      if (isDuplicate) {
        setError('Fruit already exists');
      } else {
        setFruits([...fruits, newFruit]);
        setNewFruit('');
      }
    }
  };

  const handleDelete = (index) => {
    setFruits(fruits.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h1>Fruit List</h1>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>
            {fruit} <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newFruit}
          onChange={handleInputChange}
          placeholder="Add a new fruit"
        />
        <button type="submit">Add Fruit</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default App;
