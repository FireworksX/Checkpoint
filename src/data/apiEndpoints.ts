export const apiEndpoints = {
  PLACES_CREATE: '/places/create',
  PLACES_USER: '/places/userPlaces',
  AUTH_PHONE_CODE_CREATE: '/auth/phoneValidation/create',
  AUTH_PHONE_CODE_CHECK: '/auth/phoneValidation/check',
  AUTH_REFRESH_TOKEN: '/auth/refresh-token',
  AUTH_LOGIN: '/auth/login',
  AUTH_REGISTER: '/auth/register',

  CURRENT_USER: '/users/profile',
  CURRENT_USER_UPDATE: '/users/profile/update',
  CURRENT_USER_SUBSCRIBE: '/users/profile/subscribe',
  CURRENT_USER_UNSUBSCRIBE: '/users/profile/unsubscribe',
  CURRENT_USER_CHECK_SUBSCRIBE: '/users/profile/checkSubscribe',
  USER_IS_REGISTER: '/users/check',
  USERS_DETAIL: '/users/detail',

  LOCATIONS_LIST: '/locations/list',
  LOCATIONS_CREATE: '/locations/create',
  LOCATIONS_DETAIL: '/locations/detail',
  LOCATIONS_REMOVE: '/locations/delete',

  CITY_LIST: '/cities/list',
  CITY_DETAIL: '/cities/detail',
  CITY_CREATE: '/cities/create',
  CITY_UPDATE: '/cities/update',
  CITY_DELETE: '/cities/delete',

  CATEGORIES_CREATE: '/categories/create',
  CATEGORIES_UPDATE: '/categories/update',
  CATEGORIES_REMOVE: '/categories/remove',

  LIKES_ADD: '/likes/add',
  LIKES_REMOVE: '/likes/remove',

  MEDIA_UPLOAD: '/media/upload'
}
