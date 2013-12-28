/* Author: YOUR NAME HERE
*/
/*
$(document).ready(function() {   

  var socket = io.connect();

  $('#sender').bind('click', function() {
   socket.emit('message', 'Message Sent on ' + new Date());     
  });

  socket.on('server_message', function(data){
   $('#receiver').append('<li>' + data + '</li>');  
  });
});
*/

function validateAl() {
    avglevel = $('#average-level').val();
    return (avglevel != "" && avglevel != undefined);
}

function getAverageLevel() {
    return parseInt($('#average-level').val());
}

function replaceVariable(template, varName, newText) {
    var re = new RegExp(varName,"g");
    var text = template.replace(re, newText);
    var matches = text.match(/\%_(.*?)\_%/);
    if (matches) {
        var submatch = matches[1];
        console.log('submatch = ' + submatch);
        var terms = submatch.split(/[Dd]/);
        var times = parseInt(terms[0]);
        console.log('terms = ' + terms);
        console.log('times = ' + times);
        console.log('sides = ' + terms[1]);
        var finalNum = 0;
        for (var i = 0; i < times; i++) {
            finalNum += rollDice(parseInt(terms[1]));
        }
        text = text.replace('%_' + submatch + '_%', finalNum.toString());
    }
    return text;
}

function rollDice(sides) {
    var num = Math.floor((Math.random() * sides) +1);
    return num;
}

function findTableValue(sides, tableNums, tableValues) {
    var num = findTableIndex(sides, tableNums);
    return tableValues[num];
}

function findTableIndex(sides, tableNums) {
    var num = rollDice(sides);
    for (var i = 0; i < tableNums.length; i++) {
        if (num <= tableNums[i]) {
            return i;
        }
    }
    return -1;
}

