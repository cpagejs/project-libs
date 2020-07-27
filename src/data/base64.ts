class Base64 {
  /**
   * 字符串转 base64
   * @param str {string} 字符串
   * @returns {string} 字符串
   * @summary btoa() 方法不支持 IE9 及更早的 IE 版本
   */
  static encode(str: string): string{
    const code = encodeURI(str);
    return btoa(code);
  }

  /**
   * base64 转字符串
   * @param str {string} 字符串
   * @returns {string} 字符串
   * @summary atob() 方法不支持 IE9 及更早的 IE 版本
   */
  static decode(str: string): string{
    const code = atob(str);
    return decodeURI(code);
  }
}

const base64 = new Base64();
export default base64;