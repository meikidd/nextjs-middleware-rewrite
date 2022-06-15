This repo reproduces issue [https://github.com/vercel/next.js/issues/37720]:

- The `searchParams` is not taken when target page of function `NextResponse.rewrite()` is a non-SSR page.

In this repo `_middleware.ts`, we want to rewrite all requests to "/login?hello=world", but in fact we will only go to "/login" without the query parameter "?hello=world".