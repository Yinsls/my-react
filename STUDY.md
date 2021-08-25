# React 学习记录

## 组件设计原则

> 一个组件只负责一个功能

## 自动格式化

> eslintrc.js

```javascript
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2020,
    sourceType: "module",
    jsxPragma: "React",
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
  },
  extends: [
    "plugin:vue/vue3-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:prettier/recommended",
  ],
  rules: {
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-empty-function": "off",
    "vue/custom-event-name-casing": "off",
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^h$",
        varsIgnorePattern: "^h$",
      },
    ],
    "no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^h$",
        varsIgnorePattern: "^h$",
      },
    ],
    "space-before-function-paren": "off",

    "vue/attributes-order": "off",
    "vue/one-component-per-file": "off",
    "vue/html-closing-bracket-newline": "off",
    "vue/max-attributes-per-line": "off",
    "vue/multiline-html-element-content-newline": "off",
    "vue/singleline-html-element-content-newline": "off",
    "vue/attribute-hyphenation": "off",
    // 'vue/html-self-closing': 'off',
    "vue/require-default-prop": "off",
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "always",
          normal: "never",
          component: "always",
        },
        svg: "always",
        math: "always",
      },
    ],
  },
};
```

> tsconfig.json

```javascript
{
  "compilerOptions": {
    /* Visit https://aka.ms/tsconfig.json to read more about this file */

    /* Basic Options */
    // "incremental": true,                         /* Enable incremental compilation */
    "target": "es5",                                /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */
    "module": "esnext",                           /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */
    // "lib": [],                                   /* Specify library files to be included in the compilation. */
    // "allowJs": true,                             /* Allow javascript files to be compiled. */
    // "checkJs": true,                             /* Report errors in .js files. */
    // "jsx": "preserve",                           /* Specify JSX code generation: 'preserve', 'react-native', 'react', 'react-jsx' or 'react-jsxdev'. */
    // "declaration": true,                         /* Generates corresponding '.d.ts' file. */
    // "declarationMap": true,                      /* Generates a sourcemap for each corresponding '.d.ts' file. */
    // "sourceMap": true,                           /* Generates corresponding '.map' file. */
    // "outFile": "./",                             /* Concatenate and emit output to single file. */
    // "outDir": "./",                              /* Redirect output structure to the directory. */
    // "rootDir": "./",                             /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */
    // "composite": true,                           /* Enable project compilation */
    // "tsBuildInfoFile": "./",                     /* Specify file to store incremental compilation information */
    // "removeComments": true,                      /* Do not emit comments to output. */
    // "noEmit": true,                              /* Do not emit outputs. */
    // "importHelpers": true,                       /* Import emit helpers from 'tslib'. */
    // "downlevelIteration": true,                  /* Provide full support for iterables in 'for-of', spread, and destructuring when targeting 'ES5' or 'ES3'. */
    // "isolatedModules": true,                     /* Transpile each file as a separate module (similar to 'ts.transpileModule'). */

    /* Strict Type-Checking Options */
    "strict": true,                                 /* Enable all strict type-checking options. */
    // "noImplicitAny": true,                       /* Raise error on expressions and declarations with an implied 'any' type. */
    // "strictNullChecks": true,                    /* Enable strict null checks. */
    // "strictFunctionTypes": true,                 /* Enable strict checking of function types. */
    // "strictBindCallApply": true,                 /* Enable strict 'bind', 'call', and 'apply' methods on functions. */
    // "strictPropertyInitialization": true,        /* Enable strict checking of property initialization in classes. */
    // "noImplicitThis": true,                      /* Raise error on 'this' expressions with an implied 'any' type. */
    // "alwaysStrict": true,                        /* Parse in strict mode and emit "use strict" for each source file. */

    /* Additional Checks */
    // "noUnusedLocals": true,                      /* Report errors on unused locals. */
    // "noUnusedParameters": true,                  /* Report errors on unused parameters. */
    // "noImplicitReturns": true,                   /* Report error when not all code paths in function return a value. */
    // "noFallthroughCasesInSwitch": true,          /* Report errors for fallthrough cases in switch statement. */
    // "noUncheckedIndexedAccess": true,            /* Include 'undefined' in index signature results */
    // "noPropertyAccessFromIndexSignature": true,  /* Require undeclared properties from index signatures to use element accesses. */

    /* Module Resolution Options */
    "moduleResolution": "node",                  /* Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6). */
    "baseUrl": ".",                             /* Base directory to resolve non-absolute module names. */
    "paths": {
      "/@/*": ["src/*"],
    },                                 /* A series of entries which re-map imports to lookup locations relative to the 'baseUrl'. */
    // "rootDirs": [],                              /* List of root folders whose combined content represents the structure of the project at runtime. */
    // "typeRoots": [],                             /* List of folders to include type definitions from. */
    "types": ["vite/client"],                              /* Type declaration files to be included in compilation. */
    // "allowSyntheticDefaultImports": true,        /* Allow default imports from modules with no default export. This does not affect code emit, just typechecking. */
    "esModuleInterop": true,                        /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */
    // "preserveSymlinks": true,                    /* Do not resolve the real path of symlinks. */
    // "allowUmdGlobalAccess": true,                /* Allow accessing UMD globals from modules. */

    /* Source Map Options */
    // "sourceRoot": "",                            /* Specify the location where debugger should locate TypeScript files instead of source locations. */
    // "mapRoot": "",                               /* Specify the location where debugger should locate map files instead of generated locations. */
    // "inlineSourceMap": true,                     /* Emit a single file with source maps instead of having a separate file. */
    // "inlineSources": true,                       /* Emit the source alongside the sourcemaps within a single file; requires '--inlineSourceMap' or '--sourceMap' to be set. */

    /* Experimental Options */
    "experimentalDecorators": true,              /* Enables experimental support for ES7 decorators. */
    // "emitDecoratorMetadata": true,               /* Enables experimental support for emitting type metadata for decorators. */

    /* Advanced Options */
    "skipLibCheck": true,                           /* Skip type checking of declaration files. */
    "forceConsistentCasingInFileNames": true        /* Disallow inconsistently-cased references to the same file. */
  }
}

```

> prettier.config.js

```javascript
module.exports = {
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  vueIndentScriptAndStyle: true,
  singleQuote: true,
  quoteProps: "as-needed",
  bracketSpacing: true,
  trailingComma: "es5",
  jsxBracketSameLine: false,
  jsxSingleQuote: false,
  arrowParens: "always",
  insertPragma: false,
  requirePragma: false,
  proseWrap: "never",
  htmlWhitespaceSensitivity: "strict",
  endOfLine: "lf",
  rangeStart: 0,
};
```

> stylelint.config.js

```javascript
module.exports = {
  root: true,
  plugins: ["stylelint-order"],
  extends: ["stylelint-config-standard", "stylelint-config-prettier"],
  rules: {
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: ["global"],
      },
    ],
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["function", "if", "each", "include", "mixin"],
      },
    ],
    "no-empty-source": null,
    "named-grid-areas-no-invalid": null,
    "unicode-bom": "never",
    "no-descending-specificity": null,
    "font-family-no-missing-generic-family-keyword": null,
    "declaration-colon-space-after": "always-single-line",
    "declaration-colon-space-before": "never",
    "rule-empty-line-before": [
      "always",
      {
        ignore: ["after-comment", "first-nested"],
      },
    ],
    "unit-no-unknown": [true, { ignoreUnits: ["rpx"] }],
    // Specify the alphabetical order of the attributes in the declaration block
    "order/properties-order": [
      "position",
      "top",
      "right",
      "bottom",
      "left",
      "z-index",
      "display",
      "float",
      "width",
      "height",
      "max-width",
      "max-height",
      "min-width",
      "min-height",
      "padding",
      "padding-top",
      "padding-right",
      "padding-bottom",
      "padding-left",
      "margin",
      "margin-top",
      "margin-right",
      "margin-bottom",
      "margin-left",
      "margin-collapse",
      "margin-top-collapse",
      "margin-right-collapse",
      "margin-bottom-collapse",
      "margin-left-collapse",
      "overflow",
      "overflow-x",
      "overflow-y",
      "clip",
      "clear",
      "font",
      "font-family",
      "font-size",
      "font-smoothing",
      "osx-font-smoothing",
      "font-style",
      "font-weight",
      "hyphens",
      "src",
      "line-height",
      "letter-spacing",
      "word-spacing",
      "color",
      "text-align",
      "text-decoration",
      "text-indent",
      "text-overflow",
      "text-rendering",
      "text-size-adjust",
      "text-shadow",
      "text-transform",
      "word-break",
      "word-wrap",
      "white-space",
      "vertical-align",
      "list-style",
      "list-style-type",
      "list-style-position",
      "list-style-image",
      "pointer-events",
      "cursor",
      "background",
      "background-attachment",
      "background-color",
      "background-image",
      "background-position",
      "background-repeat",
      "background-size",
      "border",
      "border-collapse",
      "border-top",
      "border-right",
      "border-bottom",
      "border-left",
      "border-color",
      "border-image",
      "border-top-color",
      "border-right-color",
      "border-bottom-color",
      "border-left-color",
      "border-spacing",
      "border-style",
      "border-top-style",
      "border-right-style",
      "border-bottom-style",
      "border-left-style",
      "border-width",
      "border-top-width",
      "border-right-width",
      "border-bottom-width",
      "border-left-width",
      "border-radius",
      "border-top-right-radius",
      "border-bottom-right-radius",
      "border-bottom-left-radius",
      "border-top-left-radius",
      "border-radius-topright",
      "border-radius-bottomright",
      "border-radius-bottomleft",
      "border-radius-topleft",
      "content",
      "quotes",
      "outline",
      "outline-offset",
      "opacity",
      "filter",
      "visibility",
      "size",
      "zoom",
      "transform",
      "box-align",
      "box-flex",
      "box-orient",
      "box-pack",
      "box-shadow",
      "box-sizing",
      "table-layout",
      "animation",
      "animation-delay",
      "animation-duration",
      "animation-iteration-count",
      "animation-name",
      "animation-play-state",
      "animation-timing-function",
      "animation-fill-mode",
      "transition",
      "transition-delay",
      "transition-duration",
      "transition-property",
      "transition-timing-function",
      "background-clip",
      "backface-visibility",
      "resize",
      "appearance",
      "user-select",
      "interpolation-mode",
      "direction",
      "marks",
      "page",
      "set-link-source",
      "unicode-bidi",
      "speak",
    ],
  },
  ignoreFiles: ["**/*.js", "**/*.jsx", "**/*.tsx", "**/*.ts"],
};
```

---

> typescript 提供及校验 ts 规则(tsconfig)

---

> prettier + stylelint: 'https://www.cnblogs.com/1041258672ai1207/p/14620447.html'

> stylelint css 样式检测，为下列提供基础

> stylelint-config-standard 一些常见的 css 书写规范

> stylelint-config-prettier 关闭所有不必要的或者有可能与 Prettier 冲突

> stylelint-order 提供给 css 属性排序的功能

> stylelint-config-rational-order 一套常见的 css 书写顺序

> prettier 格式化

> pretty-quick 提交即格式化 (在提交 commit 时自动调用 pretter 进行格式化)

## props

> Father.class.Component({name: string, age: number}) => `<Father name="str" age={18} />`

> Props.children: 类似 vue.slot 插槽

> Props.attr: 属性传值，如，父组件传值给子组件，传递内容不限，如对象数据，数组，html，组件...,因此多插槽通过属性传递组件方式渲染在子组件 Context{Provider, Consumer}数据广播: 处于 Provider 内的所有组件(包括其子组件，孙..)(使用: 引入顶级组件中创建的 Consumer，在其中获取到传递的数据)

## Router

> Router.Route<path="/xxx" component={Component} /> point: '/' http:localhost:3000/xx

## 生命周期

> componentDidMount: 元素渲染完成

> componentWillUnmount: 元素即将移除

> shouldComponentUpdate: 页面视图更新(返回 true 表示更新视图，否则不更新视图)

> React.PureComponent: 监听组件中的属性对象是否变化而自动决定是否更新视图，当对象为数组时，直接 push 或 delete 无效，因数组还是同一个，可使用 arr.concat([])或[...arr]生成新数组再 setState 赋值

## react 使用

> ReactDom.createPortal(childDom, targetDom): 将 child 元素渲染到 targetDom 中，如父元素 hidden 时，其中子元素依旧显示

> Profiler: 检测 react 组件更新渲染时间 : `<Profiler id="testId" onRender={callback}> <Child /> </Profiler>`

## Hooks

useState:

```javascript
  // 快捷创建state对象与更新state函数(同setState)
  // useState未关联创建的state，根据state的顺序判断state内容
  基础用法:
  const [obj, setObj] = useState({ name: "张三" });
  setObj({ name: "李四" });

  验证hooks.state根据执行useState执行顺序识别:
  export default function Test() {
    const [rendLength, setRenderLength] = useState(true);
    function renderState() {
      console.log(useState(0)[0]);
      if (rendLength) {
        console.log(useState("red")[0]);
      }
      console.log(useState("张三")[0]);
    }
    renderState();

    function changeTime() {
      setRenderLength(!rendLength);
    }

    return (
      <>
        <h1>test Hooks</h1>
        rendLength: {JSON.stringify(rendLength)} <br />
        <button onClick={changeTime}>change</button>
      </br>
    );
  }
  首次时输出: 0 red 张三    (此时rendLength === true, 进入判断执行并执行useState("red")[0])
  第二次输出: 0 red
  (此时rendLength === false, 进入判断执行并执行useState("张三")[0], 但输出依旧为useState("red")[0]内容，
  由此可见，hooks.state根据执行useState执行顺序识别 (由于此时只创建了执行了两个useState，与原先的useState(3个)不匹配，产生报错))
```

useEffect:

```javascript
  函数意义: 类似componentDidMount、componentDidUpdate、componentWillUnmount的组合，初次渲染、视图更新和组件卸载时都将执行
  基础用法:
    export default function Test() {
    const [rendLength, setRenderLength] = useState(true);

    function changeTime() {
      setRenderLength(rendLength);
    }

    useEffect(() => {
      console.log("new render");
    });

    return (
      <>
        <h1>test Hooks</h1>
        run time: {JSON.stringify(rendLength)}
        <button onClick={changeTime}>change</button>
      </>
    );
  }

  // 重点:
  const arr = [];
  useEffect(() => {
    todo(),
    return () => {
      next();
    }
  }, arr)
  // 当useEffect中return function的闭包时，首次运行时只执行todo函数，闭包不运行，接下来都会先执行闭包函数再执行todo函数
  // 初次之后虽然先执行闭包再执行todo函数，但此为同步运行，不产生等待效果，需要注意
  // test为useEffect是否运行的'条件'，当不存在此参数时(默认),初次渲染、视图更新和组件卸载时都执行
  // 当test数组时，初次渲染(创建数组)、组件卸载(删除数组)被监听到，所以执行，视图更新不执行(数组索引不变化，因此不被监听到)
```

## State

> 可尝试 ImmutableJS 框架结合使用 state.xx 元素不可直接修改，采用 setState({name: 'newVal'})方式，否则可能导致页面未同步渲染 state

> 对象数组: 1、采用中间层对象存储: state.list = [1,2,3] replaceList = [1,2,3,4] setState({list: replaceList}) state

> 对象数组: 2、结构重构对象: state.list = [1,2,3] setState({list: [...state.list, ...[4]]})

## class

```javascript
  1、render中调用class.function需要在constractor中bind(this), 否则this可能不存在
  2、也可使用箭头函数方式设置class.function: handleClick = () => {...done}    button.onClick={this.handleClick}
  3、调用处使用箭头函数: button.onClick={() => this.handleClick()}    可能造成组件额外渲染浪费性能，推荐前两种方式
```

## html 元素边距

> scrollHeight: 全部高度 scrollTop: 滚动距离(滚动条距离顶部的长度) (没有滚动功能的元素为 0)

> clientHeight: 视图窗口高度(不包含边框、内边距) offsetHeight: 元素可视高度(包含边框、内边距)

## redux

```typescript
  action: 触发器
  reducers: 修改器
  state: 数据源

  运用: dispatch(action)   action => reduces() => set state|get state
```

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

> 再次查看是否开启--with-http_ssl_module: nginx -V

> 上传证书：cd /usr/local/nginx

> 创建文件夹存放证书: mkdir cenr

> 上传证书(此处我采用的 xftp 拖拽上传证书: xxx.ctr 和 xxx.key 文件，后续 nginx.conf 配置中需要使用)

> 配置证书: vi /usr/local/nginx/conf/nginx.conf

```txt
#user  nobody;
worker_processes  1;

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;

#pid        logs/nginx.pid;


events {
    worker_connections  1024;
}


http {
    include       mime.types;
    default_type  application/octet-stream;

    #log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
    #                  '$status $body_bytes_sent "$http_referer" '
    #                  '"$http_user_agent" "$http_x_forwarded_for"';

    #access_log  logs/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    #keepalive_timeout  0;
    keepalive_timeout  65;

    #gzip  on;

    # 配置http, 下方配置https,两者分开配置，各自作用
    server {
        listen       80;
        server_name  yinsls.cn www.yinsls.cn;

        #charset koi8-r;

        #access_log  logs/host.access.log  main;

        location / {
            root   html;
            index  index.html index.htm;
        }

        location /yun {
            alias /usr/local/nginx/html/project/build/;
            index index.html;
        }

        location /images {
            alias /usr/local/nginx/images/;
            autoindex on;
        }

        #error_page  404              /404.html;

        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }

        # proxy the PHP scripts to Apache listening on 127.0.0.1:80
        #
        #location ~ \.php$ {
        #    proxy_pass   http://127.0.0.1;
        #}

        # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
        #
        #location ~ \.php$ {
        #    root           html;
        #    fastcgi_pass   127.0.0.1:9000;
        #    fastcgi_index  index.php;
        #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
        #    include        fastcgi_params;
        #}

        # deny access to .htaccess files, if Apache's document root
        # concurs with nginx's one
        #
        #location ~ /\.ht {
    }


    # another virtual host using mix of IP-, name-, and port-based configuration
    #
    #server {
    #    listen       8000;
    #    listen       somename:8080;
    #    server_name  somename  alias  another.alias;

    #    location / {
    #        root   html;
    #        index  index.html index.htm;
    #    }
    #}


    # HTTPS server
    # 配置https
    server {
        listen       443 ssl;
        server_name  yinsls.cn www.yinsls.cn;

        # 分别为证书的pem和key
        ssl_certificate      /usr/local/nginx/cert/yinsls.crt;
        ssl_certificate_key  /usr/local/nginx/cert/yinsls.key;

        ssl_session_cache    shared:SSL:1m;
        ssl_session_timeout  5m;

        ssl_ciphers  ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
        ssl_prefer_server_ciphers  on;

    #   location / {
    #       root  html;
    #       index  index.html index.htm;
    #    }

        location / {
            alias /usr/local/nginx/html/project/build/;
            index index.html;
        }
    }

}
```

> 配置完毕 nginx.conf 后保存退出并重载: nginx -s reload systemctl restart nginx

## git

> github 生成 token: github.user => setting => Developer settings => Personal accesstokens => generate new token

> 切换远程分支(本地不存在): git checkout -b dev origin/dev

> 将 token 添加到远程仓库链接: `git remote set-url origin https://<your_token>@github.com/<USERNAME>/<REPO>.git`

### git 代理

socks 代理

> git config --global http.proxy 'socks5://127.0.0.1:1080'

> git config --global https.proxy 'socks5://127.0.0.1:1080'

http/https 代理

> git config --global http.proxy 'http://127.0.0.1:8080'

> git config --global https.proxy 'http://127.0.0.1:8080'

取消代理

> git config --global --unset http.proxy

> git config --global --unset https.proxy
