import { Router } from "express";
import {
  getAllEmployees,
  getEmployee,
  createEmployee,
  deleteEmployee,
  updateEmployee,
} from "../controllers/employeeController.js";

const app = Router();

app.get("/employeeAll", (req, res) => {
  console.log("Log: Get request /employee");
  getAllEmployees(req, res);
});

app.get("/employee/:employee_id", (req, res) => {
  console.log(
    "Log: Get request /employee/:employee_id=" + req.params.employee_id
  );
  getEmployee(req, res);
});

app.delete("/employee/:employee_id", (req, res) => {
  console.log(
    "Log: Delete request /employee/:employee_id=" + req.params.employee_id
  );
  deleteEmployee(req, res);
});

app.post("/employee", (req, res) => {
  console.log("Log: Post request /employee");
  createEmployee(req, res);
});

app.put("/employee/:employee_id", (req, res) => {
  console.log(
    "Log: Post request /employee/:employee_id=" + req.params.employee_id
  );
  updateEmployee(req, res);
});

export default app;
