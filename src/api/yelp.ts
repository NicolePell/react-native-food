import axios from 'axios'

import config from '../../config'

export default axios.create({
  baseURL: config.YELP_API_URL,
  headers: {
    Authorization: `Bearer ${config.YELP_API_KEY}`,
  },
})
