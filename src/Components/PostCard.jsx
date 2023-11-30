import React from "react";
import "./PostCard.css";
import profil_icon from "../Assets/userFoto.jpg";
import foto from "../Assets/mountain.jpg";
import { BiLike } from "react-icons/bi";
import { BiCommentDots } from "react-icons/bi";

const PostCard = () => {
  return (
    <div className="upc">
      <div className="heading">
        <div className="profile-info">
          <img src={profil_icon} alt="userfoto" />
          <div className="name-data-info">
            {" "}
            <strong className="user-name">Chloe Mircle</strong>
            <p className="date">Data</p>
          </div>
        </div>

        <div className="post-destriction">
          <strong>Title</strong>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="post-fotos">
          <img src={foto} alt="foto" />
        </div>
        <div className="pasek">
          <div className="down-icon">
            <button>
              <BiLike />
            </button>
            <button>
              <BiCommentDots />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PostCard;
