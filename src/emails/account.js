const sgMail = require('@sendgrid/mail');


sgMail.setApiKey(process.env.SENDGRID_API_KEY);

 
const sendWelcomeEmail = (email, name) => {

    sgMail.send({
        to: email,
        from: 'me@test.com',
        subject: 'Thanks for joining in',
        text:  `Welcome to the app ${name}. Let me know how you get along with the app`
        
    });
}

const sendCancelationEmail = (email, name) => {

    sgMail.send({
        to: email,
        from: 'ghost@newmail.com',
        subject: 'User Deactivation',
        text : `Hello ${name}, Care to tell us why you cancelled. Please send us an email`
    });
}


module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}