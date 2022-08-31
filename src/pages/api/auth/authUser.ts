// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { UserAuth } from '../../../../types/dataType'
import jwt, { JwtPayload } from 'jsonwebtoken';
import prisma from "../../../../lib/prisma";

export default async function handler( req: NextApiRequest,res: NextApiResponse<Object>) {

  const { method } = req;

  if(method !== 'POST') {
    return res.status(405).json({ message: 'method Not allowed' })
  }

  const { auth } = req.body

  if(!auth) {
    return res.status(200).json({ message: 'missing parameters' })
  }

  try {
    // const { id } = jwt.decode(auth) as JwtPayload

    const { id } = jwt.verify(auth, process.env.ACCESS_TOKEN as string) as JwtPayload;

    const userDb = await prisma.user.findUnique({
      where: {
          id: id
      },
      select: {
        id: true,
        name: true,
        email: true
      }
    })

    return res.status(200).json({ user:userDb });

  } catch (error) {
    console.error(error)
    return res.status(404).json({ message: 'user not found or token invalid' })
  }
}

