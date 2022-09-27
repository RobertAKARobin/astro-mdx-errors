# Astro MDX Errors

If an `.mdx` file imports something that throws an error, the server just keeps spinning until it runs out of memory and the whole Astro process throws e.g:

`FATAL ERROR: Reached heap limit Allocation failed - JavaScript heap out of memory`

See [./src/js/throwerror.ts](src/js/throwerror.ts)
