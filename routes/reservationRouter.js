import { Router } from "express";
const app = Router();

app.get("/reservation", (req, res) => {
  console.log("Log: Get request '/reservation'");
  res.status(200).send("reservation");
});

export default app;
