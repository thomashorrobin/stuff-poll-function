const { createGuid, } = require('./util');
const LogRepository = require('./log_repository');
const { method_1, method_2, method_3 } = require('./httpcalls_groupings');

exports.exec_web_request = (req, res) => {
    sendRequest(req.body.answer_text, req.body.answer_guid, response => {
        res.status(200).send(JSON.stringify(response))
    });
}

exports.sendRequest = sendRequest;

function sendRequest(answer, answerId, callback) {
    let sessionId = createGuid();
    let interactionId = '59ad2e9c6ea3200001fa5b73';
    
    method_1(sessionId, answer, answerId, callback);
    method_2(callback);
    method_3(interactionId, answer, answerId, callback);
}