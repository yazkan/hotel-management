import { Router } from "express";
import {
  getAllReservation,
  getReservation,
  createReservation,
  deleteReservation,
  updateReservation,
} from "../controllers/reservationController.js";

const app = Router();

app.get("/reservation", (req, res) => {
  console.log("Log: Get request /reservation");
  getAllReservation(req, res);
});

app.get("/reservation/:id", (req, res) => {
  console.log("Log: Get request /reservation/:id=" + req.params.id);
  getReservation(req, res);
});

app.delete("/reservation/:id", (req, res) => {
  console.log("Log: Delete request /reservation/:id=" + req.params.id);
  deleteReservation(req, res);
});

app.post("/reservation", (req, res) => {
  console.log("Log: Post request /reservation");
  createReservation(req, res);
});

app.post("/reservation/:id", (req, res) => {
  console.log("Log: Post request /reservation/:id=" + req.params.id);
  updateReservation(req, res);
});

export default app;
