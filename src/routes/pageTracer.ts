import express from "express";
import getAllTracer from "../lib/mongodb/getAllTracer/getAllTracer";

const router = express.Router();

router.get("/", async (_, res) => {
  const data = await getAllTracer();
  res.send(data);
});

export default router;
