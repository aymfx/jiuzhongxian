# 项目介绍
> 这是一个电商项目，工作之余学习用的，主要参照酒仙网的布局，实现一些基本的功能

# 项目模块
 - 首页
 - 登录
 - 注册
 - 详情
 - 购物车

# 技术栈
 - css预处理器: sass
 - 数据库: mysql
 - 前后端数据连接: php做中介
 - 数据采集: 八爪鱼
 - js库:jquery
 - 模块化开发: require.js
 - 存贮 cookie

# 项目中遇到的问题

 ## 问题1
>在项目中碰到了在动态渲染商品列表时,无法获取到元素节点的问题

>原因:,当时dbug和查阅资料，发现用innerhtml添加的节点，当放在ajax异步请求数据中，会延时渲染节点

>解决方案:采用jQuery的append()方法，加上on()方法的事件委托
 ## 问题2
>在做购物车的CheckBox多选时,读取cookie里面的商品，出现总价和商品实际总价不对。

>原因：多选列表与全选出现冲突

>解决方案:单独对多选和单选进行封装函数

# 问题3
>楼梯效果,动画的多次触发，以及无法回到原位
>原因:定时器没有清加上stop方法参数写错了
>解决方案:清除定时器，设置stop（true,true）

 ## 问题4
 >放大镜鼠标跟随细节放大不是很精确
 
 >原因:原图和放大的图的比例写反了
 
 >解决方案:改过来

# 感悟
>第一次写电商平台，发现轮播图真多，整体观察了一下，大致上差不多，可以直接封装一个函数，遇到的坑也挺多的，没有用框架，css纯手敲，发现整个人的css水平又进了一步
>原生js也复习了一遍，从轮播图，放大镜，到购物车，基本上就是js+jQuery。不过收获蛮大
 
 
 
 





