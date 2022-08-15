import {PrismaClient} from '@Prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {

  const categorias = await prisma.categoria.findMany({
    include:{
      productos: true
    }
  })
  

  res.status(200).json(categorias)
}
