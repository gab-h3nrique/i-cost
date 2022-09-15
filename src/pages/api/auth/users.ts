// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { UserAuth } from '../../../../types/dataType'
import prisma from "../../../../lib/prisma";

export default async function handler( req: NextApiRequest,res: NextApiResponse<Object>) {

    const { method } = req

    if(method === 'POST') {

        const { userAuth } = req.body

        if(!userAuth) {
            return res.status(200).json({ message: 'missing parameters' })
        }

        try {

            // const group = await prisma.group.findMany({
            //     where: {
            //         email: email
            //     }
            // })














            


        } catch (error) {
            console.error(error)
            return res.status(404).json({ message: 'users not found' })
        }

    }

    return res.status(405).json({ message: 'method Not allowed' })
}

