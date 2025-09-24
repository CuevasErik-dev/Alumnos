const express = require("express");
const cors = require("cors");
const alumnosRoutes = require("./routes/alumnos");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/alumnos", alumnosRoutes);

app.listen(8080, "0.0.0.0", () => {
    console.log("Server running on port 8080");
});