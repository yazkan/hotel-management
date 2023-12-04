import { Router } from "express";
import {
  getRoom,
  getAllRooms,
  deleteRoom,
  createRoom,
  updateRoom,
} from "../controllers/roomController.js";

const app = Router();

app.get("/roomAll", (req, res) => {
  console.log("Log: Get request /roomAll");
  getAllRooms(req, res);
});

app.get("/room/:id", (req, res) => {
  console.log("Log: Get request /room/:id=" + req.params.id);
  getRoom(req, res);
});

app.delete("/room/:id", (req, res) => {
  console.log("Log: Delete request /room/:id=" + req.params.id);
  deleteRoom(req, res);
});

app.post("/room", (req, res) => {
  console.log("Log: Post request /room");
  createRoom(req, res);
});

app.put("/room/:id", (req, res) => {
  console.log("Log: Post request /room/:id=" + req.params.id);
  updateRoom(req, res);
});

export default app;
