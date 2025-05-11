globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, m as maybeRenderHead, b as renderTemplate } from './astro/server_C14u9rZJ.mjs';
import { s as setOnSetGetEnv } from './runtime_CgJT6ISi.mjs';

/* eslint-disable @typescript-eslint/no-unused-vars */
// @ts-check

setOnSetGetEnv(() => {
	
});
const SCORE_API_ENDPOINT = "https://www.random.org/integers/?num=1&min=1&max=5&col=1&base=10&format=plain&rnd=new";

const $$BookScore = createComponent(async ($$result, $$props, $$slots) => {
  const res = await fetch(SCORE_API_ENDPOINT);
  const scoreValue = await res.text();
  return renderTemplate`${maybeRenderHead()}<span class="text-xs" id="score">⭐ Puntuación: ${scoreValue.trim()}/5</span>`;
}, "E:/Desarrollo web/Astro/dev-books/src/components/BookScore.astro", void 0);

const $$file = "E:/Desarrollo web/Astro/dev-books/src/components/BookScore.astro";
const $$url = undefined;

export { $$BookScore as default, $$file as file, $$url as url };
