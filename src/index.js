// 1. IMPORTACIONES
const express = require("express");
const app = express();
const PORT = 4000;

const { users } = require("./database/db");

// 2. MIDDLEWARES - PODERES
app.use(express.json());

// 3. RUTAS
app.get("/", (req, res) => {
  return res.json({
    msg: "Hola mundo",
  });
});

app.get("/usuarios", (req, res) => {
  return res.json({
    ok: true,
    msg: "Usuarios obtenidos",
    data: users,
  });
});

app.post("/usuarios", (req, res) => {
  const { user_name, password } = req.body;

  const user = {
    id: "3",
    user_name: user_name,
    password: password,
  };

  users.push(user);

  return res.json({
    ok: true,
    msg: "Usuario creado",
    data: user,
  });
});

app.put("/usuarios/:id", (req, res) => {
  const { id } = req.params;
  const { user_name, password } = req.body;

  const user = users.find((user) => {
    return user.id === id;
  });

  user.user_name = user_name;
  user.password = password;

  return res.json({
    ok: true,
    msg: "Usuario actualizado",
    data: user,
  });
});

app.delete("/usuarios/:id", (req, res) => {
  const { id } = req.params;

  const user = users.find((user) => {
    return user.id === id;
  });

  const indice = users.indexOf(user);

  users.splice(indice, 1);

  return res.json({
    ok: true,
    msg: "Usuario eliminado",
    data: user,
  });
});

// 4. SERVIDOR EJECUTANDO
app.listen(PORT, () => {
  console.log(`Servidor en linea en el puerto ${PORT}`);
});
