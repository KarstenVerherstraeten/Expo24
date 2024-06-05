import React from 'react';
import "../styles/Inschrijving.css"

function Inschrijving() {
    return (
      <div className="form-container">
        <h2 className="form-title">Inschrijving</h2>
        <form>
          <div className="form-group">
            <label htmlFor="naam">Naam:</label>
            <input type="text" id="naam" name="naam" />
          </div>
          <div className="form-group">
            <label htmlFor="voornaam">Voornaam:</label>
            <input type="text" id="voornaam" name="voornaam" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="aantalPersonen">Aantal Personen:</label>
            <input type="number" id="aantalPersonen" name="aantalPersonen" />
          </div>
          <div className="form-group">
            <label htmlFor="functie">Functie:</label>
            <select id="functie" name="functie">
              <option value="">Selecteer...</option>
              <option value="student">Student</option>
              <option value="docent">Docent</option>
              <option value="bedrijf">Bedrijf</option>
              <option value="ouder">Ouder</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="voorkeurProject">Voorkeur Project:</label>
            <select id="voorkeurProject" name="voorkeurProject">
              <option value="">Selecteer...</option>
              <option value="VR game">VR game</option>
              <option value="3D game">3D game</option>
              <option value="Live coding">Live coding</option>
              <option value="Demo 3D prints">Demo 3D prints</option>
              <option value="Demo lasercut">Demo lasercut</option>
            </select>
          </div>
          <button type="submit">Verzenden</button>
        </form>
      </div>
    );
}

export default Inschrijving;
