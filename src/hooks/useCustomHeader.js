import { parseUrl } from '@/utils/shared';

export function useCustomHeader() {
  return {
    statusBarHeight: uni.getStorageSync('menuInfo').statusBarHeight, //状态栏的高度（可以设置为顶部导航条的padding-top）
    menuWidth: uni.getStorageSync('menuInfo').menuWidth,
    menuHeight: uni.getStorageSync('menuInfo').menuHeight,
    menuBorderRadius: uni.getStorageSync('menuInfo').menuBorderRadius,
    menuRight: uni.getStorageSync('menuInfo').menuRight,
    menuTop: uni.getStorageSync('menuInfo').menuTop,
    contentTop: uni.getStorageSync('menuInfo').contentTop,
  };
}
