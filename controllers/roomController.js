import connection from "../dbConnect.js";

export const getRoom = (req, res) => {
  if (!isNaN(req.params.id)) {
    connection.query(
      "SELECT * FROM users WHERE userID=" + req.params.id,
      function (err, result, fields) {
        if (err) throw err; // TODO: handle error
        res.status(200).json(result);
      }
    );
  } else {
    res
      .status(400)
      .json({ message: "Hatalı giriş! Geçerli bir room id giriniz!" });
  }
};

export const getAllRooms = (req, res) => {
  connection.query("SELECT * FROM users", function (err, result, fields) {
    if (err) throw err; // TODO: handle error
    res.status(200).json(result);
  });
};

export const deleteRoom = (req, res) => {
  connection.query(
    "Delete FROM users WHERE userID=" + req.params.id,
    function (err, result, fields) {
      if (err) throw err; // TODO: handle error
      res.status(200).json(result);
    }
  );
};

export const createRoom = (req, res) => {
  connection.query(
    "INSERT INTO users (username,password,name,surname) VALUES ('" +
      req.body.username +
      "','" +
      req.body.password +
      "','" +
      req.body.name +
      "','" +
      req.body.surname +
      "')",
    function (err, result, fields) {
      if (err) throw err; // TODO: handle error
      res.status(200).json({ message: "User created." });
    }
  );
};
