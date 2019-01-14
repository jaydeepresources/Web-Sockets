"use strict";
exports.__esModule = true;

var express = require('express');
var socket = require('socket.io');

var app = express();
var server = app.listen(4000, function () {
    console.log('listening for requests on port 4000,');
});

var io = socket(server);
io.on('connect', function (socket) {
    console.log('made socket connection', socket.id);
    socket.on('post', function (data) {
        console.log('??????' + data.title);
        io.sockets.emit('post', data);
    });
});
