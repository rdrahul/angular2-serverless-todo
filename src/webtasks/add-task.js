"use strict";
var request = require('request');
module.exports = function (context, callback) {
    var taskurl = " $(config.firebase.databaseURL)/tasks.json?auth=$(firebasesecret)";
    var command = context.body;
    console.log('Recieved command : ${JSON.stringify(command)}');
    var task = {
        content: command.content,
        created: Date.now()
    };
    var requestOptions = {
        method: 'POST',
        url: taskurl,
        json: task
    };
    request(requestOptions, function () { return callback(null, "Finished"); });
};
