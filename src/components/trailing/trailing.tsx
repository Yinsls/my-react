interface TrailingObj {
  width?: number;
  height?: number;
  opacity?: number;
  x: number;
  y: number;
}

/** 拖尾动画 */
export default class Trailing {
  width = 3;
  height = 3;
  opacity = 1;
  x = 0;
  y = 0;
  ay = 0.3; // y轴加速度
  ax = 0.02; // x轴加速度
  ao = 0.04; // 渐隐速率
  speed = 1; // 初始速度
  time = 0; // 存在时间(毫秒)
  death = 100; // 死亡时间
  icon: HTMLElement; // icon元素
  constructor(opt: TrailingObj) {
    this.initOpt(opt);
    this.icon = this.createIcon();
    window.requestAnimationFrame(this.passed.bind(this));
  }

  /** 初始化拖尾信息 */
  initOpt(obj: any) {
    for (let key in obj) {
      if (!Reflect.has(this, key)) continue;
      Reflect.set(this, key, obj[key]);
    }
  }

  /** 获取随机颜色
   * @param opacity 初始化透明度
   */
  randomColor(opacity = 1) {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    return `rgba(${red}, ${green}, ${blue}, ${opacity})`;
  }

  /** 创建拖尾图标 */
  createIcon() {
    let color = this.randomColor();
    let body = document.querySelector("body");
    let icon = document.createElement("div");
    icon.setAttribute(
      "style",
      `width:${this.width}px; 
        height: ${this.height}px; 
        background: ${color};
        position: fixed;
        top: ${this.y}px;
        left: ${this.x}px;
      `
    );
    body && body.appendChild(icon);
    return icon;
  }

  /** 消逝 */
  passed() {
    this.speed += this.ay;
    this.y += this.speed;
    this.x++;
    this.opacity -= this.ao;
    this.icon.style.top = this.y + "px";
    this.icon.style.left = this.x + "px";
    this.icon.style.opacity = this.opacity + "";
    if (this.opacity > 0.1) {
      window.requestAnimationFrame(this.passed.bind(this));
    } else {
      document.querySelector("body")?.removeChild(this.icon);
    }
  }
}
