import path from 'path'

const NODE_ENV = process.env.NODE_ENV || 'development'

const NON_INDEX_REGEX = /^(?!.*[/\\](index)\.js).*\.(js|vue)$/.toString()

// __DEV__ || (NON_INDEX_REGEX = NON_INDEX_REGEX.replace('index', 'index|test'))

export const globals = {
  NODE_ENV,
  'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
  __DEV__: NODE_ENV === 'development',
  __TEST__: NODE_ENV === 'test',
  __PROD__: NODE_ENV === 'production',
  IMG_PATH_PREFIX: JSON.stringify('https://pic.made-in-china.com/'),
  NON_INDEX_REGEX
}

export const paths = (() => {
  const base = (...args) => path.resolve(__dirname, '../../', ...args)

  return {
    base,
    src: base.bind(null, 'src'),
    dist: base.bind(null, 'dist'),
    server: base.bind(null, 'server'),
    test: base.bind(null, 'test')
  }
})()

export const pkg = require(paths.base('package.json'))

export const alias = {
  vue: 'vue/dist/vue.common'
}

export const vendors = [
  'axios',
  'regenerator-runtime/runtime',
  'vue',
  'vue-router',
  'vuex'
]

const serverHost = process.env.HOST || 'local.1stg.me'
const serverPort = process.env.PORT || 3000

export default {
  serverHost,
  serverPort,
  devTool: 'source-map',
  publicPath: '',
  innerServer: `http://localhost:${serverPort}/`,
  hashType: 'hash',
  minimize: false,
  browsers: ['> 1% in CN'],
  quiet: false,
  stats: {
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  },
  globals
}
