const { Router } = require("express");
const router = Router();
const { obtenerMaterias } = require("../controllers/materias.controller");

router.get("/", obtenerMaterias);

module.exports = router;
