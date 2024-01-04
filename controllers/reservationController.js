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
  try {
    const insertReservationQuery =
      "INSERT INTO reservations (customer_id,room_no,reservation_start_date,reservation_end_date) VALUES (?, ?, ?, ?)";

    const reservationValues = [
      req.body.customer_id,
      req.body.room_no,
      req.body.reservation_start_date,
      req.body.reservation_end_date
    ];

    connection.query(insertReservationQuery, reservationValues, (err, reservationResult) => {
      if (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error" });
        return;
      }

      const reservationId = reservationResult.insertId;

      for (const serviceId of req.body.purchased_services) {
        const insertServiceQuery =
          "INSERT INTO purchased_services (reservation_id,service_id) VALUES (?, ?)";

        const serviceValues = [reservationId, serviceId];

        connection.query(insertServiceQuery, serviceValues, (serviceErr) => {
          if (serviceErr) {
            console.error(serviceErr);
            res.status(500).json({ message: "Internal Server Error" });
          }
        });
      }

      const insertBillQuery =
      "INSERT INTO bills (reservation_id,bill_amount,bill_datetime) VALUES (?, ?, ?)";
      const billValues = [reservationId, req.body.amount, Date.now()];
      connection.query(insertBillQuery, billValues, (serviceErr) => {
        if (serviceErr) {
          console.error(serviceErr);
          res.status(500).json({ message: "Internal Server Error" });
        }
      });

      res.status(200).json({ message: "Reservation and services created." });
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
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
    try {

      // Delete from bills table
       connection.query(
        "DELETE FROM bills WHERE reservation_id = ?",
        [req.params.reservation_id]
      );

      // Delete from purchased_services table
      connection.query(
        "DELETE FROM purchased_services WHERE reservation_id = ?",
        [req.params.reservation_id]
      );

      // Delete from reservations table
      connection.query(
        "DELETE FROM reservations WHERE reservation_id = ?",
        [req.params.reservation_id]
      );

      res.status(200).json({ message: "Reservation and purchased services deleted." });
    } catch (error) {
      // Rollback the transaction in case of an error
       connection.rollback();
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
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
        "', reservation_start_date='" +
        req.body.reservation_start_date +
        "', reservation_end_date='" +
        req.body.reservation_end_date +
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

//customer_id ile reservationları getiren endpoint
export const getReservationWithCustomerId = (req, res) => {
  if (!isNaN(req.query.customer_id)) {
    connection.query("SELECT r.*, IFNULL(s.service_id, NULL) AS service_id, IFNULL(s.service_price, NULL) AS service_price, IFNULL(s.service_title, NULL) AS service_title FROM reservations AS r LEFT JOIN purchased_services AS ps ON r.reservation_id = ps.reservation_id LEFT JOIN services AS s ON ps.service_id = s.service_id WHERE r.customer_id = " + req.query.customer_id,
      function (err, result, fields) {
        if (err) {
          // TODO: handle error properly
          console.error(err);
          res.status(500).json({ message: "Internal Server Error" });
          return;
        }

        // Manipulate the result to format the services as an array
        const formattedResult = result.reduce((acc, reservation) => {
          const existingReservation = acc.find((item) => item.reservation_id === reservation.reservation_id);

          if (existingReservation) {
            existingReservation.purchased_services.push({
              id: reservation.service_id,
              price: reservation.service_price,
              title: reservation.service_title
            });
          } else {
            acc.push({
              reservation_id: reservation.reservation_id,
              customer_id: reservation.customer_id,
              room_no: reservation.room_no,
              reservation_start_date: reservation.reservation_start_date,
              reservation_end_date: reservation.reservation_end_date,
              purchased_services: [{
                id: reservation.service_id,
                price: reservation.service_price,
                title: reservation.service_title
              }]
            });
          }

          return acc;
        }, []);

        res.status(200).json(formattedResult);
      }
    );
  } else {
    res
      .status(400)
      .json({ message: "Hatalı giriş! Geçerli bir customer_id giriniz!" });
  }
};
