import prisma from "@lib/prisma";

export const GET = async (req) => {
    
    try {
        const users  = await prisma.user.findMany()
        return new Response(JSON.stringify(users))
    } catch (e) {
            return new Response(e)
        }
}
