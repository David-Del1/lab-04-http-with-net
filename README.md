# Steps for today's lab
- Create a GET route for `/index.html`
- Create a failing test
- import fsPromise and direct it to `public/index.html`
- tell fsPromise and `.readFile` to read file
- use `.then` and `socket.end` to send the body.
- Account for an empty index.html file by writing in a file before the read