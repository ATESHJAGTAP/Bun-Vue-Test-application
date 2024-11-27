import { serve } from "bun";

serve({
  port: 3001,
  fetch(req) {
    return new Response("Hello from Bun Backend!", { status: 200 });
  },
});
