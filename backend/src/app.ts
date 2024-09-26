import express from "express";
import dotenv from "dotenv";
import router from "./http/routes/route";
const cors = require("cors");

dotenv.config();

const app = express();

app.use(
    cors({
      origin: "*",
    })
  );

app.use(express.json());

app.use("/api", router);

export default app;
