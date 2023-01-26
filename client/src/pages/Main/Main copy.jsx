import React from "react";
import ReactDOM from "react-dom";
import ImageUploading from "react-images-uploading";
import axios from "axios";

// import "./styles.css";

function Main() {
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  const handleUploadImage = async (ev) => {
    ev.preventDefault();

    const data = new FormData();
    // data.append('filename', img_obj['filename']);
    data.append("file", images[0].file);

    try {
      console.log(images);

      for (var pair of data.entries()) {
        console.log(pair[0] + ", " + pair[1]);
      }

      const response = await axios({
        method: "POST",
        url: "http://127.0.0.1:5000/upload",
        headers: { "content-type": "multipart/form-data" },
        data: {
          data: data,
        },
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
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
                <img src={image.data_url} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  <button onClick={() => onImageUpdate(index)}>Update</button>
                  <button onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
            ))}
            {/* <form onSubmit={(e) => handleUploadImage(e)}>
              <div>
                <input
                  type="file"
                  onChange={(e) => {
                    setImg_obj({ file: e.target.files[0] });
                    console.log(e.target.files);
                  }}
                />
              </div>

              <br />
              <img alt="img" />
            </form> */}
            <div>
              <button onClick={(e) => handleUploadImage(e)} >Upload</button>
            </div>
          </div>
        )}
      </ImageUploading>
    </div>
  );
}

export default Main;
