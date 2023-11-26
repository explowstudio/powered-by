# @explowstudio/powered-by

This library contains the "Powered by Explow" component, designed to be easily integrated into websites created by Explow Studio.

Currently, two official versions are available:

- html
- react

## Installation

```
npm install @explowstudio/powered-by
# or
yarn add @explowstudio/powered-by
# or
pnpm add @explowstudio/powered-by
```

## Usage

### Html

To use the HTML version, it's important to pay attention to the version of the package being imported in the script. The component is a custom element, so we need the HTML script in the same way it's assembled in the example:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script type="module" src="https://unpkg.com/@explowstudio/powered-by@0.1.4/dist/poweredByElement.js" defer></script>
</head>
<body>
  <powered-by></powered-by>
</body>
</html>
```
### React

```tsx
import { PoweredBy } from '@explowstudio/powered-by'

function Component() {
  return <PoweredBy />
}
```