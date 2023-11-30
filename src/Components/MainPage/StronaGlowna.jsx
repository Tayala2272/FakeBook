import Glowa from "./Glowa";
import ListaUzytkownikow from "./ListaUzytkownikow";
import Posty from "./Posty";
import Opcje from "./Opcje";
import ProfilUzytkownika from "./ProfilUzytkownika";
import "./App.css";

function StronaGlowna() {
  return (
    <div>
      <Glowa />
      <div>
        <div className="boczne">
          <Opcje />
        </div>
        <div className="srodek">
          <Posty />
        </div>
        <div className="boczne">
          <ListaUzytkownikow />
        </div>
      </div>
    </div>
  );
}

export default StronaGlowna;
