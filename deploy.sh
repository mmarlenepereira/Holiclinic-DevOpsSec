#!/usr/bin/env bash

# Configure git with credentials
# git config --global credential.helper store
g# it config --global user.email "x22115234@student.ncirl.ie"
# git config --global user.name "mmarlenepereira"

sudo apt update && sudo apt install nodejs npm

# Install pm2 which is a production process manager for Node.js with a built-in load balancer.
sudo npm install -g pm2

# stop any instance of our application running currently
pm2 stop Holiclinic-DevOpsSec

# change directory into folder where application is downloaded
cd Holiclinic-DevOpsSec

# Install application dependancies
npm install

echo $PRIVATE_KEY > privatekey.pem
echo $SERVER > server.crt

# Start the application with the process name Holiclinic-DevOpsSec using pm2
pm2 start ./bin/www --name Holiclinic-DevOpsSec

#end
