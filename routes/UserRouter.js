// our favorite users are Pangolin :)

// required import
const express = require("express");
let UserRouter = express.Router();
const User = require("../models/user");

// get ------------------
// get all pangolins
UserRouter.get("/", (req, res) =>
  User.find({}).then(result => res.json(result))
);

// get all friends
UserRouter.get("/:id/all", (req, res) => {
  User.findById(req.params.id)
    .then(user => res.json(user.friends))
    .catch(err => err);
});

// get specific pangolins
UserRouter.get("/:id", (req, res) => {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => err);
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

    newUser.save().then(() => res.send("user added"));
  }
});

// put-------------------
// set pangolin connected
UserRouter.put("/:id/connect", (req, res) => {
  User.findById(req.params.id).then(user => {
    user.connected = true;
    user.save();
    if (user.connected) {
      res.send("pangolin is connected now");
    } else {
      res.send("pangolin is not connected");
    }
  });
});

// set pangolin disconnected
UserRouter.put("/:id/disconnect", (req, res) => {
  User.findById(req.params.id).then(user => {
    user.connected = false;
    user.save();
    if (user.connected) {
      res.send("pangolin is connected now");
    } else {
      res.send("pangolin is not connected");
    }
  });
});

// modify a pangolin details
UserRouter.put("/:id/details", (req, res) => {
  User.findById(req.params.id).then(user => {
    if (req.body.name) {
      user.name = req.body.name;
    }
    if (req.body.mail) {
      user.mail = req.body.mail;
    }
    if (req.body.age) {
      user.age = req.body.age;
    }
    if (req.body.password) {
      user.password = req.body.password;
    }
    if (req.body.family) {
      user.family = req.body.family;
    }
    if (req.body.race) {
      user.race = req.body.race;
    }
    if (req.body.feed) {
      user.feed = req.body.feed;
    }

    user.save().then(() => {
      res.send("User's details was modified");
    });
  });
});

// add a pangolin to friends
UserRouter.put("/:id/add", (req, res) => {
  User.findById(req.params.id).then(user => {
    user.friends.push(req.body.id);
    user.save().then(res.json(user));
  });
});

// remove a pangolin from friends
UserRouter.put("/:id/remove", (req, res) => {
  User.findById(req.params.id).then(user => {
    let { friends } = user;
    const index = friends.indexOf(req.body.id);
    if (index > -1) {
      friends.splice(index, 1);
      user.save();
    }
    res.json(user);
  });
});

module.exports = UserRouter;
