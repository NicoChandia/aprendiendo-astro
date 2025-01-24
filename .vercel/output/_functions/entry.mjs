import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_D-aRPbRy.mjs';
import { manifest } from './manifest_D13AqrbG.mjs';

const serverIslandMap = new Map([
	['BookScore', () => import('./chunks/BookScore_CEG4nZ1o.mjs')],
	['BuyButton', () => import('./chunks/BuyButton_C2tVwlgT.mjs')],
]);;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/libro/_id_.astro.mjs');
const _page2 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/libro/[id].astro", _page1],
    ["src/pages/index.astro", _page2]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "31b2f6d4-18e8-4cc6-a1d8-53c01e16b457",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
