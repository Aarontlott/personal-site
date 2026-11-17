// @ts-check
import { defineConfig } from 'astro/config';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  site: 'https://aaronlott.com',
  // Static output, zero client-side JavaScript. Keep it that way unless a page truly needs it.
  output: 'static',
});
