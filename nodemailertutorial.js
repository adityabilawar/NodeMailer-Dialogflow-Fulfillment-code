
    //this code goes under the fallback function


    function email(){
        const phonenumber = agent.parameters.phonenumber;
        const name = agent.parameters.name;
        const email = agent.parameters.email;
        const question = agent.parameters.question;
        //Convert name from const object to string
        
        const nodemailer = require("nodemailer");

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'sample@gmail.com',
            pass: 'password'
        }
    });

    const mailOptions = {
        from: "sample@gmail.com", // sender address
        to: "company@gmail.com", // list of receivers
        subject: "Demo Chatbot Customer service (Customer Question) ", // Subject line
        html: "<p> Name:</p> "+ name  +"<p> Email:</p> "+ email +"<p> Phone Number:</p>" + phonenumber + "<p> Question/Comment:</p>" + question
    };

    transporter.sendMail(mailOptions, function (err, info) {
        if(err)
        {
        console.log(err);
        }
    });

    // let intentMap = new Map(); (this code is all ready typed in the Inline Editor)
    // intentMap.set('Default Welcome Intent', welcome);  (this code is all ready typed in the Inline Editor)
    // intentMap.set('Default Fallback Intent', fallback);  (this code is all ready typed in the Inline Editor)
    // intentMap.set('your intent name here', yourFunctionHandler);
    intentMap.set('your intent name here', email);