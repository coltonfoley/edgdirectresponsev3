import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const GONE_PATHS = new Set([
  '/custom-aluminum-pergola-cleveland-ohio',
  '/custom-aluminum-pergola-grand-rapids-michigan',
  '/custom-aluminum-pergola-south-bend-indiana',
  '/top-rated-custom-aluminum-pergola-minneapolis-minnesota',
  '/custom-aluminum-pergola-minneapolis-minnesota',
  '/owlee',
  '/prismhardscapes',
]);

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const normalizedPathname =
    request.nextUrl.pathname === '/'
      ? '/'
      : request.nextUrl.pathname.replace(/\/$/, '');

  // Check if we're on the production domain but without www
  // We use a strict check for 'edgpatioshade.com' to avoid breaking localhost or preview URLs
  if (hostname === 'edgpatioshade.com') {
    const url = request.nextUrl.clone();
    url.hostname = 'www.edgpatioshade.com';
    url.protocol = 'https';
    url.port = ''; // Clear port if any

    return NextResponse.redirect(url, 301);
  }

  if (
    hostname === 'www.edgpatioshade.com' &&
    GONE_PATHS.has(normalizedPathname)
  ) {
    return new NextResponse('Gone', {
      status: 410,
      headers: {
        'X-Robots-Tag': 'noindex, nofollow',
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  // Match all paths except internal Next.js paths and static files
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
