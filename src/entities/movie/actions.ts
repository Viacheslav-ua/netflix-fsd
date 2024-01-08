import prisma from '@/shared/utils/prisma'


export async function getBillboardVideo() {
  try {
    const movieCount = await prisma.movie.count()
    const randomIndex = Math.floor(Math.random() * movieCount)

    const randomMovie = await prisma.movie.findMany({
      take: 1,
      skip: randomIndex,
    })

    return randomMovie[0]

  } catch (error: any) {
    throw new Error(error)
  }
}