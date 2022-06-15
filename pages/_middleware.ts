import { NextRequest, NextResponse } from 'next/server';


export async function middleware(request: NextRequest) {
  console.log('_middleware:', request.nextUrl.href);

  const newUrl = request.nextUrl.clone();
  newUrl.searchParams.set('hello','world');
  newUrl.pathname = '/login';
  const response = NextResponse.rewrite(newUrl);
  
  console.log('_middleware:', newUrl.toString());
  return response;
}
