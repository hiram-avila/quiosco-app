import {PrismaClient} from '@Prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {

  const productos = await prisma.producto.findMany({
    where:{
      categoriaId: 0
    }
  })
  

  res.status(200).json(productos)
}
