import prisma from "../../lib/prisma";

export const createBudget = async(name:string, groupName:string , description?:string) => {
    const budgetDb = await prisma.budget.create({
        data: {
        name: name,
        groupName: groupName,
        description: description
        }
    })
    return budgetDb
}

export const getBudgetForName = async(name:string) => {
    const budgetDb = await prisma.budget.findFirst({
        where: { 
            name: name, 
        }
    })
    return budgetDb
}

export const getAllBudget = async(budgetName:string) => {
    const budgetDb = await prisma.budget.findMany({
        where: { 
            groupName: budgetName, 
        }
    })
    return budgetDb
}