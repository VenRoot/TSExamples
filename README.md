# TSExamples
A few examples of learning TypeScript/JavaScript

Please look at the tsconfig.json and package.json

When working with node, make sure following are set in the tsconfig.json:

"module: "commonjs" (This transpiles the code to CommonJS to get the best compatiblity with node. Your code won't lose funcitonality)

"lib": ["..."] //Whatever you need to be included in the types (DOM, ESNext, ...)

Remember, the stricter your code is, the less exceptions you may get in production.
So always use types and be as strict as possible