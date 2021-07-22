# React 学习记录

## 组件设计原则

> 一个组件只负责一个功能

## props

> Father.class.Component({name: string, age: number}) => `<Father name="str" age={18} />`
> Props.children: 类似 vue.slot 插槽  
> Props.attr: 属性传值，如，父组件传值给子组件，传递内容不限，如对象数据，数组，html，组件...,因此多插槽通过属性传递组件方式渲染在子组件
> Context{Provider, Consumer}数据广播: 处于 Provider 内的所有组件(包括其子组件，孙..)(使用: 引入顶级组件中创建的 Consumer，在其中获取到传递的数据)

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

## nginx

> 官网: 'http://nginx.org/en/download.html'
> 安装环境: yum -y install make zlib zlib-devel gcc gcc-c++ libtool openssl openssl-devel pcre pcre-devel
> 检查是否存在 nginx: find -name nginx  
> 卸载 nginx: yum remove nginx
> 下载 nginx 包: wget 'http://nginx.org/download/nginx-1.20.1.tar.gz' // 引号不用
> 解压 nginx 包: tar -zxvf nginx-1.20.1.tar.gz
> 进入解压目录: cd /usr/local
> 修改 nginx 文件名: mv nginx-1.20.1 nginx (为了访问方便，不改名无妨)
> 进入解压文件夹: cd nginx
> 设置 nginx 安装目录: ./configure || ./configure --prefix /usr/local/nginx (不设置 prefix，默认安装/usr/local/nginx)
> 编译并安装 nginx: make && make install
> 编辑环境变量: vim /etc/profile
> 添加环境变量: 此文件中最后位置添加(i:进入编辑状态 esc:退出编辑状态 shift+::显示指令控制台 wq:保存并退出编辑)
> export NGINX_HOME=/opt/nginx/nginx-1.20.1/  
> export PATH=$PATH:$NGINX_HOME/sbin
> 加载 profile 文件使配置生效: source /etc/profile
> 测试配置是否生效: nginx -v (nginx version: nginx/1.20.1) (未配置时: -bash: nginx: 未找到命令)
> 检测 nginx.conf 配置文件是否正常: nginx -t (logs/error.log no such file)
> 创建 logs 文件夹: mkdir logs
> 再次检测: nginx -t (...nginx.conf syntax is ok && ...nginx.conf test is successful)
> 配置快捷方式(systemctl): cd /usr/lib/systemd/system
> 创建 nginx.service 文件: touch nginx.service
> 设置 nginx.service 内容

```txt
[Unit]
Description=nginx - high performance web server
After=network.target remote-fs.target nss-lookup.target

[Service]
Type=forking
PIDFile=/usr/local/nginx/logs/nginx.pid
ExecStartPre=/usr/local/nginx/sbin/nginx -t -c /usr/local/nginx/conf/nginx.conf
ExecStart=/usr/local/nginx/sbin/nginx -c /usr/local/nginx/conf/nginx.conf
ExecReload=/usr/local/nginx/sbin/nginx -s reload
ExecStop=/usr/local/nginx/sbin/nginx -s stop
ExecQuit=/usr/local/nginx/sbin/nginx -s quit
PrivateTmp=true

[Install]
WantedBy=multi-user.target
```

> 重载 systemctl: systemctl daemon-reload
> systemctl 启动 nginx: systemctl start nginx
> 设置 nginx 开机启动: sudo chkconfig ngin (若防火墙关闭 || 防火墙设置了开放端口, 可以正常访问(建议开启防火墙))
> 防火墙设置: 'https://blog.csdn.net/qq_38071435/article/details/82312562'

```txt
systemctl status nginx      // 查看nginx状态
systemctl start nginx       // 启动nginx
systemctl stop nginx        // 停止nginx
systemctl restart nginx     // 重启nginx
```

> 查看 ssl 模块: cd /usr/local/nginx/sbin ./nginx -V  
> nginx 开启的模块(若已开启 ssl 模块存在 with-http_ssl_module): (configure arguments: --prefix=/usr/local/nginx --with-http_ssl_module)
> 重新编译 nginx: ./configure --prefix=/usr/local/nginx --with-http_stub_status_module --with-http_ssl_module --with-file-aio --with-http_realip_module (若错误: ./configure: error: SSL modules require the OpenSSL library, 重新安装 openssl 模块: yum -y install openssl openssl-devel,再./configure ...)
> 仅编译(不要 make install): make
> 备份原有的 nginx: cp /usr/local/nginx/sbin/nginx /usr/local/nginx/sbin/nginx.bak
> 覆盖老 nginx: cp objs/nginx /usr/local/nginx/sbin/nginx
