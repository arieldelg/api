import express from "express";
import { tracer } from "../services/tracerServices";
import { allTracersByOwner } from "../lib/mongodb/get-tracer/allTracersByOwner";

const router = express.Router();

router.get("/:id", async (req, res) => {
  console.log(req.params);
  const data = await allTracersByOwner(req.params.id);
  res.send(data);
});

router.post("/", (req, res) => {
  tracer.postTracer(req.body);
  res.send({ message: "Data sended", status: 200, ok: true });
});

export default router;
