// middleware.ts

// import jwt from 'jsonwebtoken';
import jwt from 'jsonwebtoken';
import { NextRequest, NextResponse } from 'next/server';
import { verify } from '../lib/jwttoken';

export default async function middleware(req: NextRequest) {
    const token = req.headers.get('authorization') || req.cookies.get('auth');

    if (req.nextUrl.pathname.startsWith('/api/signin') || req.nextUrl.pathname.startsWith('/api/login')) {
        console.log('rota sem auth')
        return NextResponse.next();
    }

    if(!token) return NextResponse.redirect(new URL('/login', req.url))

    // await jwt.verify(token, process.env.ACCESS_TOKEN as string, (error) =>{
    //     if(error) return NextResponse.redirect(new URL('/login', req.url))
    // })
    // return NextResponse.next();
    try{
        const user = await verify(token, process.env.ACCESS_TOKEN as string);
        console.log('user', user)
        return NextResponse.next();

    } catch(error) {
        return NextResponse.redirect(new URL('/login', req.url))
        // req.nextUrl.pathname = "/login";
        // return NextResponse.redirect(req.nextUrl);
    }
}

//  running middleware on specific paths.
export const config = {
    matcher: ['/app/:path*', '/api/:path*'],
    // matcher: ['/app/:path*'],
  }

