import type { NextApiRequest, NextApiResponse } from 'next'
import { getAllBudget } from '../../../../../lib/api/budget';
import { Budget } from '../../../../../types/budgetType';


export default async function handler( req: NextApiRequest,res: NextApiResponse<Object>) {
    
    const { method } = req

    if(method === 'POST') {

        const { budgetName } = req.body
        
        if(!budgetName) return res.status(200).json({ message: 'missing parameters' })

        try {

            const budgets :Budget[] = await getAllBudget(budgetName)

            return res.status(201).json({ budgets })

        } catch(error) {

            console.error(error)
            return res.status(500).json({ message: error })
            
        }

    }

    // return res.status(405).json({ message: 'method Not allowed' })
}
