import Trailing from './trailing';

/** 鼠标移动 */
export default class MouseMove {
  handleMove() {
    window.onmousemove = (e) => {
      let pos = { x: e.x, y: e.y };
      new Trailing(pos);
    }
  }
}