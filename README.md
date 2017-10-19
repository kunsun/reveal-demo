

静态资源和网页分开部署， 静态资源部署到CDN



前端是一种远程部署，运行时增量下载的GUI软件。
前端是一种技术问题较少、工程问题较多的软件开发领域。



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





生产环境：

  1. 抽离css文件
  2. 使用Uglify
  3. 输入需要部署的dist文件


Webpack模块化编程， 使用gulp一般会把css\js\html\image放在不同目录下



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





