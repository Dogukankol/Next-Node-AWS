import jwt from 'jsonwebtoken'
import CryptoJS from 'crypto-js';
import User from "../models/user.js";
import { sesClient } from "../libs/sesClient.js";
import { registerEmail } from '../helpers/emailTemplate.js'


export const createUser = async (req, res) => {
  const userBody = req.body;

  const token = jwt.sign(userBody, process.env.JWT_PRIVATE_KEY, {
    expiresIn: "10m"
  });

  const sesRegisterEmail = registerEmail(
    userBody.email, process.env.AWS_EMAIL_SENDER, userBody.fullname, token
  );

  await User.findOne({ email: userBody.email }).then(user => {
    if (user) {
      return res.status(400).json({
        error: 'This mail already exists'
      });
    }

    try {
      sesClient.send(sesRegisterEmail);
      res.status(200).json({
        success: 'Email successfully send'
      })
    } catch (e) {
      console.error("Failed to send email.", e);
      return e;
    }
  });

};

export const verification = async (req, res) => {
  const userBody = req.body;

  await User.findOne({ email: userBody.email }).then(user => {
    if (user) {
      return res.status(400).json({
        error: 'This token already used'
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

};

export const login = async (req, res) => {
  const userBody = req.body;
  const decryptPassword = CryptoJS.AES.decrypt(userBody.password, process.env.CRYPTO_KEY).toString(CryptoJS.enc.Utf8);

  await User.findOne({ email: userBody.email }).then(user => {
    if (user) {
      const userDecryptPassword = CryptoJS.AES.decrypt(user.password, process.env.CRYPTO_KEY).toString(CryptoJS.enc.Utf8);
      if (userDecryptPassword == decryptPassword) {
        const token = jwt.sign({ _id: user._id }, process.env.JWT_PRIVATE_KEY, { expiresIn: "7d" });
        const { _id, name, email, role } = user;
        return res.json({
          token,
          user: { _id, name, email, role }
        });
      } else {
        res.status(400).json({
          error: 'Email address and password do not match.'
        });
      }
    } else {
      return res.status(400).json({
        error: 'Email does not exist.'
      });
    }
  })
}