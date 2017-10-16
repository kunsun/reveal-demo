前端是一种远程部署，运行时增量下载的GUI软件

静态资源和网页分开部署， 静态资源部署到CDN

模块化的开发体系

压缩、校验、简单的资源合并、JS/CSS模块化开发



前端是一种技术问题较少、工程问题较多的软件开发领域
  * Facebook整站有10000+个静态资源；
  * 每个静态资源都有可能被翻译成超过100种语言版本；
  * 每种资源又会针对浏览器生成3种不同的版本；
  * 要针对不同带宽的用户做5种不同的打包方法；
  * 有3、4个不同的用户组，用于小批次体验新的产品功能；
  * 还要考虑不同的送达方法，可以直接送达，或者通过iframe的方式提升资源并行加载的速度；
  * 静态资源的压缩和非压缩状态可切换，用于调试和定位线上问题




工程问题：
  1. 大体量： 多功能、多页面、多状态、多系统
  2. 大规模： 多人合作开发
  3. 高性能： CDN部署、缓存机制、按需加载、请求合并、文件打包



做好两件事就能大幅提升前端开发效率：
  1. 组件化开发   
  2. 资源管理    本地接线上api，优化部署



前端开发的流程：

  1. 框架和库的选择
  2. 简单构建优化+JS/CSS模块化开发（requirejs  es6  sass less）
  3. 更加需要组件化开发（框架自带）和资源管理（npm）



如何选型技术、如何定制规范、如何分治系统、如何优化性能、如何加载资源 ->前端工程师

前端模块化：

  1. 模块管理
  2. 资源加载




webpack的入口文件怎么配置，多个入口怎么分割啥的，我也没太听清楚。
我看到你的项目用到了Babel的一个插件：transform-runtime以及stage-2，你说一下他们的作用。
我看到你的webpack配置用到webpack.optimize.UglifyJsPlugin这个插件，有没有觉得压缩速度很慢，有什么办法提升速度。
有没有自己写过webpack的loader,他的原理以及啥的，记得也不太清楚。

有没有去研究webpack的一些原理和机制，怎么实现的。

webpack的四个核心概念：

  1. entry
  2. output
  3. loaders
  4. plugins


webpack treats every file as a module, 但是，webpack itself only understands javascript

loaders的两个意图：

  1. 定义loader转换的文件  test
  2. 定义loader的使用 use


plugins:
因为plugins可以携带不同的参数和配置，所以需要使用new 来新建一个实例。


开发环境：

  1. 模块热更新
  2. API proxy代理
  3. 输出sourceMap


生产环境：

  1. 抽离css文件
  2. 使用Uglify
  3. 输入需要部署的dist文件


Webpack模块化编程， 使用gulp一般会把css\js\html\image放在不同目录下



文件的打包离不开模块化
前端打包方案的演变：

  1. 文件合并，压缩，使用shell脚本、bat + uglifyjs
  2. 





webpack进阶配置：

  * 指定静态资源的url路径前缀
  * 各个页面分开打包
  * 打包时区分开发环境和生产环境
  * 输出的entry文件加上hash
  * 第三方库和业务代码分开打包
  * 开发环境关闭performance.hints
  * 配置favicon
  * 开发环境允许其他电脑访问
  * 打包时自定义部分参数
  * webpack-dev-server处理带后缀名的文件的特殊规则
  * 代码中插入环境变量
  * 简化import路径
  * 优化babel编译后的代码性能
  * 使用webpack 2自带的ES6模块处理功能
  * 使用autoprefixer自动创建css的vendor prefixes
  * * 编译前清空dist目录
  * 那么, 让我们在上面的配置的基础上继续完善, 下面的代码我们只写出改变的部分. 代码在examples/advanced目录.



参考：
https://zhuanlan.zhihu.com/p/27046322










