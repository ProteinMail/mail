/**
 * The mail server for Protein.
 */

import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const app = new Application();
const router = new Router();

router.get("/", (ctx) => {
    ctx.response.body = { "motd": "The NSA is watching you, always." };
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port: 8080 });
