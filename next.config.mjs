/** @type {import('next').NextConfig} */
import { createSecureHeaders } from "next-secure-headers";

const nextConfig = {
  async headers() {
    return [{
      source: "/(.*)",
      headers: createSecureHeaders({
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
    }];
  },
};;

export default nextConfig;