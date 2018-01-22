import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://vueaxios-3ae26.firebaseio.com'
})

instance.defaults.headers.common['testing'] = 'test works'

export default instance