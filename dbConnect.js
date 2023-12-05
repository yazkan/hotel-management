import { createConnection } from "mysql2";

const con = createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "hotel_system",
});

//throwladığın errorlara mesaj eklemeyi unutma!!
con.connect(function (err) {
  if (err) throw err;
});

export default con;
