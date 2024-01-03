import { Router } from "express";
import {loginCustomer,loginEmployer} from "../controllers/loginController.js";

const app = Router();

app.post("/loginCustomer", (req, res) => {
  console.log("Log: Post request /login");
  loginCustomer(req, res);
});

app.post("/loginEmployer", (req, res) => {
    console.log("Log: Post request /login");
    loginEmployer(req, res);
  });

export default app;
