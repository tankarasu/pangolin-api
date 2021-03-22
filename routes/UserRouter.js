// our favorite users are Pangolin :)

// required import
const express = require("express");
let UserRouter = express.Router();
const User = require("../models/user");

// get ------------------
// get all pangolins
UserRouter.get("/", (req, res) => {
  User.find({}).then(result => {
    console.log("result", result);
    res.json(result);
  });
});

// get all friends
UserRouter.get("/all", (req, res) => {
  res.send("get all pangolins friend");
});

// get specific pangolins
UserRouter.get("/:id", (req, res) => {
  res.send("get specific pangolin n°" + req.params.id);
});

// post------------------
// add a new pangolin
UserRouter.post("/", (req, res) => {
  // name validation
  let isValid = true;
  if (!req.body.name) {
    isValid = false;
    res.send("add a name please");
  }

  // mail validation
  if (!req.body.mail) {
    isValid = false;
    res.send("add a mail please");
  }

  // password validation
  if (!req.body.password) {
    isValid = false;
    res.send("add a password please");
  }

  // family validation
  if (!req.body.family) {
    isValid = false;
    res.send("add a family please");
  }

  // age validation
  if (!req.body.age) {
    isValid = false;
    res.send("add a age please");
  }

  // race validation
  if (!req.body.race) {
    isValid = false;
    res.send("add a race please");
  }

  // feed validation
  if (!req.body.feed) {
    isValid = false;
    res.send("add a feed please");
  }

  if (isValid) {
    // initialize new entry on the DB
    const newUser = User({
      name: req.body.name,
      mail: req.body.mail,
      age: req.body.age,
      password: req.body.password,
      family: req.body.family,
      race: req.body.race,
      feed: req.body.feed,
      friends: [],
      connected: false,
    });

    newUser.save().then(result => {
      console.log("add", result);
      res.send("user added");
    });
  }
});

// put-------------------
// set pangolin connected
UserRouter.put("/connect", (req, res) => {
  res.send("pangolin is connected now");
});

// set pangolin disconnected
UserRouter.put("/disconnect", (req, res) => {
  res.send("pangolin is disconnected now");
});

// modify a pangolin details
UserRouter.put("/details", (req, res) => {
  res.send("details was modified");
});

// add a pangolin to friends
UserRouter.put("/:id/add", (req, res) => {
  res.send("pangolin is now friend with n°" + req.params.id);
});

// remove a pangolin from friends
UserRouter.put("/:id/remove", (req, res) => {
  res.send("pangolin is NOT longer friend with n°" + req.params.id);
});

// delete----------------
// remove a pangolin definitively
UserRouter.delete("/:id", (req, res) => {
  res.send("Pangolin n°" + req.params.id + " was deleted");
});

module.exports = UserRouter;
