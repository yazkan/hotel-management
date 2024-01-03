import { Router } from "express";
import {
  getRoom,
  getAllRooms,
  deleteRoom,
  createRoom,
  updateRoom,
  filteredRooms
} from "../controllers/roomController.js";

const app = Router();

app.get("/roomAll", (req, res) => {
  console.log("Log: Get request /roomAll");
  getAllRooms(req, res);
});

app.get("/room/:room_no", (req, res) => {
  console.log("Log: Get request /room/:room_no=" + req.params.room_no);
  getRoom(req, res);
});

app.delete("/room/:room_no", (req, res) => {
  console.log("Log: Delete request /room/:room_no=" + req.params.room_no);
  deleteRoom(req, res);
});

app.post("/room", (req, res) => {
  console.log("Log: Post request /room");
  createRoom(req, res);
});

app.put("/room/:room_no", (req, res) => {
  console.log("Log: Post request /room/:room_no=" + req.params.room_no);
  updateRoom(req, res);
});

app.get("/rooms/:start_date&:end_date&:capacity", (req, res) => {
  console.log("Log: Post request /room/:start_date=" + req.params.start_date + "&end_date=" + req.params.end_date + "&capacity=" + req.params.capacity);
  filteredRooms(req, res);
});

export default app;
