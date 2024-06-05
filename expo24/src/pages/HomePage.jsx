import React, { useEffect } from 'react';
import Timer from "../components/Timer";
import { useNavigate } from "react-router-dom";

function HomePage() {

	// code helped by ChatGPT
  const navigate = useNavigate();

  useEffect(() => {
    const signInButton = document.getElementById("SignIn");
    if (signInButton) {
      const handleSignInClick = () => {
        navigate("/Inschrijving");
      };

      signInButton.addEventListener("click", handleSignInClick);

      return () => {
        signInButton.removeEventListener("click", handleSignInClick);
      };
    }
  }, [navigate]);

  return (
    <div className="container">
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
      <div className="content">

			<p>21 | 06 | 24</p>

        <Timer />

		<div className='basicInfo'>
		<p>Located at Erasmushogeschool Brussel campus kaai</p>
		<p>Qua l'industrie 170, 1070 Anderlecht</p>
		</div>
		
        <button id="SignIn">Sign in</button>
        <div className="information">
          <div className="leftSide">
            <div className="What">
              <p>What is Expo.24?</p>
              <ul>
                <li>During Expo24 the third-year students of Erasmushogeschool present their final exam</li>
              </ul>
            </div>
            <div className="General">
              <p>General Information</p>
              <ul>
                <li>Where: Erasmushogeschool Brussel campus kaai</li>
                <li>When: 21 June 2024</li>
                <li>Price: Free</li>
              </ul>
            </div>
          </div>
          <div className="right side">
            <div className="Why">
              <p>Why come?</p>
              <ul>
                <li>Interactive activities</li>
                <li>Learn about the MCT programme</li>
                <li>Find potential employees</li>
                <li>Free drinks</li>
                <li>Barbeque</li>
                <li>Family and friends</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
