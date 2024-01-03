import connection from "../dbConnect.js";

export const getAllBills = (req, res) => {
  connection.query("SELECT * FROM bills", function (err, result, fields) {
    if (err) throw err; // TODO: handle error
    res.status(200).json(result);
  });
};

export const createBill = (req, res) => {
  connection.query(
    "INSERT INTO bills (payment_id,reservation_id,bill_amount,bill_datetime, cc_cvv,reservation_id) VALUES ('" +
      req.body.payment_id +
      "','" +
      req.body.reservation_id +
      "','" +
      req.body.bill_amount +
      "','" +
      req.body.bill_datetime +
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
      "UPDATE bills SET payment_id='" +
        req.body.payment_id +
        "', reservation_id='" +
        req.body.reservation_id +
        "', bill_amount='" +
        req.body.bill_amount +
        "', bill_datetime='" +
        req.body.bill_datetime +
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
