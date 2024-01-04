import connection from "../dbConnect.js";
import crypto from "crypto";

export const getAllCustomers = (req, res) => {
  connection.query("SELECT * FROM customers", function (err, result, fields) {
    if (err) throw err; // TODO: handle error
    res.status(200).json(result);
  });
};

export const createCustomer = (req, res) => {
   //username kayıtlıysa response 400 döner
   connection.query(
    "SELECT * FROM customers WHERE customer_username='" + req.body.customer_username +"'",
    function (err, result, fields) {
      if (err) throw err; // TODO: handle error
      if(result.length != 0)
        res.status(400).json(result);
    }
  );
  connection.query(
    "INSERT INTO customers (customer_name,customer_surname,customer_username,customer_password,customer_email) VALUES ('" +
      req.body.customer_name +
      "','" +
      req.body.customer_surname +
      "','" +
      req.body.customer_username +
      "','" +
      crypto.createHash('md5').update(req.body.customer_password).digest("hex") +
      "','" +
      req.body.customer_email +
      "')",
    function (err, result, fields) {
      if (err) throw err; // TODO: handle error
      res.status(200).json({ message: "Customer created." });
    }
  );
};

export const getCustomer = (req, res) => {
  if (!isNaN(req.params.customer_id)) {
    connection.query(
      "SELECT * FROM customers WHERE customer_id=" + req.params.customer_id,
      function (err, result, fields) {
        if (err) throw err; // TODO: handle error
        res.status(200).json(result);
      }
    );
  } else {
    res
      .status(400)
      .json({ message: "Hatalı giriş! Geçerli bir customer id giriniz!" });
  }
};

export const deleteCustomer = (req, res) => {
  if (!isNaN(req.params.customer_id)) {
    connection.query(
      "Delete FROM customers WHERE customer_id=" + req.params.customer_id,
      function (err, result, fields) {
        if (err) throw err; // TODO: handle error
        res.status(200).json(result);
      }
    );
  } else {
    res
      .status(400)
      .json({ message: "Hatalı giriş! Geçerli bir customer id giriniz!" });
  }
};

export const updateCustomer = (req, res) => {
  if (!isNaN(req.params.customer_id)) {
    connection.query(
      "UPDATE customers SET customer_name='" +
        req.body.customer_name +
        "', customer_surname='" +
        req.body.customer_surname +
        "', customer_username='" +
        req.body.customer_username +
        "', customer_password='" +
        req.body.customer_password +
        "', customer_email='" +
        req.body.customer_email +
        "' WHERE customer_id=" +
        req.params.customer_id,
      function (err, result, fields) {
        if (err) throw err; // TODO: handle error
        res.status(200).json({ message: "Customer updated." });
      }
    );
  } else {
    res
      .status(400)
      .json({ message: "Hatalı giriş! Geçerli bir customer id giriniz!" });
  }
};
