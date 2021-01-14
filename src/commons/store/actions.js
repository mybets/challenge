import axios from 'axios'
import {actionTypes} from '../constants'

const http = axios.create({
  baseURL: 'http://localhost:3333/'
})

export default {
  async [actionTypes.FIND_FEATURES](){
    const {data} = await http.get('features')
    return data
  }
}