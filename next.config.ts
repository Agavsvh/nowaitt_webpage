import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

// ─── Content Security Policy ───────────────────────────────────────────────
// 'unsafe-inline' is required for Framer Motion (inline styles) and Next.js
// hydration. 'unsafe-eval' is added only in development for HMR.
// ws:/wss: are added in development for the hot-reload WebSocket.
const cspDirectives = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data: https://fonts.gstatic.com",
  `connect-src 'self'${isDev ? " ws://localhost:* wss://localhost:*" : ""}`,
  "media-src 'none'",
  "object-src 'none'",
  "frame-src 'none'",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  !isDev ? "upgrade-insecure-requests" : "",
]
  .filter(Boolean)
  .join("; ");

// ─── Security Headers ──────────────────────────────────────────────────────
const securityHeaders = [
  // Prevent browsers from sniffing MIME types — stops drive-by downloads
  { key: "X-Content-Type-Options", value: "nosniff" },

  // Block clickjacking for browsers that don't support CSP frame-ancestors
  { key: "X-Frame-Options", value: "DENY" },

  // Legacy XSS filter for old browsers
  { key: "X-XSS-Protection", value: "1; mode=block" },

  // Control how much referrer info is sent with requests
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },

  // Enforce HTTPS for 2 years, include subdomains, eligible for preload list
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },

  // Disable browser features not needed by this app
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },

  // Enable DNS prefetching for performance
  { key: "X-DNS-Prefetch-Control", value: "on" },

  // Prevent IE from opening downloads in-page
  { key: "X-Download-Options", value: "noopen" },

  // Main CSP — defence against XSS, data injection, and clickjacking
  { key: "Content-Security-Policy", value: cspDirectives },
];

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        // Apply to every route
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
