import express from "express";
import cors from "cors";
import room from "./routes/roomRouter.js";
import payment from "./routes/paymentRouter.js";
import reservation from "./routes/reservationRouter.js";
import service from "./routes/serviceRouter.js";
import customer from "./routes/customerRouter.js";
import employee from "./routes/employeeRouter.js";
import login from "./routes/loginRouter.js";
import bills from "./routes/billsRouter.js";
import purchasedService from "./routes/purchasedServiceRouter.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(room);
app.use(payment);
app.use(reservation);
app.use(service);
app.use(customer);
app.use(employee);
app.use(login);
app.use(bills);
app.use(purchasedService);

app.get("/", (req, res) => {
  res.status(200).send("Home");
  console.log("Log: Get request '/'");
});

app.listen(9999, () => console.log("Server is running on port: 9999"));
