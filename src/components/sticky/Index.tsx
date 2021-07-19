import { HTMLAttributes } from "react";
import { Table } from "antd";

/**
 * @param props
 * @description 设置元素滚动置顶
 * @scene 页面滚动，fixed置顶 || 滚动条滚动，局部置顶
 * @error 元素本身不参与滚动，只是元素外壳元素执行滚动事件，所以事件绑定目标元素无效？
 * @gone  当页面滚动至窗口顶端，保持固定，当滚动下来后，恢复正常文档流排布
 */
export default function setSticky(e: any, callback: Function) {
  // getTargetElement();
  console.log("元素: ", e);
  callback && callback();
}

// 获取元素信息
function isFixed(e: any): boolean {
  const scrollTop = e.target.scrollTop;
  const offsetTop = e.target.offsetTop;
  console.log(scrollTop + offsetTop);
  return false;
}

// 绑定元素滚动
function handleScroll() {}
