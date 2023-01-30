import React from "react";
import ReactDOM from "react-dom";
import ImageUploading from "react-images-uploading";
import axios from "axios";


import "./App.scss";

function App() {
  const outputUrl = "../../output/final_output/";

  const [outImage, setoutImage] = React.useState('');

  const [images, setImages] = React.useState([]);
  const [done, setDone] = React.useState(false);
  const maxNumber = 69;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  const handleUploadImage = async (ev) => {
    ev.preventDefault();

    console.log("object");
    console.log(images[0].file);

    const filou = new FormData();
    filou.append("file", images[0].file);



    const response = await axios({
      responseType: 'blob',
      method: "POST",
      url: "http://127.0.0.1:5000/upload",
      headers: { "content-type": "multipart/form-data" },
      data: filou,
    }).then((response) => {
      const data = response.data;

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


    console.log(done)

  };

  

  return (
    <div className="App">
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
            <button
              style={isDragging ? { color: "red" } : null}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </button>
            &nbsp;
            <button onClick={onImageRemoveAll}>Remove all images</button>
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image.data_url} alt="" width="400" />
                {/* <div className="image-item__btn-wrapper">
                <button onClick={() => onImageUpdate(index)}>Update</button>
                <button onClick={() => onImageRemove(index)}>Remove</button>
              </div> */}
                <div> {done} </div>
                <div> {outImage} </div>
                {done == true && (
                  <img
                    src={outImage}
                    alt=""
                    width="400"
                  />
                )}
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
      <br />
      <div>
        <button onClick={(e) => handleUploadImage(e)}>Upload</button>
      </div>
    </div>
  );
}

export default App;
