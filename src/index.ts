import express from "express";
import cors from "cors";
import tracerRouter from "./routes/addTracer";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT;

app.get("/ariel", (_, res) => {
  console.log("perro putisima");
  res.send("pong");
});

app.use("/api/addTracer", tracerRouter);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
