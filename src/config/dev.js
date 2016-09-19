import baseConfig from './base'

let config = {
  appEnv: 'dev',
  api: 'http://localhost:5000'
}

export default Object.freeze(Object.assign({}, baseConfig, config))
