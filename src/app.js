const express = require("express");
const app = express();
const PORT = 3000;

// Ruta principal de bienvenida
app.get("/", (req, res) => {
  res.send("Servidor backend funcionando correctamente");
});

// Ruta de saludo en formato JSON
app.get("/saludo", (req, res) => {
  res.json({ mensaje: "Hola, este backend fue construido por Miguel Barajas" });
});

// Ruta que devuelve una lista fija de productos
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