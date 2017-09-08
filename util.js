module.exports.createGuid = () => { 
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (t) { 
        var e = 16 * Math.random() | 0; 
        return ("x" == t ? e : 3 & e | 8).toString(16) 
    });
}

module.exports.createRandomTimestamp = () => {
    return (30000 + Math.random() * 10000).toString();
}

module.exports.createRandomIPAddress = () => {
    return `27.252.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`;
}

module.exports.createRandomlyDistributedDeploymentTime = () => {
    return Math.floor(((Math.random() * 7000) + (Math.random() * 7000)) * 150);
}