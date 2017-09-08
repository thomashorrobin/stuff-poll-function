var request = require('request');

function createRandomlyDistributedDeploymentTime() {
    return Math.floor(((Math.random() * 7000) + (Math.random() * 7000)) * 1000);
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