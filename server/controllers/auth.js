import User from "../models/user.js";
import { SendEmailCommand } from "@aws-sdk/client-ses";
import { sesClient } from "../libs/sesClient.js";

const createSendEmailCommand = (toAddress, fromAddress, name) => {
  console.log(toAddress, fromAddress, name)
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
  const { fullname, email, password } = req.body;
  const sendEmailCommand = createSendEmailCommand(
    email, process.env.AWS_EMAIL_SENDER, fullname
  );


  try {
    return await sesClient.send(sendEmailCommand);
  } catch (e) {
    console.error("Failed to send email.", e);
    return e;
  }


  // const newUser = new User(user);
  // try {
  //   await newUser.save();
  //   res.status(201).json(newUser);
  //   console.log(newUser)
  // } catch (error) {
  //   res.status(409).json({
  //     message: error.message,
  //   });
  // }
};