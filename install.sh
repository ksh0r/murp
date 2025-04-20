#!/bin/bash

MONGO_URI="$1"
RED='\x1b[1;31m'
GREEN='\x1b[1;32m'
YELLOW='\x1b[1;33m'
NC='\x1b[0m'

if [ -z "$MONGO_URI" ]; then
    echo -e "${RED}Error${NC}: MongoDB URI is not provided."
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

if [ ! -f .env ]; then
    echo "Creating .env file... "
    echo "PORT=5000" > .env
    echo "MONGO_URI=$MONGO_URI" > .env
fi

echo "Installing Dependencies.. Frontend"
cd ../client
npm install


echo "${GREEN}Setup Complete${NC}!!!"

echo "You can run the program manually by running the following commands:"
echo "- Backend: cd server && npx nodemon run"
echo "- Frontend: cd client && npm run dev"
echo "${YELLOW}Default Frontend Port = 5173${NC}"
echo "${YELLOW}Defulat Backend Port = 5000${NC}"
