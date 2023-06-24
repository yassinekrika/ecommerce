import prisma from "@lib/prisma"

export const POST = async (req) => {
    try {
      const { userId, productId, quantity } = await req.json()
   
      const cart = await prisma.carts.findFirst({
        where: {
          userId: parseInt(userId)
        }
      })
      console.log(userId)

      const productExistInCart = await prisma.cartProducts.findFirst({
        where: {
          productId: parseInt(productId),
        }
      })
      
      if (productExistInCart) {
        const increaseQty = await prisma.cartProducts.update({
          where: {
            id: productExistInCart.id
          },
          data: {
            quantity: {
              increment: 1
            }
          }
        })
        return new Response("product added to cart")
      } else {
        const cartProduct = await prisma.CartProducts.create({
          data: {
            cartId: cart.id, 
            productId: parseInt(productId),  
            quantity: parseInt(quantity),
          }
        })
        return new Response("product added to cart")
      }   
    } catch(e) {
      console.log(e)
    }
}

export const GET = async (req) => {
    const result = await prisma.cartProducts.findMany({
        select: {
          id: true,
          cartId: true,
          productId: true,
          quantity: true,
          Product: {
            select: {
              name: true,
              price: true,
              img: true
            }
          }
        }
      })
      return new Response(JSON.stringify(result))
}