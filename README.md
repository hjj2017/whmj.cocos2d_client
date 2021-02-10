# whmj.cocos2d_client

威海地方玩法麻将，Cocos 客户端端代码，使用 Cocos Creator 2.4.3 编辑开发。

代码开发环境是 VSCode，开发语言采用 TypeScript。

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

所有的代码和资源都在 assets 目录中，除了 bizdata、comm、userlogin 这三个目录之外，其余目录均作为 Bundle！

- **bizdata 通用的业务对象**
    
    注意：跟麻将相关的数据结构或者业务对象，不会出现在这里，那个属于具体业务，会放置到具体业务的目录中；

- **comm 通用代码**
    
    比如工具类、消息总线（MsgBus）类等等；

- **userlogin 负责处理用户登录逻辑**
    
    整个游戏要加载的第一个场景，就类似于 C 语言中的 main 函数一样，是这个游戏的入口点。

其余的目录，比如：hall、createroom、game/MJ_weihai_、club 这些都属于 Bundle。

所有的 Bundle 不会在应用启动时就加载，而是用到时才加载！

这样可以加快应用的启动速度。

# 关于 Bundle

每个 Bundle 也是有固定结构的，我们以 hall 游戏大厅为例，其目录结构如下：

```
hall/                            // 大厅模块 Bundle；
  +-- res/                       // 资源目录，存放所有的图片、声音、动画等；
  |     +-- 0/                   // 0 级目录，显示场景时需要立即加载的资源；
  |     |     +-- img/           // 所有的图片，该目录中会带有自动图集文件；
  |     +-- 1/                   // 1 级目录，可以延迟加载的资源；
  |           +-- audio/         // 音频文件；
  |           +-- img/           // 所有的图片，该目录中会带有自动图集文件；
  |           +-- prefab/        // 要用到的预制体；
  |           +-- spine/         // Spine 骨骼动画资源目录；
  +-- script/                    // 代码目录，所有的 TypeScript 代码都在这个目录中；
  |     +-- msg/                 // 消息目录，Protobuf 生成的消息放在这里；
  |     +-- resulthandler/       // 服务器端返回的消息都以 XxxResult 命名，所以消息接收过程都在这里；
  |     +-- subview              // 子视图目录, 组件所需要的代码都放在这里；
  |     +-- hall.HallScene.ts    // 大厅场景代码；
  +-- HallScene.fire             // 游戏大厅场景文件，可以用 Cocos Creator 打开；
```

首先我们可以看到 res 目录中有 0 和 1 之分。

0 目录中一般只有图片资源，这些图片是直接绑定在场景文件（.fire）中的。

所有这些图片会随着场景一起加载。

换句话说，没有这些 0 级资源，场景是不可能完整的！

1 目录中就不只有图片资源了，还包括音频和动画。

这些资源文件一般是绑定到 1 目录中的所有 prefab 上的， prefab 是延迟加载的，等真正用到时才加载。


