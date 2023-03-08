const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'agateezera@gmail.com',
        subject: 'Welcome to the Task App!',
        text: `Hello ${name}, welcome to the app! Let me know how you get along with the app.`
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'agateezera@gmail.com',
        subject: `Goodbye ${name}`,
        text: `Dear ${name}, we are sad to see you go. Is there anything we could have done better to keep you around?`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}