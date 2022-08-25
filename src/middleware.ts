// middleware.ts

import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
    const token = req.headers.get('authorization');

    if(!token) {
        return NextResponse.redirect(new URL('/login', req.url))
    }






    
    return NextResponse.next();
}


//  running middleware on specific paths.
export const config = {
    // matcher: ['/cost/:path*', '/api/:path*'],
    matcher: ['/cost/:path*'],
  }