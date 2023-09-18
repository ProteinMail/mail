import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { index } from "../lib/routes.ts";

const app = new Application();
const router = new Router();

router.get("/", index);

app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port: 8080 });
