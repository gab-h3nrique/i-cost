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

        const { userGroup } = req.body
        console.log('dlkafjk',userGroup)
        if(!userGroup) {
            return res.status(200).json({ message: 'missing parameters' })
        }

        try {

            // const groupDb = await prisma.user.create({
            //     data: <User>{
            //     name: name, 
            //     email: email,
            //     password: password
            //     }
            // })














            


        } catch (error) {
            console.error(error)
            return res.status(404).json({ message: 'users not found' })
        }

    }

    return res.status(405).json({ message: 'method Not allowed' })
}
