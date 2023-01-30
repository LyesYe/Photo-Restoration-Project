import React, { useState, useEffect } from "react";

function Ye()  {
    const [imageUrl, setImageUrl] = useState("");
  
    // useEffect(() => {
    //   fetch("http://localhost:5000/image")
    //     .then(response => response.blob())
    //     .then(blob => URL.createObjectURL(blob))
    //     .then(url => setImageUrl(url));
    // }, []);
  
    return (
      <div>
        <img src='C:\Random\Code\Github\Photo-Restoration-Project\server\output\final_output\panda.jpg' alt="Image" />
      </div>
    );
  };

export default Ye
