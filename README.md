# Tallyo

Reconstructed from the uploaded codebase specification.

## Run

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

### Build note
The supplied source references two generated public assets (`public/og.png` and `public/textures/paper.png`), but those assets were not included in the uploaded codebase. Also, package installation could not be completed in this environment because the configured npm registry returned 404 for `@types/node@^20.16.11`. Therefore a production build could not be verified here.
