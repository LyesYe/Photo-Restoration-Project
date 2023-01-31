import React, { useState } from "react";
import ReactDOM from "react-dom";
import ImageUploading from "react-images-uploading";
import axios from "axios";

import "./App.scss";
import { useEffect } from "react";

function App() {

  const [loading, setLoading] = useState(false);

  const outputUrl = "../../output/final_output/";

  const [outImage, setoutImage] = React.useState("");

  const [images, setImages] = React.useState([]);
  const [done, setDone] = React.useState(false);
  const [work, setWork] = React.useState(false);


  


  const maxNumber = 69;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  const handleUploadImage = async (ev) => {
    ev.preventDefault();

    setWork(true);

    console.log("object");
    console.log(images[0].file);

    const filou = new FormData();
    filou.append("file", images[0].file);
    setLoading(true);
    const response = await axios({
      responseType: "blob",
      method: "POST",
      url: "http://127.0.0.1:5000/upload",
      headers: { "content-type": "multipart/form-data" },
      data: filou,
    }).then((response) => {
      const data = response.data;
      setLoading(false);
      console.log("-----------------------------------------------------");
      console.log("I received");
      console.log(data);

      setoutImage(URL.createObjectURL(data));

      // const img_bytes = new Uint8Array(Buffer.from(response.img, 'hex'));
      // const blob = new Blob([img_bytes], { type: 'image/jpeg' });
      // setoutImage(URL.createObjectURL(blob));

      // setoutImage(response.data)
      setDone(true);
    });

    console.log(done);
  };

  return (
    <div className="App">

      {loading && <div className="loader-container">
      	  <div className="spinner"></div>
        </div>}


      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
        acceptType={["jpg"]}
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <h1 className="title">
              {" "}
              <span className="spanury"> Old Photo Restoration </span> via Deep
              Latent Space Translation
            </h1>

            { work && images[0] && done == false &&  <h2 className="title2">
              
              <span className="spanury"> Your image </span> is being treated ...
            </h2>}

            { done == true &&  <h2 className="title2">
              
              Your image is  <span className="spanury"> Ready !! </span>
            </h2>}

            <button
              className={
                images[0]
                  ? "upload__image-button--disabled"
                  : "upload__image-button"
              }
              style={
                isDragging ? { backgroundColor: "black", color: "red" } : null
              }
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here to upload your image
            </button>
            {/* &nbsp; */}
            {/* <button onClick={onImageRemoveAll}>Remove all images</button> */}
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image.data_url} alt="" width="400" />
                {/* <div className="image-item__btn-wrapper">
                <button onClick={() => onImageUpdate(index)}>Update</button>
                <button onClick={() => onImageRemove(index)}>Remove</button>
              </div> */}
                {/* <div> {done} </div>
                <div> {outImage} </div> */}

                {/* {done == true && (
                  <img src="../public/arrow.png" alt="" width="400" />
                )} */}
                {done == true && <img src={outImage} alt="" width="400" />}
              </div>
            ))}

            {done == false && images[0] && <div className="upload-Button" onClick={(e) => handleUploadImage(e)}>
              Start Restoration
            </div>}

          </div>
        )}
      </ImageUploading>

    </div>
  );
}

export default App;
