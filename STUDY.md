# React 学习记录

## props

> Father.class.Component({name: string, age: number}) => `<Father name="str" age={18} />`

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

## git

> github生成token: github.user => setting => Developer settings => Personal accesstokens => generate new token
> 切换远程分支(本地不存在): git checkout -b dev origin/dev
> 将token添加到远程仓库链接: git remote set-url origin https://<your_token>@github.com/<USERNAME>/<REPO>.git
