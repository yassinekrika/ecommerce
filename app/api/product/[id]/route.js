import prisma from "@lib/prisma"

export const GET = async (req, { params }) => {
    const products  = await prisma.product.findUnique({
        where: {
            id: parseInt(params.id)
        }
    })
    return new Response(JSON.stringify(products))
}