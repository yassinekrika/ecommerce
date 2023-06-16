import prisma from "@lib/prisma"

export const POST = async (req) => {
    const { email, cardInformation, cardName, shippingAddress, userId, totalAmount } = await req.json()
    const user = await prisma.order.create({
        data: {
          email: email, 
          cardInformation: cardInformation,  
          cardName: cardName,
          shippingAddress: shippingAddress,
          userId: userId,
          totalAmount: totalAmount,
        }
    })

    const allCartProduct = await prisma.cartProducts.findMany({
      where: {
        cartId: userId
      }
    })
    console.log(allCartProduct)

    allCartProduct.forEach(async (item) => {
      await prisma.product.update({
        where: {
          id: item.id
        }, 
        data: {
          quantity: {
            decrement: item.quantity
          }
        }
      })
    })

    const deleteCartProduct = await prisma.carts.deleteMany({
      where: {
        userId: userId
      }
    })

    return new Response("order sent added")
}