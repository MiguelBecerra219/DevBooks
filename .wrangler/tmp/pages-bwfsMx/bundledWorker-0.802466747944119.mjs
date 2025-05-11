var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// _worker.js/index.js
import { r as renderers } from "./chunks/internal_CTggMqXH.mjs";
import { c as createExports, s as serverEntrypointModule } from "./chunks/_@astrojs-ssr-adapter_Bnd2CE7O.mjs";
import { manifest } from "./manifest_WVlciXit.mjs";
globalThis.process ??= {};
globalThis.process.env ??= {};
var serverIslandMap = /* @__PURE__ */ new Map([
  ["BookScore", () => import("./chunks/BookScore_BGjT00x0.mjs")],
  ["BuyButton", () => import("./chunks/BuyButton_ClN4XDyT.mjs")]
]);
var _page0 = /* @__PURE__ */ __name(() => import("./pages/_image.astro.mjs"), "_page0");
var _page1 = /* @__PURE__ */ __name(() => import("./pages/libro/_id_.astro.mjs"), "_page1");
var _page2 = /* @__PURE__ */ __name(() => import("./pages/index.astro.mjs"), "_page2");
var pageMap = /* @__PURE__ */ new Map([
  ["node_modules/.pnpm/@astrojs+cloudflare@12.5.2__e2983a2c0681e3bc09a45718795c6d54/node_modules/@astrojs/cloudflare/dist/entrypoints/image-endpoint.js", _page0],
  ["src/pages/libro/[id].astro", _page1],
  ["src/pages/index.astro", _page2]
]);
var _manifest = Object.assign(manifest, {
  pageMap,
  serverIslandMap,
  renderers,
  actions: /* @__PURE__ */ __name(() => import("./_noop-actions.mjs"), "actions"),
  middleware: /* @__PURE__ */ __name(() => import("./_astro-internal_middleware.mjs"), "middleware")
});
var _args = void 0;
var _exports = createExports(_manifest);
var __astrojsSsrVirtualEntry = _exports.default;
var _start = "start";
if (_start in serverEntrypointModule) {
  serverEntrypointModule[_start](_manifest, _args);
}
export {
  __astrojsSsrVirtualEntry as default,
  pageMap
};
//# sourceMappingURL=bundledWorker-0.802466747944119.mjs.map
