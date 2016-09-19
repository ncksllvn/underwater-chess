import baseConfig from './base'

let config = {
  appEnv: 'dist',
  api: 'http://api.underwaterchess.com'
}

export default Object.freeze(Object.assign({}, baseConfig, config))
