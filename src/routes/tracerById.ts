import express from "express";
import {
  deleteTracerById,
  tracerById,
  updateTracerById,
} from "../lib/mongodb/get-individualTracer";

const router = express.Router();

router.get("/:id", async (req, res) => {
  const data = await tracerById(req.params.id);
  res.send(data);
});

router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const data = await updateTracerById(id, body);
  res.send(data);
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const data = await deleteTracerById(id);
  res.send(data);
});

export default router;
