'use strict';

// Setup socket.io-client
const io = require('socket.io-client');

// connect to server.js
const socket = io.connect('http://localhost:3005');

let moistureSensor = (message) => {
  console.log(message);
};

let reqData = (message) => {
  console.log(message);
};

let helloWorld = () => {
  return 'Hello World!';
};

console.log(helloWorld());

// Listen for file-save event
socket.on('moisture-data', moistureSensor);
socket.on('req-data', reqData);

module.exports =  reqData, moistureSensor, helloWorld;

