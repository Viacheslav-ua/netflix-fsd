import { getCurrentUser } from "@/entities/session/actions"
import { NextRequest, NextResponse } from "next/server"
import prisma from '@/shared/utils/prisma'
import { addMovieToFavorite, getMovieById } from "@/entities/movie"


export async function POST(request: NextRequest) {
  try {

    const body: {data: string} = await request.json()
    const movieId = body.data

    const currentUser = await getCurrentUser()
    if(!currentUser) throw new Error("You must be loged to add a movie to your favorites")

    const user = await addMovieToFavorite(currentUser.email!, movieId)
    return NextResponse.json(user)
    
  } catch (error) {
    return NextResponse.error()
  }
}

export async function DELETE(request: NextRequest) {
  
}
