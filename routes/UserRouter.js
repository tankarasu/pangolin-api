// our favorite users are Pangolin :)

// required import
import express from "express";
const axios = require("axios");

let UserRouter = express.Router();

/* suppress comment and adjust your routes
UserRouter.route("/")
  .get(() => {})
  .post(() => {})
  .put(() => {})
  .delete(() => {});
*/

// get 
// get specific pangolins
// get all pangolins
// get all friends

// post
// add a new pangolin

// put 
// set pangolin connected
// set pangolin disconnected
// modify a pangolin details
// add a pangolin to friends
// remove a pangolin from friends

// delete
// remove a pangolin definitively

export { UserRouter };
