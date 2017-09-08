const { createGuid, createRandomTimestamp, createRandomIPAddress } = require('./util');
const { pre, pick, post } = require('./httpcalls');

let errors = {
    pre: null,
    pick: null,
    post: null
}

function sendRequest(answer, answerId) {
    let sessionId = createGuid();

    setTimeout(() => {
        pre(sessionId, err => {
            errors.pre = err;
        });
    }, 50);
    
    setTimeout(() => {
        pick(sessionId, answer, answerId, err => {
            errors.pick = err;
        });
    }, 100);
        
    setTimeout(() => {
        post(sessionId, err => {
            errors.post = err;
        });
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
        res.status(200).send(JSON.stringify(errors));
    }, 250);
  };