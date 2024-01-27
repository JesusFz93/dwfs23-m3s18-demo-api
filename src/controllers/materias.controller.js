const obtenerMaterias = (req, res) => {
  return res.json({
    ok: true,
    msg: "Materias obtenidos",
    data: [],
  });
};

module.exports = {
  obtenerMaterias,
};
