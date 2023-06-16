import prisma from "@lib/prisma"

export const POST = async (req) => {
    const { name, email, password } = await req.json()
    const user = await prisma.user.create({
        data: {
          name: name, 
          email: email,  
          password: password,
          isAdmin: "BASIC"
        }
    })

    return new Response("user added")
}