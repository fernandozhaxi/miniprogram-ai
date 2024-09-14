const TokenKey = 'token';
const OpenIdKey = 'openId';

export function setToken(token) {
	return uni.setStorageSync(TokenKey, token)
}

export function getToken() {
	return uni.getStorageSync(TokenKey)
}

export function removeToken() {
	return uni.removeStorageSync(TokenKey)
}

export function setOpenId(id) {
	return uni.setStorageSync(OpenIdKey, id)
}

export function getOpenId() {
	return uni.getStorageSync(OpenIdKey)
}

export function removeOpenId() {
	return uni.removeStorageSync(OpenIdKey)
}
