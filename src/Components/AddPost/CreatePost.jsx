import "bootstrap/dist/css/bootstrap.css";

import React, { useState } from "react";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [images, setImages] = useState([]);

  const zmienTytul = (x) => {
    setTitle(x.target.value);
  };

  const zmienTresc = (x) => {
    setContent(x.target.value);
  };

  const zmienZdjecie = (x) => {
    const selectedImages = Array.from(x.target.files);
    setImages(selectedImages);
  };

  const wykonaj = (x) => {
    x.preventDefault();

    console.log("Tytuł:", title);
    console.log("Treść:", content);
    console.log("Zdjęcia:", images);
  };

  return (
    <div className="container">
      <div className="row my-5 py-5">
        <div className="col-3"></div>
        <div className="col-6 text-center bg-info rounded">
          <h1>Stwórz Post</h1>
          <form onSubmit={wykonaj}>
            <div className="input-group my-4">
              <span className="input-group-text" id="inputGroup-sizing-default">
                Tytuł:
              </span>
              <input
                type="text"
                value={title}
                onChange={zmienTytul}
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
              />
            </div>
            <div className="input-group my-4">
              <span
                className="input-group-text py-3"
                id="inputGroup-sizing-default"
              >
                Teść:
              </span>
              <textarea
                value={content}
                onChange={zmienTresc}
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
              />
            </div>
            <div className="mx-5">
              <label for="formFile" className="form-label">
                Dodaj zdjecie:
              </label>
              <input
                type="file"
                multiple
                onChange={zmienZdjecie}
                className="form-control"
                id="formFile"
              />
            </div>
            <button type="submit" className="btn btn-primary my-3">
              Dodaj post
            </button>
          </form>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
};

export default CreatePost;
