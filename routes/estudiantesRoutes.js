const express = require("express");
const router = express.Router();
const estuadiantesController = require("../controllers/estudiantesController");

// TODOS
router.get("/", estuadiantesController.consultar);
router.post("/", estuadiantesController.ingresar);

// INDIVIDUALES
router
  .route("/:id")
  .get(estuadiantesController.consultarDetalle)
  .put(estuadiantesController.actualizar)
  .delete(estuadiantesController.borrar);

module.exports = router;
