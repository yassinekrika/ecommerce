import prisma from "@lib/prisma";

export const GET = async (req) => {
    const users  = await prisma.user.findMany()
    return new Response(JSON.stringify(users))
}
