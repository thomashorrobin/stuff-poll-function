const { createGuid, createRandomTimestamp, createRandomIPAddress } = require('./util');
const { pre, pick, post, recomendation } = require('./httpcalls');

function sendRequest(answer, answerId, callback) {
    let sessionId = createGuid();
    
    let errors = {
        pre: null,
        pick: null,
        post: null,
        recomendation_one: null,
        recomendation_two: null
    }

    setTimeout(() => {
        pre(sessionId, err => {
            errors.pre = err;
        });
    }, 50);

    setTimeout(recomendation, 75, (responce) => {
        errors.recomendation_one = responce;
    });
    
    setTimeout(() => {
        pick(sessionId, answer, answerId, err => {
            errors.pick = err;
        });
    }, 100);
    
    setTimeout(recomendation, 125, (responce) => {
        errors.recomendation_two = responce;
    });
        
    setTimeout(() => {
        post(sessionId, err => {
            errors.post = err;
            callback(errors);
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
    sendRequest(req.body.answer_text, req.body.answer_guid, err => {
        res.status(200).send(JSON.stringify(err))
    });
  };