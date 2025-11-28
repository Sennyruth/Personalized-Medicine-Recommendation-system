import express from "express";
import  {PrismaClient}  from "@prisma/client";


const prisma = new PrismaClient();

export const CreateAppointment = async (req,res) => {
    const {userId,name,email,phone,doctor, date, time, department, reason} = req.body;
    try {
        const appointment = await prisma.appointment.create({
            data:{
                userId,
                name,
                email,
                phone,
                doctor,
                date,
                time,
                department,
                reason
            },
        });
        res.json(appointment);
    
    } catch (error) {
        res.status(500).json({error: "Something went wrong"});
        
    } 
};

export const GetAppointment = async (req,res) => {
    const {id} = req.params;
    try {
        const appointment = await prisma.appointment.findUnique({
            where:{
                id
            },
        });
        res.json(appointment);
    } catch (error) {
        res.status(500).json({error: "Something went wrong"});
        
    } 
};
 
// export const GetAppointmentsByUser = async (req,res) => {
//     const {id} = req.params;
//     try {
//         const appointment = await prisma.appointment.findMany({
//             where:{
//                 userId
//             },
//         });
//         res.json(appointment);
//     } catch (error) {
//         res.status(500).json({error: "Something went wrong"});
        
//     } 
// };
export const GetAllAppointments = async (req,res) => {
    try {
        const appointment = await prisma.appointment.findMany();
        res.status(200).json({success: true, data:appointment});
    } catch (error) {
        res.status(500).json({error: "Something went wrong"});
        
    } 
};