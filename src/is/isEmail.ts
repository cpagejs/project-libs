const _domains = [
  "qq.com",
  "163.com",
  "126.com",
  "vip.126.com",
  "yeah.net",
  "vip.163.com",
  "188.com",
  "sohu.com",
  "sina.cn",
  "sina.com",
  "gmail.com",
  "hotmail.com",
  "outlook.com"
];

/**
 * 判断邮箱是否正确，可以自定义邮箱后缀
 * @param email {string} 邮箱
 * @param domains {array[string]} 域名 ["163.com"]
 * @returns {boolean} boolean
 * 默认支持的邮箱：[
  "qq.com",
  "163.com",
  "126.com",
  "vip.126.com",
  "yeah.net",
  "vip.163.com",
  "188.com",
  "sohu.com",
  "sina.cn",
  "sina.com",
  "gmail.com",
  "hotmail.com",
  "outlook.com"
]
 */
export default function isEmail(email: string, domains: string[] = _domains): boolean {
  if (domains && !Array.isArray(domains)) {
    console.error('project-libs（isEmail参数错误）：域名必须为数组');
  }
  const reg = new RegExp(`^([A-Za-z0-9\.\_\-])+\@(${domains.join("|")})$`);
  return reg.test(email);
}