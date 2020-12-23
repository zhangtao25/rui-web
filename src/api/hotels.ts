// https://us.trip.com/flights/graphql/poiSearch

import { axios } from '../utils/request'

const gaHotelSearchEngineAPI =
    'https://us.trip.com/restapi/soa2/16709/json/gaHotelSearchEngine'

const gaHotelSearchEngine = (params: any) =>
    axios.post(gaHotelSearchEngineAPI, params)

export default {
    gaHotelSearchEngine,
}
