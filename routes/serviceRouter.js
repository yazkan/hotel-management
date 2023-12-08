import { Router } from "express";
import {
  getAllServices,
  getService,
  createService,
  deleteService,
  updateService,
} from "../controllers/serviceController.js";

const app = Router();

app.get("/serviceAll", (req, res) => {
  console.log("Log: Get request /service");
  getAllServices(req, res);
});

app.get("/service/:service_id", (req, res) => {
  console.log("Log: Get request /service/:service_id=" + req.params.service_id);
  getService(req, res);
});

app.delete("/service/:service_id", (req, res) => {
  console.log(
    "Log: Delete request /service/:service_id=" + req.params.service_id
  );
  deleteService(req, res);
});

app.post("/service", (req, res) => {
  console.log("Log: Post request /service");
  createService(req, res);
});

app.put("/service/:service_id", (req, res) => {
  console.log(
    "Log: Post request /service/:service_id=" + req.params.service_id
  );
  updateService(req, res);
});

export default app;
