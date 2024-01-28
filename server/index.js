import express from "express";
import appointmentsRoutes from "./routes/appointments.routes.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/appointments", appointmentsRoutes);
app.listen(4000);
console.log("Server on port", 4000);
 