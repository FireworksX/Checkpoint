import { serviceContainer } from '../../../services/ioc/serviceContainer'
import { updateCountersResolver } from './updateCountersResolver'
import {updateConnectionFlagsResolver} from "./updateConnectionFlagsResolver";
import {updateFollowersResolver} from "../updateFollowersResolver";

export default () => {
  const { on } = serviceContainer().getService('urqlCacheNotify')

  on('subscribe', updateCountersResolver)
  on('subscribe', updateConnectionFlagsResolver)
  on('subscribe', updateFollowersResolver)
}
