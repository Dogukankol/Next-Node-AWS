import User from "../models/user.js";
import { SendEmailCommand } from "@aws-sdk/client-ses";
import { sesClient } from "../libs/sesClient.js";

const createSendEmailCommand = (toAddress, fromAddress, name) => {
  return new SendEmailCommand({
    Destination: {
      CcAddresses: [
      ],
      ToAddresses: [
        toAddress,
      ],
    },
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: `<html><body><h1>Hello ${name}</h1 style="color:red;"><p>Test email</p></body></html>`,
        },
        Text: {
          Charset: "UTF-8",
          Data: "TEXT_FORMAT_BODY",
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: "Complete your registration",
      },
    },
    Source: fromAddress,
    ReplyToAddresses: [
      /* more items */
    ],
  });
};



export const createUser = async (req, res) => {
  const userBody = req.body;

  const sendEmailCommand = createSendEmailCommand(
    userBody.email, process.env.AWS_EMAIL_SENDER, userBody.fullname
  );

  await User.findOne({ email: userBody.email }).then(user => {
    if (user) {
      return res.status(400).json({
        error: 'Email is taken'
      });
    }
    
    const newUser = new User(userBody);
    try {
      newUser.save();
      res.status(201).json(newUser);
    } catch (error) {
      res.status(409).json({
        message: error.message,
      });
    }
  });




 

  // try {
  //   return await sesClient.send(sendEmailCommand);
  // } catch (e) {
  //   console.error("Failed to send email.", e);
  //   return e;
  // }


};