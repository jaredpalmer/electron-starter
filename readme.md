# framer-electron

**Quickly prototype native desktop apps using Framer.js and Electron**

## To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://github.com/jaredpalmer/framer-electron
# Go into the repository
cd framer-electron
# Install dependencies and run the app
npm install && npm start
```

### Already built your whole app Framer Studio?

Checkout [framer-electron-preview](https://github.com/jaredpalmer/framer-electron-preview)

## What's Electron?

[Electron]() is a framework that allows developers to build cross platform desktop apps with JavaScript, HTML, and CSS. Since Framer.js is ultimately just javascript, running it inside of Electron is pretty straightforward.

- `package.json` - Points to the app's main file and lists its details and dependencies.
- `main.js` - Starts the app and creates a browser window to render HTML. This is the app's **main process**.
- `index.html` - A web page to render. This is the app's **renderer process**.
- `app.coffee` - Your Framer.js app

Instead of going back and forth between Framer Studio and your text editor, this project comes with livereload and sourcemaps thanks to **`webpack`** and **`webpack-dev-server`**. Additionally, you can use ES6 instead of coffeescript! To do this, rename `app.coffee` to `app.js` and also change [`./webpack.config.entry.main`](https://github.com/jaredpalmer/framer-electron/blob/master/webpack.config.js#L7) from `./app.coffee` to `./app.js`. You actually don't need to pick one or the other, both file types will load. However, I suggest keeping things consistent.

You can learn more about the Electron-specific components within the [Electron Quick Start Guide](http://electron.atom.io/docs/latest/tutorial/quick-start). You can also learn more about Electron and its API in the [documentation](http://electron.atom.io/docs/latest).
