import connection from "../dbConnect.js";

export const getAllServices = (req, res) => {
  connection.query("SELECT * FROM services", function (err, result, fields) {
    if (err) throw err; // TODO: handle error
    res.status(200).json(result);
  });
};

export const createService = (req, res) => {
  connection.query(
    "INSERT INTO services (reservation_id,service_minibar,service_breakfast,service_room,service_housekeeping) VALUES ('" +
      req.body.reservation_id +
      "','" +
      req.body.service_minibar +
      "','" +
      req.body.service_breakfast +
      "','" +
      req.body.service_room +
      "','" +
      req.body.service_housekeeping +
      "')",
    function (err, result, fields) {
      if (err) {
        console.log(err.message);
        res.status(400).json({ message: err.message });
      } else {
        res.status(200).json({ message: "Service created." });
      }
    }
  );
};

export const getService = (req, res) => {
  if (!isNaN(req.params.service_id)) {
    connection.query(
      "SELECT * FROM services WHERE service_id=" + req.params.service_id,
      function (err, result, fields) {
        if (err) throw err; // TODO: handle error
        res.status(200).json(result);
      }
    );
  } else {
    res
      .status(400)
      .json({ message: "Hatalı giriş! Geçerli bir service id giriniz!" });
  }
};

export const deleteService = (req, res) => {
  if (!isNaN(req.params.service_id)) {
    connection.query(
      "Delete FROM services WHERE service_id=" + req.params.service_id,
      function (err, result, fields) {
        if (err) throw err; // TODO: handle error
        res.status(200).json(result);
      }
    );
  } else {
    res
      .status(400)
      .json({ message: "Hatalı giriş! Geçerli bir service id giriniz!" });
  }
};

export const updateService = (req, res) => {
  if (!isNaN(req.params.service_id)) {
    connection.query(
      "UPDATE services SET reservation_id='" +
        req.body.reservation_id +
        "', service_minibar='" +
        req.body.service_minibar +
        "', service_breakfast='" +
        req.body.service_breakfast +
        "', service_room='" +
        req.body.service_room +
        "', service_housekeeping='" +
        req.body.service_housekeeping +
        "' WHERE service_id=" +
        req.params.service_id,
      function (err, result, fields) {
        if (err) throw err; // TODO: handle error
        res.status(200).json({ message: "Service updated." });
      }
    );
  } else {
    res
      .status(400)
      .json({ message: "Hatalı giriş! Geçerli bir service id giriniz!" });
  }
};
