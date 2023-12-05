import { Router } from "express";
import {
  getAllCustomers,
  getCustomer,
  createCustomer,
  deleteCustomer,
  updateCustomer,
} from "../controllers/customerController.js";

const app = Router();

app.get("/customerAll", (req, res) => {
  console.log("Log: Get request /customer");
  getAllCustomers(req, res);
});

app.get("/customer/:customer_id", (req, res) => {
  console.log(
    "Log: Get request /customer/:customer_id=" + req.params.customer_id
  );
  getCustomer(req, res);
});

app.delete("/customer/:customer_id", (req, res) => {
  console.log(
    "Log: Delete request /customer/:customer_id=" + req.params.customer_id
  );
  deleteCustomer(req, res);
});

app.post("/customer", (req, res) => {
  console.log("Log: Post request /customer");
  createCustomer(req, res);
});

app.put("/customer/:customer_id", (req, res) => {
  console.log(
    "Log: Post request /customer/:customer_id=" + req.params.customer_id
  );
  updateCustomer(req, res);
});

export default app;
