import express from "express";
import { userAuth } from "../lib/mongodb/userAuth/userAuth";

const route = express.Router();

route.get("/:email", async (req, res) => {
  const email = req.params.email;
  const data = await userAuth(email);
  res.send(data);
});

export default route;
