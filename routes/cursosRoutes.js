const express = require("express");
const router = express.Router();
const cursosController = require("../controllers/cursos.controller");

// TODOS
router.get("/", cursosController.consultar);

router.post("/", cursosController.ingresar);
router.post("/registrarEsudiante", cursosController.asociarEstudiante);

// INDIVIDUALES
router
  .route("/:id")
  .get(cursosController.consultarDetalle)
  .put(cursosController.actualizar)
  .delete(cursosController.borrar);

module.exports = router;
