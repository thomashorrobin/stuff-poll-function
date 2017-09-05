const request = require('request');
const fs = require('fs');
const pre = require('./jacinda_pre_1.json');
const picked = require('./jacinda_picked_1.json');
const post = require('./jacinda_post_1.json');

function createGuid() { 
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (t) { 
        var e = 16 * Math.random() | 0; 
        return ("x" == t ? e : 3 & e | 8).toString(16) 
    });
}

function createRandomTimestamp() {
    return (30000 + Math.random() * 10000).toString();
}

function sendRequest(guid) {
    
}