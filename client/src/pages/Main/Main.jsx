import React from 'react'
import axios from 'axios';

function Main() {

  const [img_obj, setImg_obj] = React.useState(null);


const handleUploadImage = async(ev) => {
    ev.preventDefault();

    const filou = new FormData();
    filou.append('file', img_obj);

    try {

      console.log(img_obj)

      const response = await axios({
        method: "POST",
        url:"http://127.0.0.1:5000/upload",
        headers: { "content-type": "multipart/form-data" },
        data: filou,
        
        
      })
    }
    catch (err) {
      console.log(err);
    }
    
  }



  return (
    <div>
      <form onSubmit={(e) => handleUploadImage(e)} >
        <div>
          <input type="file" name='file'  
          onChange={(e) => { setImg_obj(e.target.files[0] ); console.log(e.target.files[0])
          }} />
        </div>

        <br />
        <div>
          <button type="submit" >Upload</button>
        </div>
        {/* <img  alt="img" /> */}
      </form>
    </div>
  )
}

export default Main







