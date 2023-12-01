import { Router } from "express";
import { getRoom, getAllRooms } from "../controllers/roomController.js";
const app = Router();

app.get("/roomAll", (req, res) => {
  console.log("Log: Get request '/roomAll'");
  getAllRooms(req, res);
});

app.get("/room/:id", (req, res) => {
  console.log("Log: Get request room id: " + req.params.id);
  getRoom(req, res);
});

export default app;
