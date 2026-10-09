# Little Lantern Press

Vue 3 single-page homepage built with Vite.

## Development

Install dependencies with `npm install`, then start the local server with `npm run dev`.
Run `npm run build` to create a production build in `dist/`.

## Deploy to GitHub Pages

The repository is configured to deploy automatically from the `main` branch using GitHub Actions.

1. Push this project to `https://github.com/david-lapc/test`.
2. In the repository, open **Settings → Pages** and choose **GitHub Actions** as the build and deployment source.
3. Open **Actions** and wait for the **Deploy to GitHub Pages** workflow to finish.
4. Visit `https://david-lapc.github.io/test/`.

The Vite base path is read from `GITHUB_REPOSITORY` during the Actions build, so project assets resolve under the repository's Pages URL.

## Structure

- `src/App.vue` composes the homepage sections.
- `src/components/` contains the independently editable page components.
- `src/assets/styles.css` contains the shared, nested CSS styles.
- `src/main.js` mounts the Vue app and imports its stylesheet.