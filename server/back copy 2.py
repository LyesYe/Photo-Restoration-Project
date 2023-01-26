import os
from flask import Flask, flash, request, redirect, url_for, session
from werkzeug.utils import secure_filename
# from flask.ext.cors import CORS
from flask_cors import CORS, cross_origin
import logging

import sys  




# print(sys.path)

# logging.basicConfig(level=logging.INFO)

# logger = logging.getLogger('HELLO WORLD')




UPLOAD_FOLDER = '../uploads'
ALLOWED_EXTENSIONS = set(['png', 'jpg', 'jpeg', 'gif'])

app = Flask(__name__)

# cors = CORS(app, resources={r"/*": {"origins": "*"}})


CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@app.route('/upload', methods=['POST'])
@cross_origin(supports_credentials=True)
def fileUpload():
    target=os.path.join(UPLOAD_FOLDER,'test_docs')
    if not os.path.isdir(target):
        os.mkdir(target)
    # logger.info("welcome to upload`")
    file = request.files['file'] 
    filename = secure_filename(file.filename)
    destination="/".join([target, filename])
    file.save(destination)
    session['uploadFilePath']=destination
    response="Whatever you wish too return"
    ye = "yeet"
    print("hello")
    
    return ye

# if __name__ == "__main__":
#     app.secret_key = os.urandom(24)
#     app.run(debug=True,host="0.0.0.0",use_reloader=False)

CORS(app, expose_headers='Authorization')
