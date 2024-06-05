import React from 'react';
import "../styles/Inschrijving.css"

function Inschrijving() {
    return (
        <div className="form-container">
            <h2 className="form-title">Inschrijving EXPO.24</h2>
            <form>

                <div className="name-forname">

                <div className="form-group">
                    <label htmlFor="name">Naam:</label>
                    <input type="text" id="name" name="name" />
                </div>
                <div className="form-group">
                    <label htmlFor="firstName">Voornaam:</label>
                    <input type="text" id="firstName" name="firstName" />
                </div>

                </div>

                <div className="email-numberofpeople">

                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" />
                </div>
                <div className="form-group">
                    <label htmlFor="numberOfPeople">Aantal Personen:</label>
                    <input type="number" id="numberOfPeople" name="numberOfPeople" />
                </div>

                </div>

                <div className="form-group">
                    <label htmlFor="occupation">Functie:</label>
                    <select id="occupation" name="occupation">
                        <option value="">Selecteer...</option>
                        <option value="student">Student</option>
                        <option value="docent">Docent</option>
                        <option value="bedrijf">Bedrijf</option>
                        <option value="ouder">Ouder</option>
                        <option value="alumni">Alumni</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Voorkeur Project:</label><br />
                    <label htmlFor="vrGame">
                        <input type="checkbox" id="vrGame" name="vrGame" value="VR game" />
                        VR-game
                    </label><br />
                    <label htmlFor="3dGame">
                        <input type="checkbox" id="3dGame" name="3dGame" value="3D game" />
                        3D-game
                    </label><br />
                    <label htmlFor="liveCoding">
                        <input type="checkbox" id="liveCoding" name="liveCoding" value="Live coding" />
                        Live coderen
                    </label><br />
                    <label htmlFor="demo3DPrints">
                        <input type="checkbox" id="demo3DPrints" name="demo3DPrints" value="Demo 3D prints" />
                        Demo 3D-prints
                    </label><br />
                    <label htmlFor="demoLasercut">
                        <input type="checkbox" id="demoLasercut" name="demoLasercut" value="Demo lasercut" />
                        Demo lasersnijden
                    </label><br />
                </div>
                <button type="submit">Verzenden</button>
            </form>
        </div>
    );
}

export default Inschrijving;

