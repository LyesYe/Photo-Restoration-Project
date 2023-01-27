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

    //   fetch('http://127.0.0.1:5000/upload', {
    //   method: 'POST',
    //   body: data,
    // }).then((response) => {
    //   response.json().then((body) => {
    //     this.setState({ imageURL: `http://127.0.0.1:5000/upload${body.file}` });
    //   });
    // });


    }
    catch (err) {
      console.log(err);
    }


   

    // const url = "http://127.0.0.1:5000/upload"

    // axios.post(url, data, config)
    // .then(response => {
    //     console.log(response);
    // })
    // .catch(error => {
    //     console.log(error);
    // });

    // fetch('http://127.0.0.1:5000/upload', {
    //   method: 'POST',
    //   body: data,
    // }).then((response) => {
    //   response.json().then((body) => {
    //     this.setState({ imageURL: `http://127.0.0.1:5000/${body.file}` });
    //   });
    // });

    
  }



  return (
    <div>
      <form  onSubmit={(e) => handleUploadImage(e)}>
        <div>
          <input type="file" name='file' 
          onChange={(e) => { setImg_obj({ file: e.target.files[0] }); console.log(e.target.files)
          }} />
        </div>

        <br />
        <div>
          <button type="submit">Upload</button>
        </div>
        <img  alt="img" />
      </form>
    </div>
  )
}

export default Main







