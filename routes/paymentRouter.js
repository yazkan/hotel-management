import { Router } from "express";
const app = Router();

app.get("/payment", (req, res) => {
  console.log("Log: Get request '/payment'");
  res.status(200).send("payment");
});

export default app;
