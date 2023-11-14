import { Router } from "express";
const app = Router();

app.get("/service", (req, res) => {
  console.log("Log: Get request '/service'");
  res.status(200).send("service");
});

export default app;
