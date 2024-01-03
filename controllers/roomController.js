import connection from "../dbConnect.js";

export const getRoom = (req, res) => {
  if (!isNaN(req.params.room_no)) {
    connection.query(
      "SELECT * FROM rooms WHERE room_no=" + req.params.room_no,
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
  connection.query("SELECT * FROM rooms", function (err, result, fields) {
    if (err) throw err; // TODO: handle error
    res.status(200).json(result);
  });
};

export const deleteRoom = (req, res) => {
  if (!isNaN(req.params.room_no)) {
    connection.query(
      "Delete FROM rooms WHERE room_no=" + req.params.room_no,
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

export const createRoom = (req, res) => {
  connection.query(
    "INSERT INTO rooms (room_condition,room_capacity,room_type,room_price) VALUES ('" +
      req.body.room_condition +
      "','" +
      req.body.room_capacity +
      "','" +
      req.body.room_type +
      "','" +
      req.body.room_price +
      "')",
    function (err, result, fields) {
      if (err) throw err; // TODO: handle error
      res.status(200).json({ message: "Room created." });
    }
  );
};

export const updateRoom = (req, res) => {
  if (!isNaN(req.params.room_no)) {
    connection.query(
      "UPDATE rooms SET room_condition='" +
        req.body.room_condition +
        "', room_capacity='" +
        req.body.room_capacity +
        "', room_type='" +
        req.body.room_type +
        "', room_price='" +
        req.body.room_price +
        "' WHERE room_no=" +
        req.params.room_no,
      function (err, result, fields) {
        if (err) throw err; // TODO: handle error
        res.status(200).json({ message: "Room updated." });
      }
    );
  } else {
    res
      .status(400)
      .json({ message: "Hatalı giriş! Geçerli bir room id giriniz!" });
  }
};

export const filteredRooms = (req, res) => {
  const conflictingReservations=null;
  connection.query(
    "SELECT * FROM reservations",
    function (err, result, fields) {
      if (err) throw err; // TODO: handle error
      conflictingReservations = result.filter(reservation =>
        (reservation.reservation_start_date <= req.query.end_Date && reservation.reservation_end_date >= req.query.start_Date)
      );
    }
  );

  connection.query(
    "SELECT * FROM rooms",
    function (err, result, fields) {
      if (err) throw err; // TODO: handle error
      const availableRooms = result.filter(room => {
        const conflictingReservation = conflictingReservations.find(reservation => reservation.room_no === room.room_no);
        return !conflictingReservation && room.capacity >= req.query.capacity;
      });
      res.status(200).json(availableRooms);
    }
  );
};
