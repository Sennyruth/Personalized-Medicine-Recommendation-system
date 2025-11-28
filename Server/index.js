
import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import usersRoutes from './Routes/users.routes.js';
import appointmentsRoutes from './Routes/appointments.routes.js';
import { PrismaClient } from '@prisma/client';
import { frontendUrl } from './Utils/Config.js';

config();

const prisma = new PrismaClient();
const app = express();

app.use(cors(
    {
        origin: frontendUrl,
        methods: ['GET', 'POST', 'PUT', 'DELETE'],  
        credentials: true
    }

));

app.use(express.urlencoded({extended:true}))
app.use(express.json());

app.use('/api/users', usersRoutes);
app.use('/api/appointments', appointmentsRoutes);

app.listen(5000, () => {
    console.log(`Server is running on port 5000`);
});