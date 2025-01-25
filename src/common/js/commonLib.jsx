/**
 * 判断系统类型
 */
export function detectOS() {
  let sUserAgent = navigator.userAgent
  const platform = navigator?.userAgentData?.platform || navigator?.platform || 'unknown'
  let isWin = platform === 'Win32' || platform === 'Windows'
  if (isWin) return 'windows'
  let isMac =
    platform === 'macOS' ||
    platform === 'Mac68K' ||
    platform === 'MacPPC' ||
    platform === 'Macintosh' ||
    platform === 'MacIntel'
  if (isMac) return 'mac'
  let isUnix = platform === 'X11' && !isWin && !isMac
  if (isUnix) return 'unix'
  var isLinux = String(platform).indexOf('Linux') > -1

  var bIsAndroid = sUserAgent.toLowerCase().match(/android/i) === 'android'
  if (isLinux) {
    if (bIsAndroid) return 'android'
    else return 'linux'
  }
}
