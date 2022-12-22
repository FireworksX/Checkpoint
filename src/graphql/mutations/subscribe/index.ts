import { serviceContainer } from '../../../services/ioc/serviceContainer'
import { updateCountersResolver } from './updateCountersResolver'
import {updateListsResolver} from "./updateListsResolver";

export default () => {
  const { on } = serviceContainer().getService('urqlCacheNotify')

  on('subscribe', updateCountersResolver)
  on('subscribe', updateListsResolver)
}
