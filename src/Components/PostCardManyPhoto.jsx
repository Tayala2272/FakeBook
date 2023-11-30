import React, { useState } from "react";
import "./PostCard.css";
import profil_icon from "../Assets/userFoto.jpg";
import { BiLike } from "react-icons/bi";
import { BiCommentDots } from "react-icons/bi";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

export default function PostCardManyPhoto({ children: slides }) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.lenght - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.lenght - 1 ? 0 : curr + 1));

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
        <div className="carusel">
          <div
            className="post-fotos"
            style={{ transform: `translateX(-${curr * 100}%)` }}
          >
            {slides}
          </div>

          <div className="strzalki">
            <button onClick={prev}>
              <FaChevronLeft />
            </button>
            <button onClick={next}>
              <FaChevronRight />
            </button>
          </div>
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
}
