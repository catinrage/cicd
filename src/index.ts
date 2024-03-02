import { add } from "./lib/functions";

const result = add(1, 2);

const server = Bun.serve({
  port: 3000,
  fetch(request) {
    return new Response(`Hello, world! ${result}`);
  },
});

console.log(`Listening on ${server.url}`);
