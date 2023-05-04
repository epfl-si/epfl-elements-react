EPFL-ELEMENT-REACT Library
======================

![](https://gitlab.epfl.ch/sti-it/epfl-sti-react-library/-/raw/master/testpage.png)

This repository contains a React Storybook UI Components library based on the EPFL Elements specification (https://epfl-si.github.io/elements/#/) that you can install and use on your own React projects. The original components were developed originally for the STI myKompas tool and generalized in the https://gitlab.epfl.ch/sti-it/epfl-sti-react-library/. Nevertheless the original library contained some fairly big dependencies (ie. plotly visualizations). The idea of this library is to make it as close as possible to the elements specification.

Please note this is just a subset of all the components available in EPFL Elements, but feel free to expand and contribute to this project! (see below.)


Requirements
------------

You need to have `react (> 16)` installed in your application in order to use this library. It has been successfully tested with `npm create vite` projects (javascript and typescript).


Explore
------------

The easiest way to explore the contents of this library is to browse the self documenting storybook available at: https://sti-nodejs.epfl.ch/epfl-elements-react-storybook/

If you want to explore this locally, you can clone this repository and run:

```
npm install
npm run storybook
```

This command will launch a storybook server running on localhost in the port `:6006` where you can check what components are available in the library and the documentation about how they can be imported an used.

```
info => Starting manager..
╭──────────────────────────────────────────────────────╮
│                                                      │
│   Storybook 7.0.8 for react-vite started             │
│   502 ms for manager and 6.13 s for preview          │
│                                                      │
│    Local:            http://localhost:6006/          │
│    On your network:  http://128.179.164.172:6006/    │
│                                                      │
╰──────────────────────────────────────────────────────╯
15:09:26 [vite] ✨ new dependencies optimized: @storybook/blocks
15:09:26 [vite] ✨ optimized dependencies changed. reloading
```

Install
------------

If you are happy with the contents of the library and you would like to use it in your project, you just need to install it as any other NPM dependency. Now, this library is not published in the public npm registry but rather on an internal one at `sti-nodejs.epfl.ch` maintained by STI-IT. This library (and all the other internal npm packages) are scoped under the `@epfl` namespace.

So the first step is to create an `.npmrc` (or `.yarnrc` file if you use yarn), where this pattern is defined: 


`.npmrc` example
```
@epfl:registry = https://sti-nodejs.epfl.ch/
registry = https://registry.npmjs.org/

```

`.yarnrc` example
```
"@epfl:registry" "https://sti-nodejs.epfl.ch/"
```

Once you create those files, you can install the library by simply issue an `npm install` (or `yarn add`):


```
npm install @epfl/epfl-elements-react
```

<i>Note: Don't forget the previous step. Without an .npmrc or .yarnrc file, the install process just won't work.</i>


Usage
-------

You can use this library importing any of its components as you would with any other react library. To create a similar page like the screenshot above, you can for example follow these steps:

1. Bootstrap a new react app using vite: `npm create vite`. (Fill your project name and select react with js or ts)

```

▶ npm create vite    
✔ Project name: … test-app
? Select a framework: › - Use arrow-keys. Return to submit.
    Vanilla
    Vue
❯   React
    Preact
    Lit
    Svelte
    Others

```

2. cd into this `test-app` directory.
3. type `echo @epfl:registry=https://sti-nodejs.epfl.ch > .npmrc`
4. perform and `npm install`
5. Install the library with the command described in the previous section: `npm install @epfl/epfl-elements-react`
6. Remove the `import './index.css` line from `main.jsx`
4. Edit the source of the code of the app and replace the contents of the `App.js` file with:

```js

import { Base } from '@epfl/epfl-elements-react'

function App() {
  return (
    <Base asideMenuItems={[]}>
      This is a test page
    </Base>
  );
}

export default App;

```

4. Run `npm run dev` and you should see your starter page with the Elements look and feel. Check the storybook to change the menus, breadcrumbs, etc


Contribute
-----------

If you find useful this library and you create a new component from the EPFL Elements specification that you consider it could be useful to incorporate into the library please fork this repository and follow this steps:

1. Do an `npm install` and `npm run storybook` to explore the existing components.
2. Add your new component under the `src/components` directory. (ie `src/components/Newcomponent/index.js`)
3. Add a new `stories` file to test and expose the component in the notebooks (ie. `src/stories/newcomponent.stories.js`). Please check the existing stories files to get an idea how it works
4. Create a pull request against the main repository and add (@convers) as reviewer.

License
-------

MIT

Author Information
------------------

Juan Convers (juan dot convers at epfl dot ch).