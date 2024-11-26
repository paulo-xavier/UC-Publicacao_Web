const emailClient = require('./emailClient');

function sendEmail(receiver, message) {
    const sender = 'email@email.com';

    return emailClient.send(sender, receiver, message);
}

module.exports = { sendEmail };
