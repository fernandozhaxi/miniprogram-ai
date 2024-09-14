/*
 * @Description: 字符创相关工具函数
 */
/**
 * 去除左右空格
 * @param {String} str 字符串
 * @returns String
 */
function trim(str) {
  return str.replace(/(^\s*)|(\s*$)/g, '')
}
/**
 * 去除全部空格
 * @param {String} str 字符串
 * @returns String
 */
function trimAll(str) {
  return str.replace(/\s+/g, '')
}
/**
 * 替换所有匹配字符
 * @param {String} str 字符串
 * @param {String} AFindText 要替换的字符
 * @param {String} ARepText 替换成的字符
 * @returns String
 */
function replaceAll(str, AFindText, ARepText) {
  return str.replace(new RegExp(AFindText, 'gm'), ARepText)
}

export { trim, trimAll, replaceAll }
