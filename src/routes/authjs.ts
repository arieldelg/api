import express from "express";
import { userAuth } from "../lib/mongodb/userAuth/userAuth";

const route = express.Router();

route.get("/", async (req, res) => {
  const email = req.body;
  const data = await userAuth(email);
  res.send(data);
});

export default route;
