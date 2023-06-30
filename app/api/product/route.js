import prisma from "@lib/prisma"

export const GET = async (req) => {
    try {
        const products  = await prisma.product.findMany()
        return new Response(JSON.stringify(products))
    } catch (e) {
        return new Response(e)
    }
}