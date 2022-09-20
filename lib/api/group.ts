import prisma from "../../lib/prisma";

export const createGroup = async(groupName:string , userID:number, ruler:boolean) => {
    const groupDb = await prisma.group.create({
        data: {
        name: groupName,
        userId: userID,
        ruler: ruler,
        }
    })
    return groupDb
}

export const getAllGroup = async(userID:number) => {
    const groupDb = await prisma.group.findMany({
        where: { 
            userId: userID
        }
    })
    return groupDb
}