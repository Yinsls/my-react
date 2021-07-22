import Trailing from './trailing';

/** 鼠标移动 */
export default class MouseMove {
  handleMove() {
    window.onmousemove = (e) => {
      let left = document.documentElement.scrollLeft || document.body.scrollLeft;
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      let x = e.clientX + left;
      let y = e.clientY + top;
      let pos = { x, y };
      new Trailing(pos);
    }
  }
}