import profilowe from "../img/kanye.png";

function ProfilUzytkownika() {
  return (
    <div className="center">
      <img className="profil" src={profilowe} alt="zdjecieProfilowe" />
      <h3>Ola Jasper</h3>
      <div className="info">
        <h4>Email: IloveKaneWest@pdw.com</h4>
        <h4>Data Urodzenia: 8 czerwca 1977</h4>
        <h4>Kraj zamieszkania: America</h4>
      </div>

      <button className="inne-pcje">
        <h4>Edutyj</h4>
      </button>
    </div>
  );
}

export default ProfilUzytkownika;
