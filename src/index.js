// 1. IMPORTACIONES
const express = require("express");
const app = express();
const PORT = 4000;

// 2. MIDDLEWARES - PODERES
app.use(express.json());

// 3. RUTAS
app.get("/", (req, res) => {
  return res.json({
    msg: "Hola mundo",
  });
});

app.use("/usuarios", require("./routes/users.routes"));
app.use("/materias", require("./routes/materias.routes"));

// 4. SERVIDOR EJECUTANDO
app.listen(PORT, () => {
  console.log(`Servidor en linea en el puerto ${PORT}`);
});
