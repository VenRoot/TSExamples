const http = require("http");


/** The old way of "importing" code was `require()`
 * 
 * require doesn't come with type checking or autocompletion.
 * The declared http constant carries the type `any`, which is pretty bad since it should NEVER be used
 * 
 * Because we get no type checking and no autocompletion
 * 
 * Also the req and res parameters will be any (normally implicit anys will lead to a compile error,
 * but I disabled it in the compile options in `tsconfig.json`).
 * 
 * So in TypeScript always use import whenever possible, the compiled js file will use require, because node works best with it
 */
 const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      data: 'Hello World!'
    }));
});