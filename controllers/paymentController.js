import connection from "../dbConnect.js";

export const getAllBills = (req, res) => {
  connection.query("SELECT * FROM payments", function (err, result, fields) {
    if (err) throw err; // TODO: handle error
    res.status(200).json(result);
  });
};

export const createBill = (req, res) => {
  connection.query(
    "INSERT INTO payments (payment_amount,payer_name,cc_expierdate,cc_number, cc_cvv,reservation_id) VALUES ('" +
      req.body.payment_amount +
      "','" +
      req.body.payer_name +
      "','" +
      req.body.cc_expierdate +
      "','" +
      req.body.cc_number +
      "','" +
      req.body.cc_cvv +
      "','" +
      req.body.reservation_id +
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
      "SELECT * FROM payments WHERE payment_id=" + req.params.bill_id,
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
      "Delete FROM payments WHERE payment_id=" + req.params.bill_id,
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
      "UPDATE payments SET payment_amount='" +
        req.body.payment_amount +
        "', payer_name='" +
        req.body.payer_name +
        "', cc_expierdate='" +
        req.body.cc_expierdate +
        "', cc_number='" +
        req.body.cc_number +
        "', cc_cvv='" +
        req.body.cc_cvv +
        "', reservation_id='" +
        req.body.reservation_id +
        "' WHERE payment_id=" +
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
