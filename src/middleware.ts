import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';

  // Check if we're on the production domain but without www
  // We use a strict check for 'edgpatioshade.com' to avoid breaking localhost or preview URLs
  if (hostname === 'edgpatioshade.com') {
    const url = request.nextUrl.clone();
    url.hostname = 'www.edgpatioshade.com';
    url.protocol = 'https';
    url.port = ''; // Clear port if any

    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  // Match all paths except internal Next.js paths and static files
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
