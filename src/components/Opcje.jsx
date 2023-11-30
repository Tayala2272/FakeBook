import "./App.css";
import profilowe from "./zdj/kanye.png";
import ustawienia from "./zdj/setting.ico";
import profil from "./zdj/profil.png";
import wyloguj from "./zdj/Door.ico";
import dodaj from "./zdj/add.ico";
import { useState } from "react";

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
        <img className="ikony" src={profil} alt="zdjecie_profilu" />
        Profil
      </div>
      <div className="inne">
        <img className="ikony" src={ustawienia} alt="ustawienia" />
        Ustawienia
      </div>
      <div className="inne">
        <img className="ikony" src={wyloguj} alt="wyloguj" />
        Wyloguj
      </div>
    </div>
  );
}

export default Opcje;
