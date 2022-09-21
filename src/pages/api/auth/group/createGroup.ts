// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { createGroup, getGroupForName } from '../../../../../lib/api/group';
import { Group } from '../../../../../types/groupType';


export default async function handler( req: NextApiRequest,res: NextApiResponse<Object>) {
    
    const { method } = req
    // console.log('req',req)
    if(method === 'POST') {

        const { groupName, user , ruler} = req.body
        
        if(!user) {
            return res.status(200).json({ message: 'missing parameters' })
        }

        try {
            const isthereGroup = await getGroupForName(groupName, user.id)

            if(isthereGroup) {
                return res.status(409).json({ message: 'this group name is already in use' })
            } 
            
            const group :Group = await createGroup(groupName, user.id, ruler)

            return res.status(201).json({ group })

        } catch (error) {

            console.error(error)
            return res.status(500).json({ message: error })
            
        }

    }

    // return res.status(405).json({ message: 'method Not allowed' })
}
