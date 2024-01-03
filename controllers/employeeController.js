import connection from "../dbConnect.js";

export const getAllEmployees = (req, res) => {
  connection.query("SELECT * FROM employees", function (err, result, fields) {
    if (err) throw err; // TODO: handle error
    res.status(200).json(result);
  });
};

export const createEmployee = (req, res) => {
  connection.query(
    "INSERT INTO employees (employee_name,employee_surname,employee_username,employee_password,employee_eposta,employee_hourly_pay,employee_hire_date) VALUES ('" +
      req.body.employee_name +
      "','" +
      req.body.employee_surname +
      "','" +
      req.body.employee_username +
      "','" +
      req.body.employee_password +
      "','" +
      req.body.employee_email +
      "','" +
      req.body.employee_type +
      "')",
    function (err, result, fields) {
      if (err) {
        console.log(err.message);
        res.status(400).json({ message: err.message });
      } else {
        res.status(200).json({ message: "Employee created." });
      }
    }
  );
};

export const getEmployee = (req, res) => {
  if (!isNaN(req.params.employee_id)) {
    connection.query(
      "SELECT * FROM employees WHERE employee_id=" + req.params.employee_id,
      function (err, result, fields) {
        if (err) throw err; // TODO: handle error
        res.status(200).json(result);
      }
    );
  } else {
    res
      .status(400)
      .json({ message: "Hatalı giriş! Geçerli bir employee id giriniz!" });
  }
};

export const deleteEmployee = (req, res) => {
  if (!isNaN(req.params.employee_id)) {
    connection.query(
      "Delete FROM employees WHERE employee_id=" + req.params.employee_id,
      function (err, result, fields) {
        if (err) throw err; // TODO: handle error
        res.status(200).json(result);
      }
    );
  } else {
    res
      .status(400)
      .json({ message: "Hatalı giriş! Geçerli bir employee id giriniz!" });
  }
};

export const updateEmployee = (req, res) => {
  if (!isNaN(req.params.employee_id)) {
    connection.query(
      "UPDATE employees SET employee_name='" +
        req.body.employee_name +
        "', employee_surname='" +
        req.body.employee_surname +
        "', employee_username='" +
        req.body.employee_username +
        "', employee_password='" +
        req.body.employee_password +
        "', employee_eposta='" +
        req.body.employee_email +
        "', employee_type='" +
        req.body.employee_type +
        "' WHERE employee_id=" +
        req.params.employee_id,
      function (err, result, fields) {
        if (err) throw err; // TODO: handle error
        res.status(200).json({ message: "Employee updated." });
      }
    );
  } else {
    res
      .status(400)
      .json({ message: "Hatalı giriş! Geçerli bir employee id giriniz!" });
  }
};
