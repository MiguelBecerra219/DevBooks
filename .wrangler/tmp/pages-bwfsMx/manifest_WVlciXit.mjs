globalThis.process ??= {}; globalThis.process.env ??= {};
import { f as decodeKey } from './chunks/astro/server_C14u9rZJ.mjs';
import './chunks/astro-designed-error-pages_DcEgzmYk.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/noop-middleware_CO9Zhkp2.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///E:/Desarrollo%20web/Astro/dev-books/","cacheDir":"file:///E:/Desarrollo%20web/Astro/dev-books/node_modules/.astro/","outDir":"file:///E:/Desarrollo%20web/Astro/dev-books/dist/","srcDir":"file:///E:/Desarrollo%20web/Astro/dev-books/src/","publicDir":"file:///E:/Desarrollo%20web/Astro/dev-books/public/","buildClientDir":"file:///E:/Desarrollo%20web/Astro/dev-books/dist/","buildServerDir":"file:///E:/Desarrollo%20web/Astro/dev-books/dist/_worker.js/","adapterName":"@astrojs/cloudflare","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/@astrojs+cloudflare@12.5.2__e2983a2c0681e3bc09a45718795c6d54/node_modules/@astrojs/cloudflare/dist/entrypoints/image-endpoint.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["E:/Desarrollo web/Astro/dev-books/src/pages/libro/[id].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/libro/[id]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["E:/Desarrollo web/Astro/dev-books/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-actions":"_noop-actions.mjs","\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000@astro-page:node_modules/.pnpm/@astrojs+cloudflare@12.5.2__e2983a2c0681e3bc09a45718795c6d54/node_modules/@astrojs/cloudflare/dist/entrypoints/image-endpoint@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/libro/[id]@_@astro":"pages/libro/_id_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"index.js","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astro-renderers":"renderers.mjs","E:\\Desarrollo web\\Astro\\dev-books\\.astro\\content-assets.mjs":"chunks/content-assets_XqCgPAV2.mjs","E:\\Desarrollo web\\Astro\\dev-books\\.astro\\content-modules.mjs":"chunks/content-modules_Bvq7llv8.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_of4Tw4mw.mjs","E:/Desarrollo web/Astro/dev-books/node_modules/.pnpm/astro@5.7.12_@types+node@22_2b4d72ef27105e9e1a1acaadf4970258/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_IPxGwn9k.mjs","E:/Desarrollo web/Astro/dev-books/src/components/BookScore.astro":"chunks/BookScore_BGjT00x0.mjs","E:/Desarrollo web/Astro/dev-books/src/components/BuyButton.astro":"chunks/BuyButton_ClN4XDyT.mjs","E:/Desarrollo web/Astro/dev-books/node_modules/.pnpm/unstorage@1.16.0/node_modules/unstorage/drivers/cloudflare-kv-binding.mjs":"chunks/cloudflare-kv-binding_DMly_2Gl.mjs","\u0000@astrojs-manifest":"manifest_WVlciXit.mjs","E:/Desarrollo web/Astro/dev-books/node_modules/.pnpm/astro@5.7.12_@types+node@22_2b4d72ef27105e9e1a1acaadf4970258/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.CtSceO8m.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/index.C8IrEESN.css","/aprendiendo-git.jpg","/favicon.svg","/learning-typescript.jpg","/programador-pragmatico.jpg","/refactoring.jpg","/_worker.js/index.js","/_worker.js/renderers.mjs","/_worker.js/_@astrojs-ssr-adapter.mjs","/_worker.js/_astro-internal_middleware.mjs","/_worker.js/_noop-actions.mjs","/_astro/ClientRouter.astro_astro_type_script_index_0_lang.CtSceO8m.js","/_worker.js/chunks/astro-designed-error-pages_DcEgzmYk.mjs","/_worker.js/chunks/astro_jxD3Svx-.mjs","/_worker.js/chunks/BookScore_BGjT00x0.mjs","/_worker.js/chunks/BuyButton_ClN4XDyT.mjs","/_worker.js/chunks/cloudflare-kv-binding_DMly_2Gl.mjs","/_worker.js/chunks/content-assets_XqCgPAV2.mjs","/_worker.js/chunks/content-modules_Bvq7llv8.mjs","/_worker.js/chunks/index_CYynmX7M.mjs","/_worker.js/chunks/internal_CTggMqXH.mjs","/_worker.js/chunks/Layout_D5TMUhEt.mjs","/_worker.js/chunks/noop-middleware_CO9Zhkp2.mjs","/_worker.js/chunks/parse_EttCPxrw.mjs","/_worker.js/chunks/path_C-ZOwaTP.mjs","/_worker.js/chunks/runtime_CgJT6ISi.mjs","/_worker.js/chunks/sharp_IPxGwn9k.mjs","/_worker.js/chunks/_@astrojs-ssr-adapter_Bnd2CE7O.mjs","/_worker.js/chunks/_astro_assets_Ce8D46u7.mjs","/_worker.js/chunks/_astro_data-layer-content_of4Tw4mw.mjs","/_worker.js/pages/index.astro.mjs","/_worker.js/pages/_image.astro.mjs","/_worker.js/_astro/index.C8IrEESN.css","/_worker.js/chunks/astro/server_C14u9rZJ.mjs","/_worker.js/pages/libro/_id_.astro.mjs","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[["E:/Desarrollo web/Astro/dev-books/src/components/BookScore.astro","BookScore"],["E:/Desarrollo web/Astro/dev-books/src/components/BuyButton.astro","BuyButton"]],"key":"HHolxJdpXjZlU1KQTAKlVQaJEQ5ZbCCls198eD04D4Y=","sessionConfig":{"driver":"cloudflare-kv-binding","options":{"binding":"SESSION"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/cloudflare-kv-binding_DMly_2Gl.mjs');

export { manifest };
