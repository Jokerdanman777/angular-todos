#!/bin/bash

cd /var/www/angular-todos

if [ ! -d /var/www/angular-todos/node_modules ]; then
  npm cache clean -f  &&  npm install
fi;

npm start
