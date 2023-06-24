import prisma from "@lib/prisma"

export const POST = async (req) => {
  try {
    const { name, email, password } = await req.json()
    const user = await prisma.user.create({
        data: {
          name: name, 
          email: email,  
          password: password,
          isAdmin: "BASIC"
        }
    })

    const userId = await prisma.user.findUnique({
      where: {
        email: email
      }
    })
    console.log(userId)

    const createCart = await prisma.carts.create({
      data: {
        userId: userId.id
      }
    })

  } catch(e) {
    console.log(e)
  }
    return new Response("user added")
}