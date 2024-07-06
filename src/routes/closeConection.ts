import express from "express";
import closeConection from "../lib/mongodb/closeConection/closeConection";

const routes = express.Router();

routes.get("/", async (_, res) => {
  await closeConection();
  res.send("logout");
});

export default routes;
