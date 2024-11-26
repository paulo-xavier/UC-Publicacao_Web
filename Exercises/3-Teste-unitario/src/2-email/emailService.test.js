const emailClient = require('./emailClient');
const { sendEmail } = require('./emailService');


jest.mock('./emailClient');

test('send email with the correct parameters', () => {
    sendEmail('destination@email.com', 'Hello world');
    expect(emailClient.send).toHaveBeenCalledWith('email@email.com', 'destination@email.com', 'Hello world');
    expect(emailClient.send).toHaveBeenCalledTimes(1);
})