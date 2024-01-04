import { Router } from "express";
import {
  getAllReservations,
  getReservation,
  createReservation,
  deleteReservation,
  updateReservation,
  getReservationWithCustomerId,
} from "../controllers/reservationController.js";

const app = Router();

app.get("/reservationAll", (req, res) => {
  console.log("Log: Get request /reservation");
  getAllReservations(req, res);
});

app.get("/reservation/:reservation_id", (req, res) => {
  console.log(
    "Log: Get request /reservation/:reservation_id=" + req.params.reservation_id
  );
  getReservation(req, res);
});

app.delete("/reservation/:reservation_id", (req, res) => {
  console.log(
    "Log: Delete request /reservation/:reservation_id=" +
      req.params.reservation_id
  );
  deleteReservation(req, res);
});

app.post("/reservation", (req, res) => {
  console.log("Log: Post request /reservation");
  createReservation(req, res);
});

app.put("/reservation/:reservation_id", (req, res) => {
  console.log(
    "Log: Post request /reservation/:reservation_id=" +
      req.params.reservation_id
  );
  updateReservation(req, res);
});

app.get("/reservation", (req, res) => {
  console.log(
    "Log: Get request /reservation/:reservation_id=" + req.query.customer_id
  );
  getReservationWithCustomerId(req, res);
});

export default app;
