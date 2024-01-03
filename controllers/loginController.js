import connection from "../dbConnect.js";

export const loginCustomer = (req, res) => {
  connection.query(
    "SELECT * FROM customers WHERE customer_username=" +
      connection.escape(req.body.customer_username) +
      " AND customer_password=" +
      connection.escape(req.body.customer_password),
    function (err, result, fields) {
      if (err) throw err; // TODO: handle error
      if(result.length !=1)
        res.status(403).send("Customer couldn't find!");
      res.status(200).json(result[0]);
    }
  );
};

export const loginEmployer = (req, res) => {
  connection.query(
    "SELECT * FROM employees WHERE employee_username=" +
      connection.escape(req.body.employee_username) +
      " AND employee_password=" +
      connection.escape(req.body.employee_password),
    function (err, result, fields) {
      if (err) throw err; // TODO: handle error
      if(result.length !=1)
        res.status(403).send("Employer couldn't find!");
      res.status(200).json(result[0]);
    }
  );
};
