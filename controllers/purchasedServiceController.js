import connection from "../dbConnect.js";

export const getAllServices = (req, res) => {
  connection.query("SELECT * FROM purchased_services", function (err, result, fields) {
    if (err) throw err; // TODO: handle error
    res.status(200).json(result);
  });
};

export const createService = (req, res) => {
  connection.query(
    "INSERT INTO purchased_services (reservation_id,service_id) VALUES ('" +
      req.body.reservation_id +
      "','" +
      req.body.service_id +
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
  if (!isNaN(req.params.purchased_service_id)) {
    connection.query(
      "SELECT * FROM purchased_services WHERE purchased_service_id=" + req.params.purchased_service_id,
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
  if (!isNaN(req.params.purchased_service_id)) {
    connection.query(
      "Delete FROM purchased_services WHERE purchased_service_id=" + req.params.purchased_service_id,
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
      "UPDATE purchased_services SET reservation_id='" +
        req.body.reservation_id +
        "', service_id='" +
        req.body.service_id +
        "' WHERE purchased_service_id=" +
        req.params.purchased_service_id,
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
