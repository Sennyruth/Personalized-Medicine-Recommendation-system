import express from "express";
import  {PrismaClient} from "@prisma/client";
import {SignupUser,LoginUser,GetUser} from "../Controllers/users.controllers.js";

const prisma = new PrismaClient();

const router = express.Router();

router.post('/register', SignupUser);
router.get('/:id', GetUser);
router.post('/login', LoginUser);

export default router;