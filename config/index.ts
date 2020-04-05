import development from './development'
import production from './production'

export type CONFIG = {
  IS_PRODUCTION: boolean
  YELP_API_URL: string
  YELP_API_KEY: string
}

const configs: { [env: string]: CONFIG } = {
  development,
  production,
}

export default configs[__DEV__ ? 'development' : 'production']
