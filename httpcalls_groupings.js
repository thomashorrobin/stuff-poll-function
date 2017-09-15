const { pre, pick, post, recomendation, interaction_submission_options, interaction_submission_post } = require('./httpcalls');
const LogRepository = require('./log_repository');

module.exports.method_1 = (sessionId, answer, answerId, callback) => {
    let lr = new LogRepository();
    
    setTimeout(() => {
        pre(sessionId, err => {
            lr.addLog(`An error occured: ${JSON.stringify(err)}`);
        });
    }, 50);
    
    setTimeout(() => {
        pick(sessionId, answer, answerId, err => {
            lr.addLog(`An error occured: ${JSON.stringify(err)}`);
        });
    }, 100);
        
    setTimeout(() => {
        post(sessionId, err => {
            lr.addLog(`An error occured: ${JSON.stringify(err)}`);
        });
    }, 150);
    
    setTimeout(() => {
        callback(lr);
    }, 800);
}

module.exports.method_2 = (callback) => {
    let lr = new LogRepository();

    setImmediate(() => {
        recomendation((responce) => {
            lr.addLog(`A responce was recieved: ${JSON.stringify(responce)}`);
        });
    });
    
    setTimeout(() => {
        recomendation((responce) => {
            lr.addLog(`A responce was recieved: ${JSON.stringify(responce)}`);
        });
    }, 32);

    setTimeout(() => {
        callback(lr);
    }, 800);
}

module.exports.method_3 = (interactionId, answer_text, answer_guid, callback) => {
    let lr = new LogRepository();
    console.log();

    interaction_submission_options((err, data) => {
        if (err) {
            lr.addLog(`Failed to post options for ${answer_text} (${answer_guid}), interactionId:${interactionId} `);
        } else {
            lr.addLog(`Sucessfully posted options for ${answer_text} (${answer_guid}), interactionId:${interactionId} `);
        }
    });
    setTimeout(() => {
        interaction_submission_post(interactionId, answer_guid, (err, data) => {
            if (err) {
                lr.addLog(`Failed to post data for ${answer_text} (${answer_guid}), interactionId:${interactionId} `);
            } else {
                lr.addLog(`Sucessfully posted data for ${answer_text} (${answer_guid}), interactionId:${interactionId} `);
            }
        });
    }, 25);
    setTimeout(() => {
        callback(lr);
    }, 800);
}