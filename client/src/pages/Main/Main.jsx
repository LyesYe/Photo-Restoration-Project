import React from 'react'
import axios from 'axios';

function Main() {

  const [img_obj, setImg_obj] = React.useState(null);


const handleUploadImage = async(ev) => {
    ev.preventDefault();

    const data = new FormData();
    // data.append('filename', img_obj['filename']);
    data.append('file', img_obj.file);

    try {

      console.log(img_obj)


      for (var pair of data.entries()) {
        console.log(pair[0]+ ', ' + pair[1]); 
    }
  
      const response = await axios({
        method: "POST",
        url:"http://127.0.0.1:5000/upload",
        headers: { "content-type": "multipart/form-data" },
        data: {
          data: data,
        },
        
      })



    }
    catch (err) {
      console.log(err);
    }


    
  }



  return (
    <div>
      <form onSubmit={(e) => handleUploadImage(e)}>
        <div>
          <input type="file" name='file'  
          onChange={(e) => { setImg_obj({ file: e.target }); console.log(e.target.files)
          }} />
        </div>

        <br />
        <div>
          <button>Upload</button>
        </div>
        <img  alt="img" />
      </form>
    </div>
  )
}

export default Main







