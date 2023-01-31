# Photo-Restoration-Project

# Commencer l'executer ? 

# Frontend

- 1er terminal 

```js
cd ./client  
npm install  
npm start
```

# Backend 

## Installation

- Cloner ou telechager ce dossier et effectuer les étapes suivantes : 
- Étape 0
```
cd ./server
```
- Étape 1 
```
cd Face_Enhancement/models/networks/
git clone https://github.com/vacancy/Synchronized-BatchNorm-PyTorch
cp -rf Synchronized-BatchNorm-PyTorch/sync_batchnorm .
cd ../../../
```

- Étape 2
```
cd Global/detection_models
git clone https://github.com/vacancy/Synchronized-BatchNorm-PyTorch
cp -rf Synchronized-BatchNorm-PyTorch/sync_batchnorm .
cd ../../
```

- Étape 3

```
cd Face_Detection/
wget http://dlib.net/files/shape_predictor_68_face_landmarks.dat.bz2 
ou
copier coller http://dlib.net/files/shape_predictor_68_face_landmarks.dat.bz2 sur un navigateur et telecharger le zip
bzip2 -d shape_predictor_68_face_landmarks.dat.bz2 (effectuer via un terminal)
cd ../
```
- Étape 4
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

- Étape 5
Installez les dépendences

```bash
pip install -r requirements.txt
```

- Étape 6
Lancez le backend en allant vers la racine du dossier principal et faite dans un deuxième terminal : 

```
cd ./server
pip install flask
pip install python-dotenv
flask run
```





