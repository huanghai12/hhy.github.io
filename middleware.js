import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'
import Cookies from "js-cookie";

export function middleware(request) {
  // console.log(999999)
    const nextUrl = request.nextUrl;
    // console.log(nextUrl.pathname);
    // if(nextUrl.pathname === '/') {
    // const password = request.cookies.get('password');
    // console.log(password);
    // if(password != "yikun606"){
    //   return NextResponse.rewrite(new URL('/login', request.url))
    // }
  // }
    //   if (request.cookies.aut){}
  // if (nextUrl.pathname === '/') {
  //   if (request.cookies.authToken) {
  //     return NextResponse.rewrite(new URL('/', request.url))
  //   } else {
  //     // return NextResponse.rewrite(new URL('/login', request.url))
  //   }
  // }
  // let cookie: any = request.cookies.get('nextjs')?.value
  // const allCookies = request.cookies.getAll()
  // request.cookies.delete('nextjs')
  // request.cookies.has('nextjs') // => false
  const response = NextResponse.next()
  return response;
}