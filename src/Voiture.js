// Voiture.js
import React from 'react';
import './App.css'
const Voiture = ({ voitures }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Image</th>
          <th>Marque</th>
          <th>Couleur</th>
          <th>Année</th>
        </tr>
      </thead>
      <tbody>
        {voitures.map((voiture, index) => (
          <tr key={index}>
            <div>
              <img src={voiture.image} alt={`${voiture.marque} Image`} style={{ width: '100px', height: 'auto' }} /></div>
            {/* <td>{voiture.image}</td> */}
            <td>{voiture.marque}</td>
            <td>{voiture.couleur || 'Neant'}</td>
            <td>{voiture.annee}</td>
                
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Voiture;
