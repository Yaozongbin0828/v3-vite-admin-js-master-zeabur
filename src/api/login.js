/** 基于Promise获取登录数据*/
export function loginApi(data) {
    return new Promise((resolve, reject) => {
        resolve({
            token: 'test_token',
            /** 默认第一个角色*/
            roles: [0],
        })
    })
}

/** 基于Promise获取User信息数据*/
export function getUserInfoApi(data) {
    return new Promise((resolve, reject) => {
        resolve({
            username: "yaozongbin",
        })
    })
}