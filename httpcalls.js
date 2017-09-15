const pre = require('./model_pre.json');
const picked = require('./model_picked.json');
const post = require('./model_post.json');
var request = require('request');
const { createRandomTimestamp, createGuidNoDash } = require('./util');

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

module.exports.recomendation = (callback) => {
    request('https://recommendation.apester.com/recommend?uri=&page=1&pageSize=3&integrationType=smart&channelId=561ebfc5495c869d5f9605ae&mediaId=59ad2e9c6ea3200001fa5b73', {
        method: 'OPTIONS',
        headers: {
            'Host': 'recommendation.apester.com',
            'Connection': 'keep-alive',
            'Access-Control-Request-Method': 'GET',
            'Origin': 'https://www.stuff.co.nz',
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36',
            'Access-Control-Request-Headers': 'sessionid',
            'Accept': '*/*',
            'Referer': 'https://www.stuff.co.nz/national/politics/96490760/Who-won-the-second-leaders-debate?sdk=3.0.55s&canonicalUrl=https%3A%2F%2Fwww.stuff.co.nz%2Fnational%2Fpolitics%2F96490760%2FWho-won-the-second-leaders-debate%3Fsdk%3D3.0.55s%26canonicalUrl%3Dhttps%3A%2F%2Fwww.stuff.co.nz%2Fnational%2Fpolitics%2F96490760%2FWho-won-the-second-leaders-debate%26type%3Deditorial%26iframeType%3DfriendlyIframe%26platform%3Ddesktop&type=editorial&iframeType=friendlyIframe&platform=desktop',
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'en-US,en;q=0.8'
        }
    }, (err, data) => {
        if (err) {
            callback(err);
        } else {
            callback(data);
        }
    })
}

module.exports.interaction_submission_options = (callback) => {
    request('https://interaction.apester.com/interaction-submission', {
        method: 'OPTIONS',
        headers: {
            'accept':'*/*',
            'accept-encoding':'gzip, deflate, br',
            'accept-language':'en-US,en;q=0.8',
            'access-control-request-headers':'content-type',
            'access-control-request-method':'POST',
            'origin':'https://www.stuff.co.nz',
            'referer':'https://www.stuff.co.nz/national/politics/96490760/Who-won-the-second-leaders-debate?sdk=3.0.55s&canonicalUrl=https%3A%2F%2Fwww.stuff.co.nz%2Fnational%2Fpolitics%2F96490760%2FWho-won-the-second-leaders-debate%3Fsdk%3D3.0.55s%26canonicalUrl%3Dhttps%3A%2F%2Fwww.stuff.co.nz%2Fnational%2Fpolitics%2F96490760%2FWho-won-the-second-leaders-debate%26type%3Deditorial%26iframeType%3DfriendlyIframe%26platform%3Ddesktop&type=editorial&iframeType=friendlyIframe&platform=desktop',
            'user-agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36',
            'authority':'interaction.apester.com'
        }
    }, callback);
}


module.exports.interaction_submission_post = (interactionId, answer_guid, callback) => {
    let payload = {
        interactionId : interactionId,
        result: {
            slideId: interactionId,
            result: answer_guid
        }
    }
    request('https://interaction.apester.com/interaction-submission', {
        options: {
            'accept':'application/json, text/plain, */*',
            'accept-encoding':'gzip, deflate, br',
            'accept-language':'en-US,en;q=0.8',
            'content-length':'142',
            'content-type':'application/json;charset=UTF-8',
            'origin':'https://www.stuff.co.nz',
            'referer':'https://www.stuff.co.nz/national/politics/96490760/Who-won-the-second-leaders-debate?sdk=3.0.55s&canonicalUrl=https%3A%2F%2Fwww.stuff.co.nz%2Fnational%2Fpolitics%2F96490760%2FWho-won-the-second-leaders-debate%3Fsdk%3D3.0.55s%26canonicalUrl%3Dhttps%3A%2F%2Fwww.stuff.co.nz%2Fnational%2Fpolitics%2F96490760%2FWho-won-the-second-leaders-debate%26type%3Deditorial%26iframeType%3DfriendlyIframe%26platform%3Ddesktop&type=editorial&iframeType=friendlyIframe&platform=desktop',
            'user-agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36',
            'authority':'interaction.apester.com'
        },
        method: 'POST'
    }, callback);
}
