import express from "express";
import  {PrismaClient} from "@prisma/client";
import {CreateUser,GetUser,LoginUser} from "../Controllers/users.controllers.js";

const prisma = new PrismaClient();

const router = express.Router();

router.post('/register', CreateUser);
router.get('/:id', GetUser);
router.post('/login', LoginUser);

export default router;