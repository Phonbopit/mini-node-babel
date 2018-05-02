Mini Node ES6
---

Setup Hapi v17 with Babel


## Usage

```bash
# Install dependencies
yarn

# Build dist folder (es6 => es5)
yarn build

# Start server with node
node dist/server.js

# with pm2
pm2 start dist/server.js
```