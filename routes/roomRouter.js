import { Router } from "express";
const app = Router();

app.get("/roomAll", (req, res) => {
  console.log("Log: Get request '/room'");
  res.status(200).send("all roomssssss");
});

app.get("/room/:id", (req, res) => {
  console.log("Log: Get request '/room:${" + req.params.id + "}'");
  res.status(200).send(req.params.id);

  if (!isNaN(req.params.id)) {
    con.query(
      "SELECT * FROM rooms WHERE roomID=" + req.params.id,
      function (err, result, fields) {
        if (err) throw err;
        res.status(200).send(result);
      }
    );
  } else {
    res
      .status(400)
      .json({ message: "Hatalı giriş! Geçerli bir room id giriniz!" });
  }

  console.log("Log: Get request room id: " + req.params.id);
});

export default app;
