import { NextRequest, NextResponse } from 'next/server';

const APEX_HOST = 'invoicingspecialists.com';
const WWW_HOST = 'www.invoicingspecialists.com';
const PRODUCTION_HOSTS = new Set([APEX_HOST, WWW_HOST]);
const CANONICAL_ORIGIN = `https://${APEX_HOST}`;

function firstHeaderValue(value: string | null) {
  return value?.split(',', 1)[0]?.trim().toLowerCase() || '';
}

function requestHost(request: NextRequest) {
  return firstHeaderValue(request.headers.get('host')).split(':', 1)[0];
}

function cloudflareScheme(request: NextRequest) {
  const value = request.headers.get('cf-visitor');
  if (!value) return '';
  try {
    const parsed: unknown = JSON.parse(value);
    if (parsed && typeof parsed === 'object' && 'scheme' in parsed) {
      const scheme = String((parsed as { scheme?: unknown }).scheme).toLowerCase();
      return scheme === 'http' || scheme === 'https' ? scheme : '';
    }
  } catch {
    return '';
  }
  return '';
}

function requestScheme(request: NextRequest) {
  // Cloudflare and the Coolify/Traefik boundary overwrite these scheme headers
  // before production traffic reaches this container. Host routing still uses
  // the direct Host header so client-supplied forwarded hosts cannot bypass it.
  const cloudflare = cloudflareScheme(request);
  if (cloudflare) return cloudflare;
  const forwarded = firstHeaderValue(request.headers.get('x-forwarded-proto'));
  if (forwarded === 'http' || forwarded === 'https') return forwarded;
  return request.nextUrl.protocol.replace(':', '').toLowerCase();
}

export function proxy(request: NextRequest) {
  const host = requestHost(request);
  if (!PRODUCTION_HOSTS.has(host)) return NextResponse.next();

  if (host === WWW_HOST || requestScheme(request) !== 'https') {
    const destination = new URL(CANONICAL_ORIGIN);
    destination.pathname = request.nextUrl.pathname;
    destination.search = request.nextUrl.search;
    return NextResponse.redirect(destination, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/:path*'
};
