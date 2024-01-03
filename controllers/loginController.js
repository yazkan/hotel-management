import connection from "../dbConnect.js";

export const loginCustomer = (req, res) => {
  connection.query(
    "SELECT * FROM users WHERE username=" +
      connection.escape(req.body.username) +
      " AND password=" +
      connection.escape(req.body.password),
    function (err, result, fields) {
      if (err) throw err; // TODO: handle error
      res.status(200).json(result);
    }
  );
};

export const loginEmployer = (req, res) => {
  connection.query(
    "SELECT * FROM users WHERE username=" +
      connection.escape(req.body.username) +
      " AND password=" +
      connection.escape(req.body.password),
    function (err, result, fields) {
      if (err) throw err; // TODO: handle error
      res.status(200).json(result);
    }
  );
};
