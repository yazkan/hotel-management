import connection from "../dbConnect.js";

export const getAllBills = (req, res) => {
  connection.query("SELECT * FROM bills", function (err, result, fields) {
    if (err) throw err; // TODO: handle error
    res.status(200).json(result);
  });
};

export const createBill = (req, res) => {
  connection.query(
    "INSERT INTO bills (customer_id,room_no,bill_amount,bill_date) VALUES ('" +
      req.body.customer_id +
      "','" +
      req.body.room_no +
      "','" +
      req.body.bill_amount +
      "','" +
      req.body.bill_date +
      "')",
    function (err, result, fields) {
      if (err) {
        console.log(err.message);
        res.status(400).json({ message: err.message });
      } else {
        res.status(200).json({ message: "Bill created." });
      }
    }
  );
};

export const getBill = (req, res) => {
  if (!isNaN(req.params.bill_id)) {
    connection.query(
      "SELECT * FROM bills WHERE bill_id=" + req.params.bill_id,
      function (err, result, fields) {
        if (err) throw err; // TODO: handle error
        res.status(200).json(result);
      }
    );
  } else {
    res
      .status(400)
      .json({ message: "Hatalı giriş! Geçerli bir bill id giriniz!" });
  }
};

export const deleteBill = (req, res) => {
  if (!isNaN(req.params.bill_id)) {
    connection.query(
      "Delete FROM bills WHERE bill_id=" + req.params.bill_id,
      function (err, result, fields) {
        if (err) throw err; // TODO: handle error
        res.status(200).json(result);
      }
    );
  } else {
    res
      .status(400)
      .json({ message: "Hatalı giriş! Geçerli bir bill id giriniz!" });
  }
};

export const updateBill = (req, res) => {
  if (!isNaN(req.params.bill_id)) {
    connection.query(
      "UPDATE bills SET customer_id='" +
        req.body.customer_id +
        "', room_no='" +
        req.body.room_no +
        "', bill_amount='" +
        req.body.bill_amount +
        "', bill_date='" +
        req.body.bill_date +
        "' WHERE bill_id=" +
        req.params.bill_id,
      function (err, result, fields) {
        if (err) throw err; // TODO: handle error
        res.status(200).json({ message: "Bill updated." });
      }
    );
  } else {
    res
      .status(400)
      .json({ message: "Hatalı giriş! Geçerli bir bill id giriniz!" });
  }
};
