# Rokalin Website

## Scaffolding

Scaffolding command:

```sh
pnpm create astro@latest
```

Astro integrations that were added:

```sh
pnpm astro add tailwind
```

## Development

Prerequisite: [pnpm](https://pnpm.io/)

```sh
pnpm dev
pnpm preview
```

## Build

```sh
pnpm build
```

---

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
