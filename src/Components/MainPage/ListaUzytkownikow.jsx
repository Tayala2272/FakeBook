import profil from "../img/profil.png";

const Osoba = (props) => {
  if (!props.name) return <h1>Nie masz znojomych, sadek</h1>;

  return (
    <div className="inne">
      <img className="zdjecia-profilowe" src={props.zdjecie} alt="zdjecie" />
      {props.name} {props.surname}
    </div>
  );
};

function ListaUzytkownikow() {
  return (
    <div className="lista">
      <h1>Znajomi</h1>
      <Osoba zdjecie={profil} name="Oskar" surname="Kowalski" />
      <Osoba zdjecie={profil} name="Agata" surname="zFiata" />
      <Osoba zdjecie={profil} name="Franek" surname="Kowalski" />
      <Osoba zdjecie={profil} name="Ola" surname="Kowalski" />
      <Osoba zdjecie={profil} name="Dimitri" surname="Kowalski" />
    </div>
  );
}

export default ListaUzytkownikow;
