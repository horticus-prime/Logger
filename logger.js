'use strict';

require('dotenv').config();

const app = express();
const express = require('express');
app.use(express.static('docs'));

const io = require('socket.io-client');

/**
 * @const {} - connects Logger.js to Server.js through SOCKET
 */

const socket = io.connect(process.env.SOCKET);

/**
 * 
 * @param {string} message - console logs message from the moisture sensor
 */
let moistureSensor = (message) => {
  console.log(message);
};

/**
 * 
 * @param {string} message - console logs message from reqData
 */
let reqData = (message) => {
  console.log(message);
};

/**
 * @param {string} message - returns 'Hello World!' as a test of functionality
 */
let helloWorld = () => {
  return 'Hello World!';
};

console.log(helloWorld());

/**
 * @param {string} moisture-data - listens for file-save event from moistureSensor
 * 
 * @param {string} req-data - listens for file-save event from reqData
 */

socket.on('moisture-data', moistureSensor);
socket.on('req-data', reqData);
