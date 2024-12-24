/** @type {import('next').NextConfig} */
import { createSecureHeaders } from "next-secure-headers";

const nextConfig = {
  async headers() {
    return [{
      source: "/(.*)",
      headers: [...createSecureHeaders({
        contentSecurityPolicy: {
          directives: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'", "accounts.google.com"],
            connectSrc: ["'self'", "accounts.google.com"],
            imgSrc: ["'self'", "lh3.googleusercontent.com"],
          },
        },
        forceHTTPSRedirect: [true, { maxAge: 60 * 60 * 24 * 4, includeSubDomains: true }],
        referrerPolicy: "same-origin",
      }),
      {
        key: "Access-Control-Allow-Origin",
        value: process.env.ALLOW_ORIGIN,
      },
      {
        key: "Access-Control-Allow-Methods",
        value: "GET, POST, PUT, DELETE, OPTIONS",
      },
      {
        key: "Access-Control-Allow-Headers",
        value: "Content-Type, Authorization",
      },
    ],
    }];
  },
};;

export default nextConfig;