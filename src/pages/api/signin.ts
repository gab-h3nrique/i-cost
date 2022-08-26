// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from "../../../lib/prisma";
import { User } from '../../../types/dataType';
import jwt from 'jsonwebtoken';

export default async function handler(req: NextApiRequest,res: NextApiResponse) {
    const {name, email, password} = req.body;
    const { method } = req;
    
    if(method !== 'POST') {
        return res.status(405).json({ message: 'method Not allowed' })
    }

    if(!name || !email || !password) {
        return res.status(200).json({ message: 'missing parameters' })
    }

    
    try {
        const response = await prisma.user.findUnique({
            where: {
                email: email
            }
        })

        if(response !== null) {
            return res.status(409).json({ message: 'this email is already use' })
        }
        
        
        const {id:idCreated, name:nameCreated, email:emailCreated} = await prisma.user.create({
            data: <User>{
            name: name, 
            email: email,
            password: password
            }
        })
        const token = 'lkdafsalf'

        
        return res.status(201).json({ message: 'use has been created', token: jwt, user: {id: idCreated, name:nameCreated, email:emailCreated} })
    } catch (error) {
        console.error(error)
        return res.status(500).end(error)
    }
}
