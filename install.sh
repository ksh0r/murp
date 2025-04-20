#!/bin/bash

MONGO_URI="$1"

if [ -z "$MONGO_URI"]; then
    echo "Error: MongoDB URI is not provided."
    echo "Usage ./install.sh <mongodb uri>"
    exit 1
fi


if ! command -v node &> /dev/null; then
    echo "Node.js is not installed. Install it first."
    exit 1
fi

if ! command -v npm &> /dev/null; then
    echo "npm is not installed. Install it first."
    exit 1
fi

echo "Installing Dependencies.. Backend"

cd server
npm install

if ! command -v nodemon &> /dev/null; then
    echo "Installing nodemon... "
    npm install -g nodemon
fi

if [ ! -f .env]; then
    echo "Creating .env file... "
    echo "PORT=5000" > .env
    echo "MONGO_URI=$MONGO_URI" > .env
fi

echo "Installing Dependencies.. Frontend"
cd ../client
npm install


echo "Setup Complete!!!"

echo "You can run the program manually by running the following commands:"
echo "- Backend: cd server && npx nodemon run"
echo "- Frontend: cd client && npm run dev"
echo "Default Frontend Port = 5173"
echo "Defulat Backend Port = 5000"
