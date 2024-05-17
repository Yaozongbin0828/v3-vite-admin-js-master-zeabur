/** 统一处理 Cookie */

import CacheKey from "@/constants/cacheKey"
import Cookies from "js-cookie"

/** 用于获取用户的 token*/
export const getToken = () => {
    return Cookies.get(CacheKey.TOKEN)
}

/** 用于设置用户的 token*/
export const setToken = (token) => {
    Cookies.set(CacheKey.TOKEN, token)
}

/** 用于移除用户的 token*/
export const removeToken = () => {
    Cookies.remove(CacheKey.TOKEN)
}
