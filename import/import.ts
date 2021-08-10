import http from "http";



/** With ES6 imports, we also get full type support which means:
 * autocompletion
 * type checking
 * built-in documentation
 * 
 * You can hover with the cursor over the text to see what it recommends/autocompletes or you can look at the docs :)
 */
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      data: 'Hello World!'
    }));
});