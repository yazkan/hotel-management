import { Router } from "express";
import {
  getAllServices,
  getService,
  createService,
  deleteService,
  updateService,
} from "../controllers/purchasedServiceController.js";

const app = Router();

app.get("/serviceAll", (req, res) => {
  console.log("Log: Get request /service");
  getAllServices(req, res);
});

app.get("/service/:purchased_service_id", (req, res) => {
  console.log("Log: Get request /service/:purchased_service_id=" + req.params.purchased_service_id);
  getService(req, res);
});

app.delete("/service/:purchased_service_id", (req, res) => {
  console.log(
    "Log: Delete request /service/:purchased_service_id=" + req.params.purchased_service_id
  );
  deleteService(req, res);
});

app.post("/service", (req, res) => {
  console.log("Log: Post request /service");
  createService(req, res);
});

app.put("/service/:purchased_service_id", (req, res) => {
  console.log(
    "Log: Post request /service/:purchased_service_id=" + req.params.purchased_service_id
  );
  updateService(req, res);
});

export default app;
