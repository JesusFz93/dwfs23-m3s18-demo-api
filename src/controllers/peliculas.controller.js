const { peliculas } = require("../database/db");

const obtenerPeliculas = (req, res) => {
  return res.json({
    ok: true,
    msg: "Peliculas obtenidas",
    data: peliculas,
  });
};

const crearPelicula = (req, res) => {
  const { title, year, price } = req.body;

  const pelicula = {
    id: "2",
    title: title,
    year: year,
    price: price,
  };

  peliculas.push(pelicula);

  return res.json({
    ok: true,
    msg: "Pelicula creada",
    data: pelicula,
  });
};

const actualizarPelicula = (req, res) => {
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
