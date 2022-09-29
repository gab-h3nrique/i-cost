import type { NextApiRequest, NextApiResponse } from 'next'
import { getAllGroup } from '../../../../../lib/api/group';
import { Group } from '../../../../../types/groupType';


export default async function handler( req: NextApiRequest,res: NextApiResponse<Object>) {
    
    const { method } = req

    if(method === 'POST') {

        const { groupName, user , ruler} = req.body
        
        if(!user) return res.status(200).json({ message: 'missing parameters' })

        try {

            const groups :Group[] = await getAllGroup(user.id);

            return res.status(201).json({ groups })

        } catch(error) {

            console.error(error)
            return res.status(500).json({ message: error })
            
        }

    }

    // return res.status(405).json({ message: 'method Not allowed' })
}
