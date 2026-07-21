const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Servidor backend funcionando correctamente");
});

app.get("/saludo", (req, res) => {
  res.json({ mensaje: "Bienvenido al backend con Node.js y Express" });
});

app.get("/productos", (req, res) => {
  const productos = [
    { id: 1, nombre: "Teclado mecánico", precio: 150000 },
    { id: 2, nombre: "Mouse inalámbrico", precio: 80000 },
    { id: 3, nombre: "Monitor 24 pulgadas", precio: 650000 }
  ];
  res.json(productos);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});