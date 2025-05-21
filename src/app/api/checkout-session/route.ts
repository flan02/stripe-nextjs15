import { NextResponse } from 'next/server'
import { getSessionData } from '@/lib/sessionStore'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  console.log('api checkout-session searchParams', searchParams);
  const sessionId = searchParams.get('sessionId')


  if (!sessionId) return NextResponse.json({ error: 'Falta sessionId' }, { status: 400 })

  const data = getSessionData(sessionId)

  if (!data) return NextResponse.json({ error: 'Sesión no encontrada' }, { status: 404 })

  return NextResponse.json(data)
}
