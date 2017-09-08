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

/**
 * Responds to any HTTP request that can provide a "message" field in the body.
 *
 * @param {!Object} req Cloud Function request context.
 * @param {!Object} res Cloud Function response context.
 */
exports.helloWorld = function helloWorld(req, res) {
    sendRequest(req.body.answer_text, req.body.answer_guid);
    setTimeout(() => {
        res.status(200).send(JSON.stringify(req.body));
    }, 250);
  };