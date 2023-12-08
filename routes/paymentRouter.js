import { Router } from "express";
import {
  getAllBills,
  getBill,
  createBill,
  deleteBill,
  updateBill,
} from "../controllers/paymentController.js";

const app = Router();

app.get("/billAll", (req, res) => {
  console.log("Log: Get request /bill");
  getAllBills(req, res);
});

app.get("/bill/:bill_id", (req, res) => {
  console.log("Log: Get request /bill/:bill_id=" + req.params.bill_id);
  getBill(req, res);
});

app.delete("/bill/:bill_id", (req, res) => {
  console.log("Log: Delete request /bill/:bill_id=" + req.params.bill_id);
  deleteBill(req, res);
});

app.post("/bill", (req, res) => {
  console.log("Log: Post request /bill");
  createBill(req, res);
});

app.put("/bill/:bill_id", (req, res) => {
  console.log("Log: Post request /bill/:bill_id=" + req.params.bill_id);
  updateBill(req, res);
});

export default app;
