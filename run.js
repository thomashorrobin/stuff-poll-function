const { createRandomlyDistributedDeploymentTime } = require('./util');
var request = require('request');
let votes_placed = 0;

for (var i = 0; i < 100; i++) {
    let timeToDeplopment = createRandomlyDistributedDeploymentTime();
    setTimeout(() => {
        sendRequest('Bill English', '862553db-53d2-4301-aa59-87f3c2309724');
    }, timeToDeplopment);
}

for (var i = 0; i < 100; i++) {
    let timeToDeplopment = createRandomlyDistributedDeploymentTime();
    setTimeout(() => {
        sendRequest('Jacinda Ardern', '87e984df-9706-4930-b95c-e78f3088482d');
    }, timeToDeplopment);
}

setInterval(function() {
    console.log(`Number of votes posted so far: ${votes_placed}`);
}, 15000)

function sendRequest(answer_text, answer_guid) {
    let message = `Vote for ${answer_text} (${answer_guid})`;
    let payload = { answer_text, answer_guid, message }
    request.post('https://us-central1-stuff-nzherald-poll-spamer.cloudfunctions.net/function-2', { json: payload }, (err, data) => {
        if (err) {
            console.log(`Vote placed for ${answer_text} (${answer_guid}) has returned with no errors`);
            votes_placed++;
        } else {
            data.body.logs.forEach(function(log) {
                console.log(log);
            }, this);
        }
    });
}