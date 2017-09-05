const fs = require('fs');
const pre = require('./jacinda_pre_1.json');
const picked = require('./jacinda_picked_1.json');
const post = require('./jacinda_post_1.json');
var request = require('request');

function createGuid() { 
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (t) { 
        var e = 16 * Math.random() | 0; 
        return ("x" == t ? e : 3 & e | 8).toString(16) 
    });
}

function createRandomTimestamp() {
    return (30000 + Math.random() * 10000).toString();
}

function createRandomIPAddress() {
    return `27.252.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`;
}

function createRandomlyDistributedDeploymentTime() {
    return Math.floor(((Math.random() * 7000) + (Math.random() * 7000)) * 1000);
}

function sendRequest(answer, answerId) {
    let sessionId = createGuid();
    let randomIp = createRandomIPAddress();

    let payload_pre = pre;
    payload_pre.sessionId = sessionId;
    payload_pre.properties.performanceTimestamp = createRandomTimestamp();
    let contentLength_pre = Buffer.byteLength(JSON.stringify(payload_pre));

    setTimeout(() => {
        request.post('https://events.apester.com/event', {
            headers: {
              'Content-Length': contentLength_pre,
              'Content-Type': 'application/json;charset=UTF-8',
              'authority':'events.apester.com',
              'method':'POST',
              'path':'/event',
              'scheme':'https',
              'accept':'application/json, text/plain, */*',
              'accept-encoding':'gzip, deflate, br',
              'accept-language':'en-US,en;q=0.8',
              'origin':'https://www.stuff.co.nz',
              'referer':'https://www.stuff.co.nz/national/politics/96490760/Who-won-the-second-leaders-debate?sdk=3.0.55s&canonicalUrl=https%3A%2F%2Fwww.stuff.co.nz%2Fnational%2Fpolitics%2F96490760%2FWho-won-the-second-leaders-debate&type=editorial&iframeType=friendlyIframe&platform=desktop',
              'user-agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36',
            },
            uri: 'https://events.apester.com/event',
            body: JSON.stringify(payload_pre),
            // localAddress: randomIp,
            method: 'POST'
          }, function(err) { console.log(err); });
    }, 50);
    
    let payload_picked = pre;
    payload_picked.sessionId = sessionId;
    payload_picked.properties.performanceTimestamp = createRandomTimestamp();
    payload_picked.properties.Answer = answer;
    payload_picked.properties.answer = answer;
    payload_picked.properties.answerId = answerId;
    let contentLength_picked = Buffer.byteLength(JSON.stringify(payload_pre));
    
    setTimeout(() => {
        request.post('https://events.apester.com/event', {
            headers: {
                'Content-Length': contentLength_picked,
                'Content-Type': 'application/json;charset=UTF-8',
                'authority':'events.apester.com',
                'method':'POST',
                'path':'/event',
                'scheme':'https',
                'accept':'application/json, text/plain, */*',
                'accept-encoding':'gzip, deflate, br',
                'accept-language':'en-US,en;q=0.8',
                'origin':'https://www.stuff.co.nz',
                'referer':'https://www.stuff.co.nz/national/politics/96490760/Who-won-the-second-leaders-debate?sdk=3.0.55s&canonicalUrl=https%3A%2F%2Fwww.stuff.co.nz%2Fnational%2Fpolitics%2F96490760%2FWho-won-the-second-leaders-debate&type=editorial&iframeType=friendlyIframe&platform=desktop',
                'user-agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36',
            },
            uri: 'https://events.apester.com/event',
            body: JSON.stringify(payload_picked),
            // localAddress: randomIp,
            method: 'POST'
            }, function(err) { console.log(err); });
    }, 100);
    
    let payload_post = pre;
    payload_post.sessionId = sessionId;
    payload_post.properties.performanceTimestamp = createRandomTimestamp();
    let contentLength_post = Buffer.byteLength(JSON.stringify(payload_pre));

    
    setTimeout(() => {
        request.post('https://events.apester.com/event', {
            headers: {
                'Content-Length': contentLength_post,
                'Content-Type': 'application/json;charset=UTF-8',
                'authority':'events.apester.com',
                'method':'POST',
                'path':'/event',
                'scheme':'https',
                'accept':'application/json, text/plain, */*',
                'accept-encoding':'gzip, deflate, br',
                'accept-language':'en-US,en;q=0.8',
                'origin':'https://www.stuff.co.nz',
                'referer':'https://www.stuff.co.nz/national/politics/96490760/Who-won-the-second-leaders-debate?sdk=3.0.55s&canonicalUrl=https%3A%2F%2Fwww.stuff.co.nz%2Fnational%2Fpolitics%2F96490760%2FWho-won-the-second-leaders-debate&type=editorial&iframeType=friendlyIframe&platform=desktop',
                'user-agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36',
            },
            uri: 'https://events.apester.com/event',
            body: JSON.stringify(payload_post),
            // localAddress: randomIp,
            method: 'POST'
            }, function(err) { console.log(err); });
    }, 150);
}

for (var i = 0; i < 30000; i++) {
    let timeToDeplopment = createRandomlyDistributedDeploymentTime();
    setTimeout(() => {
        sendRequest('Bill English', '862553db-53d2-4301-aa59-87f3c2309724');
    }, timeToDeplopment);
}

for (var i = 0; i < 5000; i++) {
    let timeToDeplopment = createRandomlyDistributedDeploymentTime();
    setTimeout(() => {
        sendRequest('Jacinda Ardern', '87e984df-9706-4930-b95c-e78f3088482d');
    }, timeToDeplopment);
}

console.log(createGuid());
console.log(createRandomTimestamp());
console.log(createRandomIPAddress());
console.log(createRandomlyDistributedDeploymentTime());
// sendRequest('Bill English', '862553db-53d2-4301-aa59-87f3c2309724');