import { CONFIG } from './index'
import env from '../envs/development'

const Configuration: CONFIG = {
  IS_PRODUCTION: true,
  YELP_API_URL: env.YELP_API_URL,
  YELP_API_KEY: env.YELP_API_KEY,
}

export default Configuration
