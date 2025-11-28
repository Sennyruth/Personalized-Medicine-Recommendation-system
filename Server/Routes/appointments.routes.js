import express from "express";
import  {PrismaClient}  from "@prisma/client";
import {CreateAppointment,GetAppointment,GetAllAppointments} from "../Controllers/appointments.controllers.js";

const prisma = new PrismaClient();

const router = express.Router();

router.post('/create', CreateAppointment);
router.get('/:id', GetAppointment);
router.get('/', GetAllAppointments);

export default router;