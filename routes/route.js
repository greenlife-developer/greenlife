require("dotenv").config({
  path: "./config_files/.env",
});
const express = require("express");
const asyncHandler = require("express-async-handler");
const router = express.Router();
const bcrypt = require("bcrypt");
const { pdfTemplate, subscribe, messageTemplate } = require("../documents");

const mongodb = require("mongodb");
const sendEmail = require("../utils/sendEmail");
const ObjectId = mongodb.ObjectId;
const mongoClient = mongodb.MongoClient;

function getUser(userId, callBack) {
  database.collection("users").findOne(
    {
      _id: ObjectId(userId),
    },
    function (error, result) {
      if (error) {
        console.log(error);
        return;
      }
      if (callBack !== null) {
        callBack(result);
      }
    }
  );
}

const db = process.env.MONGO_URI;

mongoClient.connect(db, { useUnifiedTopology: true }, function (error, client) {
  if (error) {
    console.log(error);
    return;
  }
  console.log("MongoDB Connected...");
  database = client.db("GNLife");

  // router.get("/", (req, res) => {
  //   res.json({
  //     name: "Afolabi Opeyemi"
  //   })
  // });

  router.post("/gnlife/students/contact", asyncHandler(async (req, res) => {
    const { name, email, subject, message } = req.body
    await database.collection("users").insertOne(
      {
        name,
        email,
        subject,
        message,
      },
      async (err, success) => {
        if(success){
          const data = { name, message };

          const content = await messageTemplate(data)
          const send_to = email;
          const sent_from = process.env.EMAIL_USER;

          try {
            await sendEmail(subject, content, send_to, sent_from);
            res.redirect('/students')
          } catch (error) {
            res.status(500);
            throw new Error("Email not sent, please try again");
          }
        }
        console.log(err);
      }
    );
  }));

  router.post("/gnlife/students/subscribe", asyncHandler(async (req, res) => {
    const email = req.body.email;
    await database.collection("users").insertOne(
      {
        email,
      },
      async (err, data) => {
        if (data) {
          const data = { email }

          const content = await subscribe(data)
          const subject = "New Subscription";
          const send_to = email;
          const sent_from = process.env.EMAIL_USER;

          try {
            await sendEmail(subject, content, send_to, sent_from);
            res.redirect('/students')
          } catch (error) {
            res.status(500);
            throw new Error("Email not sent, please try again");
          }

        }
        console.log(err)
      }
    );
  }));

  router.post("/clients/bookservice", asyncHandler(async (req, res) => {
    const {
      clientName,
      clientEmail,
      clientPhone,
      companyName,
      companySize,
      projectName,
      projectScope,
    } = req.body;

    const data = {
      clientName,
      clientEmail,
      clientPhone,
      companyName,
      companySize,
      projectName,
      projectScope,
    }

    // Reset Email
    const content = await pdfTemplate(data)
    const subject = "New Order!!";
    const send_to = clientEmail;
    const sent_from = process.env.EMAIL_USER;

    try {
      await sendEmail(subject, content, send_to, sent_from);
      res.redirect('/')
    } catch (error) {
      res.status(500);
      throw new Error("Email not sent, please try again");
    }


  }));


});

module.exports = router;
