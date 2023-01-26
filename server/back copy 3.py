import os
from flask import Flask, flash, request, redirect, url_for
from werkzeug.utils import secure_filename

from flask_cors import CORS, cross_origin


UPLOAD_FOLDER = '../uploads'
ALLOWED_EXTENSIONS = set(['pdf','png', 'jpg', 'jpeg', 'gif'])



app = Flask(__name__)

# Quick test configuration. Please use proper Flask configuration options
    # in production settings, and use a separate file or environment variables
    # to manage the secret key!
app.secret_key = 'super secret key'
app.config['SESSION_TYPE'] = 'filesystem'

# sess.init_app(app)

app.debug = True

# app.config['CORS_HEADERS'] = 'Content-Type'

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER


def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


@app.route('/upload', methods=['POST'])
@cross_origin()
def fileUpload():
    print("hello")
    # check if the post request has the file part
    if 'file' not in request.files:
        print("no file")
        flash('No file part')
        return redirect(request.url)
    file = request.files['file']
    # If the user does not select a file, the browser submits an
    # empty file without a filename.
    if file.filename == '':
        flash('No selected file')
        return redirect(request.url)
    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        return redirect(url_for('download_file', name=filename))
    
    ye = "yeet"
    
    return ye
