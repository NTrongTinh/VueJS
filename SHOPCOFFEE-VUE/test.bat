@echo off
cd src
start cmd /k json-server --watch db.json
cd ..
start cmd /k vue serve