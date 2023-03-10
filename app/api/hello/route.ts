//Documentation: 
// https://beta.nextjs.org/docs/routing/route-handlers

//TypeScript Warning: Although Response.json() is valid, native TypeScript types currently shows an error, you can use NextResponse.json() for typed responses instead.

// Note: Previously, API Routes could have been used for use cases like handling form submissions. Route Handlers are likely not the solution for these uses cases. We will be recommending the use of mutations for this when ready.

export async function GET(request: Request) {
  return new Response('Hello, Next.js!')
}
