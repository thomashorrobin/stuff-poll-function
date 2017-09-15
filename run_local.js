var { sendRequest } = require('./index');

sendRequest('Bill English', '862553db-53d2-4301-aa59-87f3c2309724', lr => {
    lr.getLogs().forEach(function(log) {
        console.log(log);
    }, this);
});