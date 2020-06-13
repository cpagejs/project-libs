/**
 * 判断是否为手机端
 * @returns {boolean} boolean
 */
export default function isMobile(): boolean {
  return /iphone|ipod|android.*mobile|windows.*phone|blackberry.*mobile/i.test(
    navigator.userAgent.toLowerCase()
  );
}