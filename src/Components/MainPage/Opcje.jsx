import "../../App.css";
import profilowe from "../img/kanye.png";
import ustawienia from "../img/setting.ico";
import profil from "../img/profil.png";
import wyloguj from "../img/Door.ico";
import dodaj from "../img/add.ico";
import { useState } from "react";
import { Link } from 'react-router-dom';

function Opcje() {
  const guzior = () => {
    console.log("inna strona");
  };

  return (
    <div className="opcje">
      <div className="odstep" onClick={guzior}>
        <img className="zdjecia-profilowe" src={profilowe} alt="profilowe1" />
        <strong>Ola Jasper</strong>
      </div>
      <div className="inne">
        <img className="ikony" src={dodaj} alt="zdjecie_profilu" />
        Dodaj Post
      </div>
      <div className="inne">
        <Link to="/profil">
          <img className="ikony" src={profil} alt="zdjecie_profilu" />
          Profil
        </Link>
      </div>
      <div className="inne">
        <Link to="/ustawienia">
          <img className="ikony" src={ustawienia} alt="ustawienia" />
          Ustawienia
        </Link>
      </div>
      <div className="inne">
        <Link to="/logowanie">
          <img className="ikony" src={ustawienia} alt="ustawienia" />
          Logowanie
        </Link>
      </div>
      <div className="inne">
        <img className="ikony" src={wyloguj} alt="wyloguj" />
        Wyloguj
      </div>
    </div>
  );
}

export default Opcje;
