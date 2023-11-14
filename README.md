# Nuxt Inngest

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

[Inngest](https://inngest.com) integration for [Nuxt](https://nuxt.com).

- [✨ Release Notes](/CHANGELOG.md)

## Quick Setup

1. Add `nuxt-inngest` dependency to your project

```bash
# Using npm
npm install --save-dev nuxt-inngest

# Using pnpm
pnpm add -D nuxt-inngest

# Using yarn
yarn add --dev nuxt-inngest

# Using bun
bun add --D nuxt-inngest
```

2. Add `nuxt-inngest` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    'nuxt-inngest'
  ]
})
```

Add the following configuration to your `.env` file replacing the value in `< >` with your Inngest API key.

```ini
NUXT_INNGEST_EVENT_KEY="<your_inngest_event_key>"
```

That's it! You can now use Nuxt inngest in your Nuxt app ✨

## Development

```bash
# Install dependencies
pnpm install

# Generate type stubs
pnpm run dev:prepare

# Develop with the playground
pnpm run dev

# Build the playground
pnpm run dev:build

# Run checks
pnpm run check

# Run Vitest
pnpm run test
pnpm run test:watch

# Release new version
pnpm run release
```

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-inngest/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/nuxt-inngest

[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-inngest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/nuxt-inngest

[license-src]: https://img.shields.io/npm/l/nuxt-inngest.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/nuxt-inngest

[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
