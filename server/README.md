# Backend 

## Installation

Cloner ou telechager ce dossier et effectuer les étapes suivantes : 
 
-1 
```
cd Face_Enhancement/models/networks/
git clone https://github.com/vacancy/Synchronized-BatchNorm-PyTorch
cp -rf Synchronized-BatchNorm-PyTorch/sync_batchnorm .
cd ../../../
```

-2
```
cd Global/detection_models
git clone https://github.com/vacancy/Synchronized-BatchNorm-PyTorch
cp -rf Synchronized-BatchNorm-PyTorch/sync_batchnorm .
cd ../../
```

-3
Download the landmark detection pretrained model

```
cd Face_Detection/
wget http://dlib.net/files/shape_predictor_68_face_landmarks.dat.bz2 
ou
copier coller http://dlib.net/files/shape_predictor_68_face_landmarks.dat.bz2 sur un navigateur et telecharger le zip
bzip2 -d shape_predictor_68_face_landmarks.dat.bz2 (effectuer via un terminal)
cd ../
```
-4
Telecharger le modèle pré-entrainé 
```
cd Face_Enhancement/
wget https://github.com/microsoft/Bringing-Old-Photos-Back-to-Life/releases/download/v1.0/face_checkpoints.zip*
ou copier coller le lien sur un navigateur et telecharger le zip
unzip face_checkpoints.zip (ou faire "extraire ici")

cd ../
cd Global/
wget https://github.com/microsoft/Bringing-Old-Photos-Back-to-Life/releases/download/v1.0/global_checkpoints.zip
unzip global_checkpoints.zip
cd ../
```

-6
Installez les dépendences

```bash
pip install -r requirements.txt
```

-7 
Lancez le backend en allant vers la racine du dossier principal et faite : 
```
cd ./server
pip install flask
pip install python-dotenv
flask run
```



