import express from "express";
import getFilterTracer from "../lib/mongodb/getFilterTracer/getFilterTracer";

const router = express.Router();

router.get("/:id/:options", async (req, res) => {
  const param = req.params;
  const data = await getFilterTracer(param);
  res.send(data);
});

export default router;
