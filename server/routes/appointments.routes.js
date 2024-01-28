import { Router } from "express";
import {PrismaClient} from '@prisma/client';
const router = Router();
const prisma = new PrismaClient();
router.get("/", async (req, res) => {
  const appointments = await prisma.appointments.findMany()
  return res.json(appointments);
});
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    const appointment = await prisma.appointments.findUnique({
        where: {
            id: parseInt(id)
        }
    })
    if (!appointment) {
        return res.status(404).json({ error: 'No se encontro' });
    }
    return res.json(appointment);
});
router.post("/", async (req, res) => {
    const newAppointment = await prisma.appointments.create({
        data: req.body
    })
    return res.json(newAppointment);
});
router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const appointment = await prisma.appointments.update({
        where: {
            id: parseInt(id)
        },
        data: req.body
    })
    return res.json(appointment);
});
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const appointment = await prisma.appointments.delete({
        where: {
            id: parseInt(id)
        }
    })
    if (!appointment) {
        return res.status(404).json({ error: 'No se encontro' });
    }
    return res.json(appointment);
});
export default router;