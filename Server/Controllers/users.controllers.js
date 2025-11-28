import express from "express";
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

export const CreateUser = async (req,res) => {
    const {fullname, email, phone, password} = req.body;
    try {
        const user = await prisma.user.create({
            data:{
                fullname,
                email,
                phone,
                password
            },
        });
        res.json(user);
    
    } catch (error) {
        res.status(500).json({error: "Something went wrong"});
        
    } 
};
 export const GetUser = async (req,res) => {
     const {id} = req.params;
     try {
         const user = await prisma.user.findUnique({
             where:{
                 id
             },
         });
         res.json(user);
     } catch (error) {
         res.status(500).json({error: "Something went wrong"});
         
     } 
 }; 

 export const LoginUser = async (req,res) => {
     const {email, password} = req.body;
     try {
         const user = await prisma.user.findFirst({
             where:{
                 email,
                 password
             },
         });
         res.json(user);
     } catch (error) {
         res.status(500).json({error: "Something went wrong"});
         
     } 
 };

