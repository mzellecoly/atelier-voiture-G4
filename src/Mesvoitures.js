 // MesVoitures.js
import React, { Component } from 'react';
import Voiture from './Voiture';
import './App.css'

class MesVoitures extends Component {
  constructor(props) {
    super(props);
    this.state = {
      voitures: [
          { image:'https://i.gaw.to/vehicles/photos/40/22/402202-2020-toyota-c-hr.jpg?640x400', marque: 'Toyota', couleur: 'Rouge', annee: 2020 },
          { image:'https://www.automobile-sportive.com/images/news/honda-civic-fk-sport-line-2020.jpg', marque: 'Honda', couleur: '', annee: 2018 },
          { image:'https://images.caradisiac.com/logos-ref/modele/modele--ford-fiesta-5/S7-modele--ford-fiesta-5.jpg', marque: 'Ford', couleur: 'Vert', annee: 2015 },
          { image:'https://www.autology.fr/wp-content/uploads/2018/10/0ECECD56-2939-42D1-B5DE-B90AF98FF5BA.jpeg', marque: 'BMW', couleur: 'Rouge', annee: 2002 },
          { image:'https://cloud.leparking.fr/2023/09/08/11/21/land-rover-range-rover-evoque-coupe-2012-land-rover-range-rover-evoque-2-2td-pure-190bhp-4x4-coupe-3d-auto-bleu_8893945166.jpg', marque: 'Range', couleur: 'Bleu', annee: 2012 },
          { image:'https://www.premium-autostore.fr/images/vehicules/CARDIFF_PREMIUMAUTOSTORE_t3xar16_1.jpg', marque: 'Mercedes', couleur: 'noir', annee: 2019 },
          { image:'https://www.estrieplus.com/contenu/2016/3/28/large_38874.jpg', marque: 'Audi R8', couleur: 'rouge', annee: 2017 },
    ],
    };
  }
  getAge = (anneeFabrication) => {
    const currentYear = new Date().getFullYear();
    return currentYear - anneeFabrication;
  };


  render() {
    return (
      <div>
        <h2>Liste des Voitures 🚗🚦</h2>
        <Voiture voitures={this.state.voitures} />
      </div>
    );
  }
}

export default MesVoitures;
