import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  console.log('_middleware:', request.nextUrl.href);

  const newUrl = request.nextUrl.clone();
  newUrl.searchParams.set('return_url', encodeURIComponent(request.nextUrl.href));
  newUrl.pathname = '/login'; // the /login page is an SSG page, query params will not be carried
  // newUrl.pathname = '/detail'; // change rewrite target to an SSR page, it will work fine
  const response = NextResponse.rewrite(newUrl);
  
  console.log('_middleware:', newUrl.toString());
  return response;
}

export const config = {
  matcher: ['/detail', '/login']
}