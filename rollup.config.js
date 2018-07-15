// import uglify from 'rollup-plugin-uglify'

//common config settings
const defaultConfig = {
  // entry: 'src/fetch-inject.js',a
  format: 'iife',
  plugins: []
}

//currently generated js files (switch to others as needed)
import { activeConfigs, baseProps  } from './lib/rollup/basic-es6/basic-es6-001.js';

activeConfigs.forEach(activeConfig => {
  Object.assign(activeConfig, defaultConfig)
  Object.assign(activeConfig, baseProps)
})

// more minified build
// const minifiedConfigs = activeConfigs.reduce(
//   (minifiedConfigs, activeConfig) => minifiedConfigs.concat(
//     Object.assign({}, activeConfig, {
//       plugins: [/* uglify({}), */ ...activeConfig.plugins],
//       dest: activeConfig.dest.replace('js', 'min.js')
//     })
//   ),
//   []
// )

export default activeConfigs
