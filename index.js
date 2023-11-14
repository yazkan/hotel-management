import express from "express";
import { createConnection } from "mysql2";
import cors from "cors";
import room from "./routes/roomRouter.js";
import payment from "./routes/paymentRouter.js";
import reservation from "./routes/reservationRouter.js";
import service from "./routes/serviceRouter.js";

const app = express();
app.use(cors());

app.use(room);
app.use(payment);
app.use(reservation);
app.use(service);

var con = createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "freelancerdb",
});

//throwladığın errorlara mesaj eklemeyi unutma!!
con.connect(function (err) {
  if (err) throw err;
});

app.get("/", (req, res) => {
  res.status(200).send("Home");
  console.log("Log: Get request '/'");
});

app.listen(3000, () => console.log("Server is running on port: 3000"));
