# React 学习记录

## 组件设计原则

> 一个组件只负责一个功能

## props

> Father.class.Component({name: string, age: number}) => `<Father name="str" age={18} />`
> Props.children: 类似 vue.slot 插槽  
> Props.attr: 属性传值，如，父组件传值给子组件，传递内容不限，如对象数据，数组，html，组件...,因此多插槽通过属性传递组件方式渲染在子组件

## Router

> Router.Route<path="/xxx" component={Component} /> point: '/' http:localhost:3000/xx

## 生命周期

> componentDidMount: 元素渲染完成
> componentWillUnmount: 元素即将移除

## State

> 可尝试 ImmutableJS 框架结合使用
> state.xx 元素不可直接修改，采用 setState({name: 'newVal'})方式，否则可能导致页面未同步渲染
> state 对象数组: 1、采用中间层对象存储: state.list = [1,2,3] replaceList = [1,2,3,4] setState({list: replaceList})
> state 对象数组: 2、结构重构对象: state.list = [1,2,3] setState({list: [...state.list, ...[4]]})

## class

```javascript
  1、render中调用class.function需要在constractor中bind(this), 否则this可能不存在
  2、也可使用箭头函数方式设置class.function: handleClick = () => {...done}    button.onClick={this.handleClick}
  3、调用处使用箭头函数: button.onClick={() => this.handleClick()}    可能造成组件额外渲染浪费性能，推荐前两种方式
```

## html 元素边距

> scrollHeight: 全部高度
> scrollTop: 滚动距离(滚动条距离顶部的长度) (没有滚动功能的元素为 0)
> clientHeight: 视图窗口高度(不包含边框、内边距)
> offsetHeight: 元素可视高度(包含边框、内边距)
