# creative-theme-simple-blog

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

## Before Deploy

**The Route decide everything!**

If you want to change place to deploy, please notice:

- The routes in router/indes.js should change to corresponding url
- Change routes in components/Sidebar.vue
- Change routes in components/BlogList.vue

### Deploy to GitHub

> npm run build
> cd dist
> git init
> git add .
> git commit -m "deploy"
> git branch -M gh-pages
> git push -u <repo> gh-pages
