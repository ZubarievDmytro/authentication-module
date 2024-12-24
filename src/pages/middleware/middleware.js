// import { createSecureHeaders } from 'next-safe-middleware';
// import Cors from 'cors';

// const cors = Cors({
//   origin: process.env.NEXT_PUBLIC_CORS_ORIGIN,
//   methods: ['GET', 'POST'],
// });

// export function middleware(req) {
//   cors(req, res, (err) => {
//     if (err) throw err;
//     next();
//   });

//   const headers = createSecureHeaders({
//     contentSecurityPolicy: {
//       directives: {
//         defaultSrc: ["'self'"],
//         scriptSrc: ["'self'", "accounts.google.com"],
//         connectSrc: ["'self'", "accounts.google.com"],
//         imgSrc: ["'self'", "lh3.googleusercontent.com"],
//       },
//     },
//   });
//   return headers;
// }