import connection from "../dbConnect.js";

export const getAllReservations = (req, res) => {
  connection.query(
    "SELECT * FROM reservations",
    function (err, result, fields) {
      if (err) throw err; // TODO: handle error
      res.status(200).json(result);
    }
  );
};

export const createReservation = (req, res) => {
  connection.query(
    "INSERT INTO reservations (customer_id,room_no) VALUES ('" +
      req.body.customer_id +
      "','" +
      req.body.room_no +
      "')",
    function (err, result, fields) {
      if (err) throw err; // TODO: handle error
      res.status(200).json({ message: "Reservation created." });
    }
  );
};

export const getReservation = (req, res) => {
  if (!isNaN(req.params.reservation_id)) {
    connection.query(
      "SELECT * FROM reservations WHERE reservation_id=" +
        req.params.reservation_id,
      function (err, result, fields) {
        if (err) throw err; // TODO: handle error
        res.status(200).json(result);
      }
    );
  } else {
    res
      .status(400)
      .json({ message: "Hatalı giriş! Geçerli bir reservation id giriniz!" });
  }
};

export const deleteReservation = (req, res) => {
  if (!isNaN(req.params.reservation_id)) {
    connection.query(
      "Delete FROM reservations WHERE reservation_id=" +
        req.params.reservation_id,
      function (err, result, fields) {
        if (err) throw err; // TODO: handle error
        res.status(200).json(result);
      }
    );
  } else {
    res
      .status(400)
      .json({ message: "Hatalı giriş! Geçerli bir reservation id giriniz!" });
  }
};

export const updateReservation = (req, res) => {
  if (!isNaN(req.params.reservation_id)) {
    connection.query(
      "UPDATE reservations SET customer_id='" +
        req.body.customer_id +
        "', room_no='" +
        req.body.room_no +
        "' WHERE reservation_id=" +
        req.params.reservation_id,
      function (err, result, fields) {
        if (err) throw err; // TODO: handle error
        res.status(200).json({ message: "Reservation updated." });
      }
    );
  } else {
    res
      .status(400)
      .json({ message: "Hatalı giriş! Geçerli bir reservation id giriniz!" });
  }
};
