import { type NextRequest, NextResponse } from "next/server";
import { updateSession } from "@/libs/supabase/middleware";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Match /hashtag and all subpaths
  if (pathname === '/hashtag' || pathname.startsWith('/hashtag/')) {
    return new NextResponse('Gone', { status: 410 });
  }

  // Match /movies and all subpaths
  if (pathname === '/movies' || pathname.startsWith('/movies/')) {
    return new NextResponse('Gone', { status: 410 });
  }

  return await updateSession(request);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
