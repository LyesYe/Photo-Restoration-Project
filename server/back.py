import os
from flask import Flask, flash, request, redirect, url_for , send_file , jsonify
from werkzeug.utils import secure_filename

from flask_cors import CORS, cross_origin



import numpy as np
import cv2
import PySimpleGUI as sg
import os.path
import argparse
import os
import sys
import shutil
from subprocess import call


UPLOAD_FOLDER = './test_images/old_w_scratch'
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
    
    print(request.files)
    
    # check if the post request has the file part
    if 'file' not in request.files:
        print("no file")
        flash('No file part')
        return "redirect(request.url)"
    file = request.files['file']
    
    # If the user does not select a file, the browser submits an
    # empty file without a filename.
    if file.filename == '':
        print("no selected file")
        flash('No selected file')
        return redirect(request.url)
    
    if file and allowed_file(file.filename):
        print("\n YYYYYYYYYYYYYYYYYYYEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEYYYY \n")
        print(file.filename)
        filename = secure_filename(file.filename)
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        # print(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        new_filename = app.config['UPLOAD_FOLDER']
        print(new_filename)
        # modify(new_filename)
        # image = open(f"output/final_output/{file.filename}"  , "rb")
        
        # img_bytes = io.BytesIO()
        # image.save(img_bytes, format='JPEG')
        # img_str = base64.b64encode(img_bytes.getvalue())
        # return send_file(image, mimetype="image/jpeg")
        # return send_file(f"output/final_output/{file.filename}")
        return  send_file(f"output/final_output/{file.filename}")
        
    
@app.route("/image")
def image():
    return send_file("output/final_output/panda.jpg", mimetype="image/jpg")
    
    
    
    ye = "yeet"
    
    return ye
