/**
 * The index page.
 */
export function index(ctx) {
    ctx.response.body = {
        "motd": "The NSA is watching you, always.",
        "version": "2023.09.17",
    };
}
