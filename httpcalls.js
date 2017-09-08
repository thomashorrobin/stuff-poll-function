const pre = require('./model_pre.json');
const picked = require('./model_picked.json');
const post = require('./model_post.json');
var request = require('request');
const { createRandomTimestamp } = require('./util');

module.exports.pre = (sessionId, callback) => {

    let payload = pre;
    payload.sessionId = sessionId;
    payload.properties.performanceTimestamp = createRandomTimestamp();

    request.post('https://events.apester.com/event', {
        headers: {
            'Content-Length': Buffer.byteLength(JSON.stringify(payload)),
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
        body: JSON.stringify(payload),
        method: 'POST'
    }, callback);
};

module.exports.pick = (sessionId, answer, answerId, callback) => {
    
    let payload = picked;
    payload.sessionId = sessionId;
    payload.properties.performanceTimestamp = createRandomTimestamp();
    payload.properties.Answer = answer;
    payload.properties.answer = answer;
    payload.properties.answerId = answerId;

    request.post('https://events.apester.com/event', {
        headers: {
            'Content-Length': Buffer.byteLength(JSON.stringify(payload)),
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
        body: JSON.stringify(payload),
        // localAddress: randomIp,
        method: 'POST'
    }, callback);
};

module.exports.post = (sessionId, callback) => {
    
    let payload = pre;
    payload.sessionId = sessionId;
    payload.properties.performanceTimestamp = createRandomTimestamp();

    request.post('https://events.apester.com/event', {
        headers: {
            'Content-Length': Buffer.byteLength(JSON.stringify(payload)),
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
        body: JSON.stringify(payload),
        // localAddress: randomIp,
        method: 'POST'
    }, callback);
};