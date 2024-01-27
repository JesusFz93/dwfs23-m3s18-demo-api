const { users } = require("../database/db");

const obtenerUsuarios = (req, res) => {
  return res.json({
    ok: true,
    msg: "Usuarios obtenidos",
    data: users,
  });
};

const crearUsuario = (req, res) => {
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
};

const actualizarUsuario = (req, res) => {
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
};

const eliminarUsuario = (req, res) => {
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
};

module.exports = {
  obtenerUsuarios,
  crearUsuario,
  actualizarUsuario,
  eliminarUsuario,
};
