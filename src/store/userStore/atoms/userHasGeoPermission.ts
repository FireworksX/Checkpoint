import {atom} from "recoil";
import {STORE_NAMES} from "../../../router/constants";

export const userHasGeoPermission = atom<boolean>({
    key: STORE_NAMES.userHasGeoPermission,
    default: false
})
