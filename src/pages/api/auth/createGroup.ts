// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { UserAuth } from '../../../../types/dataType'
import prisma from "../../../../lib/prisma";
import { authorizationToken } from '../../../../lib/auth';

export default async function handler( req: NextApiRequest,res: NextApiResponse<Object>) {
    
    const token = await authorizationToken(req);

    console.log(token)
    const { method } = req
    // console.log('req',req)
    if(method === 'POST') {

        const { group, user } = req.body
        
        if(!user) {
            return res.status(200).json({ message: 'missing parameters' })
        }

        try {
            const groupDb = await prisma.group.create({
                data: {
                name: group, 
                userId: user.id,
                ruler: true,
                }
            })
            console.log(groupDb);
            return res.status(201).json({ groupDb })

        } catch (error) {
            console.error(error)
            return res.status(500).json({ message: error })
        }

    }

    // return res.status(405).json({ message: 'method Not allowed' })
}
