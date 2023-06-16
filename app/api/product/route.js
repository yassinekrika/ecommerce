import prisma from "@lib/prisma"

export const GET = async (req) => {
    const products  = await prisma.product.findMany()
    return new Response(JSON.stringify(products))
}