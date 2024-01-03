import connection from "../dbConnect.js";

export const loginCustomer = (req, res) => {
  connection.query(
    "SELECT * FROM customers WHERE username=" +
      connection.escape(req.body.customer_username) +
      " AND password=" +
      connection.escape(req.body.customer_password),
    function (err, result, fields) {
      if (err) throw err; // TODO: handle error
      res.status(200).json(result);
    }
  );
};

export const loginEmployer = (req, res) => {
  connection.query(
    "SELECT * FROM employees WHERE username=" +
      connection.escape(req.body.employee_username) +
      " AND password=" +
      connection.escape(req.body.employee_password),
    function (err, result, fields) {
      if (err) throw err; // TODO: handle error
      res.status(200).json(result);
    }
  );
};
