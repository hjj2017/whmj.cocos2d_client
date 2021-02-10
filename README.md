# whmj.cocos2d_client

威海地方玩法麻将，Cocos 客户端端代码，使用 Cocos Creator 2.4.3 编辑开发。代码开发环境是 VSCode，开发语言采用 TypeScript。

客户端演示地址如下：

http://cdn0001.afrxvk.cn/whmj/go.html

如果想要连接自己的本地服务器，可以使用如下地址：

http://cdn0001.afrxvk.cn/whmj/go.html?serverAddr=127.0.0.1:20480

## 特别注意

因为客户端使用了 Cocos Creator 最新版本支持的 Bundle 技术，所以想要正常打开该项目，请使用 Cocos Creator 2.4.3 或更高版本。

另外，开发语言抛弃了 JavaScript，转而使用 TypeScript。
经过实践检验，JavaScript 语言类型检查太弱了，在工程开发中，不利于控制代码规范。
虽然我们也使用了 ESLint 这样的工具，但是还是不能达到最理想的效果。

而使用 TypeScript 的优势在于：

- 可以严格规范编码；
- IDE 可以提供良好的提示支持；

# 项目结构

所有的代码和资源都在 assets 目录中，除了 bizdata、comm、userlogin 这三个目录之外，其余目录均作为 Bundle。
只有需要时才进行加载操作！

- **bizdata 通用的业务对象**
    
    注意：跟麻将相关的数据结构或者业务对象，不会出现在这里，那个属于具体业务，会放置到具体业务的目录中；

- **comm 通用代码**
    
    比如工具类、消息总线（MsgBus）类等等；

- **userlogin 负责处理用户登录逻辑**
    
    整个游戏要加载的第一个场景，就类似于 C 语言中的 main 函数一样，是这个游戏的入口点。

其余的目录，比如：hall、createroom、game/MJ_weihai_、club 这些都属于 Bundle。不会在应用启动时就加载，这样可以加快应用的启动速度。

