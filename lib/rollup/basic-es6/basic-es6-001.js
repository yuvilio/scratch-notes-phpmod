//past (inactive bundles). add to activeConfigs for rollup to generate them
let pastEntries = [
  {
    input: './assets/js/basic-es6/02/001-modules.js',
    output: {
      file: './dist/assets/js/basic-es6/02/001-modules.js',
      format: 'iife',
      name: 'basicEs6001Modules',
      sourcemap: true
    }
  },
  {
    input: './assets/js/basic-es6/01/003-literals.js',
    output: {
      file: './dist/assets/js/basic-es6/01/003-literals.js',
      format: 'iife',
      name: 'basicEs6003Literals',
      sourcemap: true
    }
  },
  {
    input: './assets/js/basic-es6/01/002-arrow.js',
    output: {
      file: './dist/assets/js/basic-es6/01/002-arrow.js',
      format: 'iife',
      name: 'basicEs6002Arrow',
      sourcemap: true
    }
  },
  {
    input: './assets/js/basic-es6/01/001-init.js',
    output: {
      file: './dist/assets/js/basic-es6/01/001-init.js',
      format: 'iife',
      name: 'basicEs6001Init',
      sourcemap: true
    }
  },
  {
    input: './assets/js/basic-es6/02/003-babel-intro.js',
    output: {
      file: './dist/assets/js/basic-es6/02/003-babel-intro.js',
      format: 'iife',
      name: 'basicEs6003BabelIntro',
      sourcemap: true
    }
  },
  {
    input: './assets/js/basic-es6/02/004-webpack-intro.js',
    output: {
      file: './dist/assets/js/basic-es6/02/004-webpack-intro.js',
      format: 'iife',
      name: 'basicEs6003BabelIntro',
      sourcemap: true
    }
  }
]

// overriding props for the rollup bundling
export let baseProps = { }

const activeConfigs = [
  {
    input: './assets/js/basic-es6/01/001-init.js',
    output: {
      file: './dist/assets/js/basic-es6/01/001-init.js',
      format: 'iife',
      name: 'basicEs6001Init',
      sourcemap: true
    }
  }
]
export { activeConfigs };
