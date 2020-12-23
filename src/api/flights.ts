// https://us.trip.com/flights/graphql/poiSearch

import { axios } from '../utils/request'

const poiSearchAPI = 'http://localhost:3030/flights/graphql/poiSearch'

const poiSearch = (params: any) => axios.post(poiSearchAPI, params)

export default {
    poiSearch,
}
