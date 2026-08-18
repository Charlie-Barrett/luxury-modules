import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://luxurymodules.co.uk', // confirm after domain consolidation decision
  // 'always' rather than 'ignore': canonicals and the sitemap both emit the
  // trailing-slash form, and vercel.json sets "trailingSlash": true to match.
  // One convention, enforced in all three places, so no URL is reachable twice.
  trailingSlash: 'always',
  integrations: [sitemap()],
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});
