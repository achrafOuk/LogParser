# Description
LogParser is a full stack web app created with Django rest api and React.js, the goal of this app is to parse the log files
and show them in a nice UI
# download the application
git clone https://github.com/achrafOuk/LogParser
# Backend
## requirements
Python >= 3.7
## install Backend dependenices
```
cd LogParser/django-restapi
pip install -r requirements.txt
```
## create database
You can change the db settings in restapi/settings.py
### To create the database automaticlly do:
```
cd LogParser/django-restapi
python manage.py makemigrations
python manage.py migrate
```
## running the server
```
cd LogParser/django-restapi
python manage.py runserver
```
# Front end
## running the server
```
cd LogParser/frontend
```
### Use npm
```
npm install
npm start
```
### Use yarn
```
yarn install
yarn start
```
