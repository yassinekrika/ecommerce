import prisma from "@lib/prisma"

export const PATCH = async (req, { params }) => {
    const { quantity } = await req.json()
    const update = await prisma.cartProducts.update({
        where: {
            id: parseInt(params.id)
        }, 
        data: {
            quantity: quantity
        }
    })
    return new Response("update quantity")
}

export const DELETE = async (req, { params }) => {
    const del = await prisma.cartProducts.delete({
        where: {
            id: parseInt(params.id)
        }
    })
    return new Response("delete product from cart")
}