import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/Confirmation.css";

function Confirmation() {
  const location = useLocation();
  const navigate = useNavigate();
  const { formData } = location.state || {};

  return (
    <div>
      <div className="glass-panel">
        <div className="glass"></div>
        <div className="glass"></div>
        <div className="glass"></div>
        <div className="glass"></div>
        <div className="glass"></div>
        <div className="glass"></div>
        <div className="glass"></div>
        <div className="glass"></div>
        <div className="glass"></div>
        <div className="glass"></div>
      </div>
      <div className="ConfigContent">
        <h2 className="ConfigTitle">
          Bedankt voor uw <br /> inschrijving!{" "}
        </h2>
        <div className="ConfigInfo">
          <div>
            <p>Activiteit</p>
            <ul>
              <li>Expo 24</li>
              <li>Erasmushogeschool Brussel</li>
              <li>Campus Kaai</li>
              <li>
                Nijverheidskaai 170, <br />
                1070 Brussel
              </li>
            </ul>
          </div>
          <div>
            <p>Persoongegevens</p>
            <ul>
              <li>{formData?.lastName} {formData?.firstName}</li>
              <li>{formData?.email}</li>
              <li>{formData?.numberOfPeople}</li>
              <li>
                Voorkeursprojecten
                <ul>
                  {formData?.preferences?.vrGame && <li>VR-game</li>}
                  {formData?.preferences?.threeDGame && <li>3D-game</li>}
                  {formData?.preferences?.liveCoding && <li>Live coderen</li>}
                  {formData?.preferences?.demo3DPrints && <li>Demo 3D-prints</li>}
                  {formData?.preferences?.demoLasercut && <li>Demo lasersnijden</li>}
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="ConfigBottom">
          <p>
            U werd succesvol ingeschreven voor EXPO24. <br />U zou binnenkort een email moeten krijgen met alle praktische info.
          </p>
        </div>
        <div className="ConfigButton">
          <button onClick={() => navigate("/")}>Ga terug naar homepage</button>
        </div>
      </div>
    </div>
  );
}

export default Confirmation;
