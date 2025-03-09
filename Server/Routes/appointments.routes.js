import express from "express";
import  {PrismaClient}  from "@prisma/client";
import { verifyToken } from "../Middlewares/VerifyToken.js";
import {CreateAppointment,GetAppointment,GetAllAppointments} from "../Controllers/appointments.controllers.js";

const prisma = new PrismaClient();

const router = express.Router();

router.post('/create',verifyToken, CreateAppointment);
router.get('/:id', GetAppointment);
router.get('/', verifyToken,GetAllAppointments);

export default router;