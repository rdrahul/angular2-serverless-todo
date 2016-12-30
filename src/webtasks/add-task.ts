import { config } from '../common/config';
import { firebasesecret } from '../common/config-secret';
import { AddTaskCommand , Task } from '../common/model';

var request = require('request');

module.exports = function( context ,  callback ){
    console.log("Here");
    const taskurl = ` $(config.firebase.databaseURL)/tasks.json?auth=$(firebasesecret)`;
    const command = <AddTaskCommand>context.body;
    console.log( 'Recieved command : ${JSON.stringify(command)}' );

    const task : Task= {
            content : command.content,
            created : Date.now()
    }

    const requestOptions = {
        method : 'POST',
        url : taskurl,
        json: task
    };

    request( requestOptions , () => callback(null , "Finished"));
}   