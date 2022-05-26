import { useRequest } from 'src/hooks/useRequest'
import { apiEndpoints } from 'src/data/apiEndpoints'
import {City} from "src/interfaces/City";

export const useCityList = () => {
  const { data } = useRequest<City[]>(apiEndpoints.CITY_LIST)

  return {
    list: data?.data || []
  }
}
