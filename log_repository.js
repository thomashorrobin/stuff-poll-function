'use strict'
class LogRepository {
    constructor(logs){
        if (logs) {
            this.logs = logs;
        } else {
            this.logs = [];
        }
    }
    addLog(log) {
        console.log(log);
        this.logs.push(log);
    }
    getLogs() {
        return this.logs;
    }
    addLogs(logRepository) {
        this.logs.push(logRepository.getLogs());
    }
}

module.exports = LogRepository;