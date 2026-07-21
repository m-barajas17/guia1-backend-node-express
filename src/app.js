const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Servidor backend funcionando correctamente");
});

app.get("/saludo", (req, res) => {
  res.json({ mensaje: "Bienvenido al backend con Node.js y Express" });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});