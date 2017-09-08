const { createRandomlyDistributedDeploymentTime } = require('./util');
var request = require('request');

for (var i = 0; i < 30; i++) {
    let timeToDeplopment = createRandomlyDistributedDeploymentTime();
    setTimeout(() => {
        sendRequest('Bill English', '862553db-53d2-4301-aa59-87f3c2309724');
    }, timeToDeplopment);
}

for (var i = 0; i < 5; i++) {
    let timeToDeplopment = createRandomlyDistributedDeploymentTime();
    setTimeout(() => {
        sendRequest('Jacinda Ardern', '87e984df-9706-4930-b95c-e78f3088482d');
    }, timeToDeplopment);
}

function sendRequest(answer_text, answer_guid) {
    let message = `Vote for ${answer_text} (${answer_guid})`;
    let payload = { answer_text, answer_guid, message }
    request.post('https://us-central1-stuff-nzherald-poll-spamer.cloudfunctions.net/function-2', { json: payload }, (data) => {
        console.log(message);
        console.log(data);
    });
}