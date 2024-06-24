import express from "express";
import { tracer } from "../services/tracerServices";
import { allTracersByOwner } from "../lib/mongodb/get-tracer/allTracersByOwner";

const router = express.Router();

router.get("/", async (_, res) => {
  const data = await allTracersByOwner();
  res.send(data);
});

router.post("/", (req, res) => {
  tracer.postTracer(req.body);
  res.send({ message: "Data sended", status: 200, ok: true });
});

export default router;
