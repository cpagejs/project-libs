/**
 * 创建 script 标签
 * @param url {string} src的地址
 */
export default function createScript(url: string): void {
  const head = document.getElementsByTagName('head')[0];
  const script = document.createElement("script");
  script.type = 'text/javascript';
  script.src = url;
  head.appendChild(script);
}