const express = require("express");
const cors = require("cors");
const app = express();
const estudiantesRoutes = require("./routes/estudiantesRoutes");
const profesoresRoutes = require("./routes/profesoresRoutes");
const cursosRoutes = require("./routes/cursosRoutes");

app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hola mundo");
});

app.use("/estudiantes", estudiantesRoutes);
app.use("/profesores", profesoresRoutes);
app.use("/cursos", cursosRoutes);

app.listen(6500, () => {
  console.log("SERVIDOR LEVANTADO");
});
