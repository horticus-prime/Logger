'use strict';

require('dotenv').config();

const express = require('express');
const app = express();

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
 * 
 * @param {string} message - console logs message from save-status
 */
let saveInfo = (info) => {
  console.log(info);
};

/**
 * @param {string} moisture-data - listens for file-save event from moistureSensor
 * 
 * @param {string} req-data - listens for file-save event from reqData
 */

socket.on('moisture-data', moistureSensor);
socket.on('req-data', reqData);

socket.on('save-status', saveInfo);

module.exports =  reqData, moistureSensor, helloWorld;
