import isJsonString from '../type/isJsonString';

interface CONFIG {
  hours?: number, // 过期时间，单位小时
  path?: string, // 路径
  domain?: string, // 域名
  secure?: boolean, // 安全策略
  httpOnly?: boolean, // 设置键值对是否可以被 js 访问
  sameSite?: 'strict' | 'Strict' | 'lax' | 'Lax' | 'none' | 'None', // 用来限制第三方 Cookie
};

/**
 * 操作 cookie
 */
const cookie = {
  /**
   * 判断cookie是否可用
   * @returns {boolean} boolean
   */
  support(): boolean {
    if (!(document.cookie || navigator.cookieEnabled)) return false;
    return true;
  },

  /**
   * 添加cookie
   * @param name {string} cookie 键
   * @param value {string | object} cookie 值
   * @param config {object} 可选配置项
   * ```
   * {
   *  hours: 过期时间，单位小时,
   *  path: 路径,
   *  domain: 域名,
   *  secure: 安全策略,
   *  httpOnly: 设置键值对是否可以被 js 访问,
   *  sameSite: 用来限制第三方 Cookie
   * } 
   * ```          
  */
  set(name: string, value: string | object, config?: CONFIG): void {
    if (!this.support()) {
      console.error('project-libs（Cookie方法不可用）：浏览器不支持Cookie，请检查相关设置');
      return;
    }

    let data = name + "=" + encodeURIComponent(JSON.stringify(value));

    if (config?.hours) {
      const d = new Date();
      d.setHours(d.getHours() + config?.hours);
      data += "; expires=" + d.toUTCString();
    }

    if (config?.path) {
      data += "; path=" + config.path;
    }

    if (config?.domain) {
      data += "; domain=" + config.domain;
    }

    if (config?.secure) {
      data += "; secure=" + config.secure;
    }

    if (config?.httpOnly) {
      data += "; httpOnly=" + config.httpOnly;
    }

    if (config?.sameSite) {
      data += "; sameSite=" + config.sameSite;
    }

    document.cookie = data;
  },

  /**
   * 查询 cookie
   * @param name {string} Cookie 的键；如果参数为空则获取所有的cookie
   * @returns {string | object | null} 有参数获取cookie后返回字符串，没有参数获取cookie返回json；获取不到则返回 null
  */
  get(name?: string): string | object | null {
    if (!this.support()) {
      console.error('project-libs（Cookie方法不可用）：浏览器不支持Cookie，请检查相关设置');
      return;
    }

    let cs = document.cookie,
      arr = [],
      obj: any = {};
    arr = cs.split(';');

    if (cs !== '') {
      for (let i = 0; i < arr.length; i++) {
        const a = arr[i].split('=');
        const key = a[0].trim();
        if (key !== '') {
          const val = decodeURIComponent(a[1]);
          obj[key] = isJsonString ? JSON.parse(val) : val;
        }
      }

      return name ? obj[name] : obj;
    } else {
      return null;
    }
  },

  /**
   * 删除 cookie
   * @param name Cookie 的键；如果参数为空，则清理所有的cookie
   * @param path 路径，默认为''
  */
  remove(name: string, path?: string): void {
    if (!this.support()) {
      console.error('project-libs（Cookie方法不可用）：浏览器不支持Cookie，请检查相关设置');
      return;
    }

    if (arguments.length === 0) {
      const all = this.get();
      Object.keys(all).forEach(item => {
        this.set(item, "", { hours: -1 });
      });
    } else {
      this.set(name, path || '', { "hours": -1 });
    }
  }
}

export default cookie;