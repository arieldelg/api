import express from "express";
import cors from "cors";
import tracerRouter from "./routes/addTracer";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT;

process.on("uncaughtException", function (err) {
  console.log(err);
});

app.get("/ariel", (_, res) => {
  console.log("perro putisima");
  res.send(`pong ${PORT}`);
});

app.use("/api/addTracer", tracerRouter);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});

export default app;
