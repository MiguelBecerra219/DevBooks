// <define:__ROUTES__>
var define_ROUTES_default = {
  version: 1,
  include: [
    "/*"
  ],
  exclude: [
    "/",
    "/_astro/*",
    "/aprendiendo-git.jpg",
    "/favicon.svg",
    "/learning-typescript.jpg",
    "/programador-pragmatico.jpg",
    "/refactoring.jpg",
    "/libro/*"
  ]
};

// node_modules/.pnpm/wrangler@4.14.4_@cloudflare+workers-types@4.20250510.0/node_modules/wrangler/templates/pages-dev-pipeline.ts
import worker from "E:\\Desarrollo web\\Astro\\dev-books\\.wrangler\\tmp\\pages-bwfsMx\\bundledWorker-0.802466747944119.mjs";
import { isRoutingRuleMatch } from "E:\\Desarrollo web\\Astro\\dev-books\\node_modules\\.pnpm\\wrangler@4.14.4_@cloudflare+workers-types@4.20250510.0\\node_modules\\wrangler\\templates\\pages-dev-util.ts";
export * from "E:\\Desarrollo web\\Astro\\dev-books\\.wrangler\\tmp\\pages-bwfsMx\\bundledWorker-0.802466747944119.mjs";
var routes = define_ROUTES_default;
var pages_dev_pipeline_default = {
  fetch(request, env, context) {
    const { pathname } = new URL(request.url);
    for (const exclude of routes.exclude) {
      if (isRoutingRuleMatch(pathname, exclude)) {
        return env.ASSETS.fetch(request);
      }
    }
    for (const include of routes.include) {
      if (isRoutingRuleMatch(pathname, include)) {
        const workerAsHandler = worker;
        if (workerAsHandler.fetch === void 0) {
          throw new TypeError("Entry point missing `fetch` handler");
        }
        return workerAsHandler.fetch(request, env, context);
      }
    }
    return env.ASSETS.fetch(request);
  }
};
export {
  pages_dev_pipeline_default as default
};
//# sourceMappingURL=xf0t49bodib.js.map
