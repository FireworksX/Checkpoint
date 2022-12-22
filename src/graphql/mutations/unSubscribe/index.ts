import { serviceContainer } from '../../../services/ioc/serviceContainer'
import { updateCountersResolver } from './updateCountersResolver'
import {updateConnectionFlagsResolver} from "./updateConnectionFlagsResolver";
import {updateFollowersResolver} from "../updateFollowersResolver";

export default () => {
  const { on } = serviceContainer().getService('urqlCacheNotify')

  on('unSubscribe', updateCountersResolver)
  on('unSubscribe', updateConnectionFlagsResolver)
  on('unSubscribe', updateFollowersResolver)
}
