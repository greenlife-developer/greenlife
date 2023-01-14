require("dotenv").config({
  path: "./config_files/.env",
});
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt")

const mongodb = require("mongodb");
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
  console.log("MongoDB Connected...")
  database = client.db("GNLife");

  router.get("/", (req, res) => {

  });

  router.post("/gnlife/students/contact", (req, res) =>{
    const name = req.body.name
    const email = req.body.email
    const subject = req.body.subject
    const message = req.body.message
  })

  // router.post("/maestromarv/register", (req, res) => {

  //   console.log(req.body)
  //   database.collection("users").findOne(
  //     {
  //       email: req.body.regForm.email,
  //     },
  //     (err, user) => {
  //       if (user === null) {
  //         bcrypt.hash(req.body.regForm.password, 10, (err, hash) => {
  //           database.collection("users").insertOne(
  //             {
  //               firstName: req.body.regForm.fName,
  //               lastName: req.body.regForm.lName,
  //               email: req.body.regForm.email,
  //               number: req.body.regForm.phone,
  //               password: hash,
  //             },
  //             (err, data) => {
  //               console.log(err);
  //               res.redirect("/login?message=registered");
  //             }
  //           );
  //         });
  //       } else {
  //         res.redirect("/register?error=exists");
  //       }
  //     }
  //   );
  // });

  //   router.post("/maestromarv/login", (req, res) => {
  //       const email = req.body.email;
  //       const password = req.body.password;

  //       database.collection("users").findOne(
  //           {
  //               email: email,
  //           },
  //           (err, user) => {
  //               if (user === null) {
  //                   res.redirect("/login?error=not_exists");
  //               } else {
  //                   bcrypt.compare(
  //                       password,
  //                       user.password,
  //                       (err, isPasswordVerify) => {
  //                           if (isPasswordVerify) {
  //                               req.session.user_id = user._id;
  //                               res.redirect("/");
  //                           } else {
  //                               res.redirect("/login?error=wrong_password");
  //                           }
  //                       }
  //                   );
  //               }
  //           }
  //       );
  //   });
});

module.exports = router;
