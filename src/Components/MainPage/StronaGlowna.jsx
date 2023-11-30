import Glowa from "./Glowa";
import ListaUzytkownikow from "./ListaUzytkownikow";
import Opcje from "./Opcje";
import PostCard from "../PostsCards/PostCard";
import PostCardManyPhoto from "../PostsCards/PostCardManyPhoto";
import "./App.css";



const slides = [
  "https://www.hogansirishcottages.com/blog/wp-content/uploads/sites/8/2022/03/Feature-Image-Highest-mountains-in-Ireland.jpg",
  "https://www.wildnatureimages.com/images/640/070620-014-The-Tetons.jpg",
  "https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?cs=srgb&dl=pexels-joyston-judah-933054.jpg&fm=jpg",
  "https://live-production.wcms.abc-cdn.net.au/9db63e8542f80b1c0846cf256252a8b6?impolicy=wcms_crop_resize&cropH=1080&cropW=1918&xPos=1&yPos=0&width=862&height=485",
];
function Posty(){
  return(
    <>
      <PostCardManyPhoto>
        {slides.map((s) => (
          <img src={s} alt="" />
        ))}
      </PostCardManyPhoto>

      <PostCard />

      <PostCardManyPhoto>
        {slides.map((s) => (
          <img src={s} alt="" />
        ))}
      </PostCardManyPhoto>

    </>
  );
}

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
