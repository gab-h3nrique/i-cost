// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { createBudget, getBudgetForName } from '../../../../../lib/api/budget';
import { Budget } from '../../../../../types/budgetType';


export default async function handler( req: NextApiRequest,res: NextApiResponse<Object>) {
    
    const { method } = req
    
    if(method === 'POST') {

        const { name, groupName , description } = req.body
        
        if(!name || !groupName)  return res.status(200).json({ message: 'missing parameters' })

        try {
            const alreadyExists = await getBudgetForName(name)

            if(alreadyExists) return res.status(409).json({ message: 'this group name is already in use' })

            const budget :Budget = await createBudget(name, groupName, description)

            return res.status(201).json({ budget })

        } catch(error) {

            console.error(error)
            return res.status(500).json({ message: error })
            
        }

    }

    // return res.status(405).json({ message: 'method Not allowed' })
}
