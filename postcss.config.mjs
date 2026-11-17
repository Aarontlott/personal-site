// @ts-check
/**
 * Expands the named breakpoints in src/styles/breakpoints.css,
 * so `@media (--sm-down)` becomes `@media (max-width: 40rem)`.
 *
 * A few lines here instead of the postcss-custom-media package:
 * it also works inside Astro component <style> blocks, and there's
 * nothing extra to install. Vite runs this file automatically.
 */
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const BREAKPOINTS_FILE = fileURLToPath(new URL('./src/styles/breakpoints.css', import.meta.url));

/** @returns {Record<string, string>} e.g. { '--sm-down': '(max-width: 40rem)' } */
function readBreakpoints() {
  const css = readFileSync(BREAKPOINTS_FILE, 'utf8').replace(/\/\*[\s\S]*?\*\//g, '');
  /** @type {Record<string, string>} */
  const map = {};
  for (const [, name, query] of css.matchAll(/@custom-media\s+(--[\w-]+)\s+([^;]+);/g)) {
    map[name] = query.trim();
  }
  return map;
}

/** @type {import('postcss').PluginCreator<void>} */
const namedBreakpoints = () => ({
  postcssPlugin: 'named-breakpoints',
  Once(root, { result }) {
    const breakpoints = readBreakpoints();
    root.walkAtRules('custom-media', (rule) => rule.remove());
    root.walkAtRules('media', (rule) => {
      rule.params = rule.params.replace(/\((--[\w-]+)\)/g, (match, name) => {
        if (breakpoints[name]) return breakpoints[name];
        rule.warn(result, `Unknown breakpoint "${name}". Add it to src/styles/breakpoints.css.`);
        return match;
      });
    });
  },
});
namedBreakpoints.postcss = true;

export default {
  plugins: [namedBreakpoints()],
};
