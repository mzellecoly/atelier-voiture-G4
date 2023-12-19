// Voiture.js
import React, { useState }  from 'react';
import './App.css'
const Voiture = ({ voitures }) => {
  const [showAge, setShowAge] = useState(false); // État local pour gérer l'affichage de l'âge
  const getAge = (anneeFabrication) => {
    const currentYear = new Date().getFullYear();
    return currentYear - anneeFabrication;
  };
  const toggleAge = () => {
    setShowAge(!showAge); // Inverse l'état actuel d'affichage de l'âge
  };
  return (
    <table className='my-5'>
      <thead>
        <tr>
          <th>Image</th>
          <th>Marque</th>
          <th>Couleur</th>
          <th>Année</th>
          <th>Age</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {voitures.map((voiture, index) => (
          <tr key={index}>
            <div className='mt-2'>
              <img src={voiture.image} alt={`${voiture.marque} Image`} style={{ width: '100px', height: 'auto' }} /></div>
            <td>{voiture.marque}</td>
            <td>{voiture.couleur || 'Neant'}</td>
            <td>{voiture.annee}</td>
            <td>{showAge && getAge(voiture.annee)}</td>
            <td><button className='bouton' onClick={toggleAge}>Afficher age</button></td>
                
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Voiture;
