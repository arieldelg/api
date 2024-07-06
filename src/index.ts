import express from "express";
import cors from "cors";
import tracerRouter from "./routes/addTracer";
import tracerById from "./routes/tracerById";
import filterTracer from "./routes/filterTracer";
import userAuth from "./routes/authjs";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT;

app.get("/ariel", (_, res) => {
  console.log("perro putisima");
  res.send(`pong ${PORT}`);
});

app.use("/api/addTracer", tracerRouter);
app.use("/api/tracerById", tracerById);
app.use("/api/filters", filterTracer);
app.use("/api/userAuth", userAuth);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});

export default app;
