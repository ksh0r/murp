# MURP
A developer's local companion for *productivity* and *task management*.

## What is MURP?
MURP is a MERN stack application built to boost developers' workflow with clarity and focus. It combines structured To-Do Management, Log tracking, and a Dashboard for effective reflection on completed work.

## Features:
- ***To-Do Management:*** Create, Read, Update, and Delete tasks based on your workflow.
- ***Log Tracking:*** Document your development process for better reflection in the future.
- ***Dashboard:*** Displays your 7 most recent tasks and logs to provide a snapshot of current progress.

## Installation Instructions:
The provided `install.sh` script is tailored for Linux. The script may work with macOS but has not been tested yet. `npm` and `node.js` are necessary for the `install.sh` script to work.

```
Default Backend PORT = 5000
Default Frontend PORT = 5173
```

### Dependencies:
The following dependencies are installed automatically using the `install.sh` script:
```
- node and npm
- nodemon
- react
- react-router-dom
- react-dom
- cors
- dotenv
- express.js
- mongoose
- axios
```

### How to install:
```
git clone https://github.com/ksh0r/murp.git
cd murp
chmod +x install.sh
./install.sh <mongo_uri>
```

*Replace `<mongo_uri>` with your own MongoDB connection string.*

For a local MongoDB setup, ensure `mongodb` and `mongosh` are installed and use the following local storage address: `mongodb://localhost:27017/murpdb`

That is:
```
./install.sh mongodb://localhost:27017/murpdb
```
