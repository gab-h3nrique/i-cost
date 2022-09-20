// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { createGroup } from '../../../../../lib/api/group';
import { Group } from '../../../../../types/groupType';


export default async function handler( req: NextApiRequest,res: NextApiResponse<Object>) {
    
    const { method } = req
    // console.log('req',req)
    if(method === 'POST') {

        const { group, user , ruler} = req.body
        
        if(!user) {
            return res.status(200).json({ message: 'missing parameters' })
        }

        try {

            const createdGroup :Group = await createGroup(group, user.id, ruler);

            return res.status(201).json({ createdGroup })

        } catch (error) {

            console.error(error)
            return res.status(500).json({ message: error })
            
        }

    }

    // return res.status(405).json({ message: 'method Not allowed' })
}
