import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import style from '../styles/Cookie.module.css';

const CookieConsent = () => {
 
  const giveCookieConsent = () => {
    document.querySelector('#Cookie').style.display = 'none';
  };

  return (
    <div className={style.giveCookieConsent} id='Cookie'>
      <p>
        We use cookies to enhance your user experience. By using our website,
        you agree to our use of cookies.{" "}
        <a href={"/privacy-policy"}>Learn more.</a>
      </p>
      <button onClick={giveCookieConsent}>
        Accept
      </button>
    </div>
  );
};

export default CookieConsent;
