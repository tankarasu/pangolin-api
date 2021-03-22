// our favorite users are Pangolin :)

// required import
const express = require("express");

let UserRouter = express.Router();

// get ------------------
// get all pangolins
UserRouter.get("/", (req, res) => {
  res.send("get all pangolin");
});

// get all friends
UserRouter.get("/all", (req, res) => {
  res.send("get all friends of our pangolin");
});

// get specific pangolins
UserRouter.get("/:id", (req, res) => {
  res.send("get specific pangolin n°" + req.params.id);
});

// post------------------
// add a new pangolin
UserRouter.post("/", (req, res) => {
  res.send("Add a new Pangolin");
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
