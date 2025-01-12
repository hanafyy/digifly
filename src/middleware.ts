import { NextRequest, NextResponse } from "next/server";

const PUBLIC_FILE = /\.(.*)$/; // Regex to skip public files like .css, .js, etc.
const SUPPORTED_LOCALES = ["en", "ar"]; // Supported locales

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Skip middleware for public files and API routes
  if (PUBLIC_FILE.test(pathname) || pathname.startsWith("/api")) {
    return NextResponse.next();
  }

  const segments = pathname.split("/");
  const locale = segments[1]; // Get the first segment as the locale

  // Redirect if the locale is not supported
  if (!SUPPORTED_LOCALES.includes(locale)) {
    const url = req.nextUrl.clone();
    url.pathname = `/en${pathname}`; // Default to "en"
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
