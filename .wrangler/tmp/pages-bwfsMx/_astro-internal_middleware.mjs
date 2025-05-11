globalThis.process ??= {}; globalThis.process.env ??= {};
import './chunks/astro-designed-error-pages_DcEgzmYk.mjs';
import './chunks/astro/server_C14u9rZJ.mjs';
import { s as sequence } from './chunks/index_CYynmX7M.mjs';

const onRequest$1 = (context, next) => {
  if (context.isPrerendered) {
    context.locals.runtime ??= {
      env: process.env
    };
  }
  return next();
};

const onRequest = sequence(
	onRequest$1,
	
	
);

export { onRequest };
