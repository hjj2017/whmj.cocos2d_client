# 威海麻将客户端

----

![screen_shoot_0](./screenshoot/screen_shoot_0.png)

威海地方玩法麻将，Cocos 客户端代码，使用 Cocos Creator 2.4.5 编辑开发。

代码开发环境是 VSCode，开发语言采用 TypeScript。

客户端演示地址如下：

http://cdn0001.afrxvk.cn/whmj/go.html

如果想要连接自己的本地服务器，可以使用如下地址：

http://cdn0001.afrxvk.cn/whmj/go.html?serverAddr=127.0.0.1:20480

**与之相配的服务端代码，请参见：**

https://github.com/hjj2017/whmj.java_server

## 特别注意

因为客户端使用了 Cocos Creator 最新版本支持的 Bundle 技术，所以想要正常打开该项目，

请使用 Cocos Creator **2.4.3 或更高版本**。

另外，开发语言抛弃了 JavaScript，转而使用 TypeScript。

经过实践检验，JavaScript 语言类型检查太弱了，在工程开发中，不利于控制代码规范。

虽然我们也使用了 ESLint 这样的工具，但是还是不能达到最理想的效果。

而使用 TypeScript 的优势在于：

- 可以严格规范编码；
- IDE 可以提供良好的提示支持；
- 方便代码重构；
- 在编译期就可以排除编码错误，而不是到运行期才发现；

# 项目结构

所有的代码和资源都在 assets 目录中，除了 bizdata、comm、userlogin 这三个目录之外，其余目录均作为 Bundle！

- **bizdata 通用的业务对象**
    
    注意：跟麻将相关的数据结构或者业务对象，不会出现在这里，那个属于具体业务，会放置到具体业务的目录中；

- **comm 通用代码**
    
    比如工具类、消息总线（MsgBus）类等等；

- **userlogin 负责处理用户登录逻辑**
    
    整个游戏要加载的第一个场景，就类似于 C 语言中的 main 函数一样，是这个游戏的入口点。

其余的目录，比如：hall、createroom、game/MJ_weihai_、club 这些都属于 Bundle。

_也就是一个模块一个 Bundle！_

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
  |           +-- prefab/        // 场景中要用到的 prefab 预制体；
  |           +-- spine/         // Spine 骨骼动画资源目录；
  +-- script/                    // 代码目录，所有的 TypeScript 代码都在这个目录中；
  |     +-- msg/                 // 消息目录，Protobuf 生成的消息放在这里；
  |     +-- resulthandler/       // 服务器端返回的消息都以 XxxResult 命名，所以消息接收过程都在这里；
  |     +-- subview/             // 子视图目录, 组件所需要的代码都放在这里；
  |     +-- hall.HallScene.ts    // 大厅场景代码；
  +-- HallScene.fire             // 游戏大厅场景文件，可以用 Cocos Creator 打开；
  +-- README.md                  // 说明文件
```

首先我们可以看到 res 目录中有 0 和 1 之分。

0 目录中一般只有图片资源，这些图片是直接绑定在场景文件（.fire）中的。

所有这些图片会随着场景一起加载。

换句话说，没有这些 0 级资源，场景是不可能完整的！

1 目录中就不只有图片资源了，还包括音频和动画。

这些资源文件一般是绑定到 1 目录中的所有 prefab 上的， prefab 是延迟加载的，等真正用到时才加载。

# 自动图集

0 目录下有图片资源目录 img，img 目录中又有个 AutoAtlas.pac，这个是用来创建合图的。

1 目录下也有 img 目录，且这个 img 目录下也有 AutoAtlas.pac。两个等级的资源，分别用不同的合图配置。

这样做的目的也是为了加快场景的加载速度。

如果场景不复杂，但是却和其他 prefab 共用一张合图，那会极大的影响加载速度。

_这里有个问题：_

> 如果我们遇到 Button.png 即在场景里用到了，又在 prefab 里用到了，那么这个图片到底是应该放到 0 里还是 1 里？

**请注意：这种情况 0 和 1 各放一份！**

虽然冗余了，但是这却避免了出现小场景或小 prefab 加载与自己不相关的大图片的问题。

另外 Cocos Creator 也在内部尝试了框架机制的优化。

例如 Button.png 只放到 0 里，但是场景和 prefab 都用到了，那么 Cocos Creator 在创建合图时，

很可能会创建一个 _零散的碎图_ ……这会增加 Http 请求次数！

# 关于 Bundle 还有要说的

_一个模块就是一个 Bundle！_，这个前面已经提到过了。

每个 Bundle 下都有一个 README.md 文件，打开 hall/README.md 或者 club/README.md，我们能看到：

> 该模块属于**标准场景**!

而打开 createroom/README.md，我们看到的是：

> 该模块属于**纯组件**! 

同样作为 Bundle，createroom 和 hall、club 有什么不同吗？为什么要这么做呢？

事情是这样的：

- 一开始 createroom（创建房间）是 hall 的一个 subview（子视图）；
- 后来啊，有了 club（俱乐部）。在这里也能创建房间；
- 按道理来说，club 应该可以调用属于 hall 的 createroom；
- 可是，这里发生了一些奇怪且不好的事情；
- 身为一个 Bundle 竟然伸手到人家裤裆里掏东西，这样好么？这样不好！
- 这会导致 Cocos 引擎加载 Bundle 时出现不必要的混乱；

    - 说的更明白一点：club 要加载 createroom，那么就必须先加载 hall；
    - 加载 hall 就得加载一大堆 hall 必须要用到的资源（比如 hall 的背景图）；
    - 但是这些资源 club 根本用不上； 

- 为了避免上面说的问题，所以干脆把 createroom 从子视图里拿出来，直接升级为独立的模块，也就是 Bundle！
- 这样就各自安好了……

createroom 虽然是升级了，独立了，但是却严格到不能直接处理任何消息！所以它就是纯组件了……

跟 createroom 类似的还有 chat、geolocation，也是纯纯的组件，不处理任何消息。

与之有别的是 record，这个只是比 createroom 多了消息处理能力。

# 编码规范

- 变量要加类型前缀，虽然 TypeScript 有严格的类型，但是由于 JSer 留下的不好的习惯，所以要求每个变量都要加类型前缀，且类型是不能更换的！

    - n 代表 number 类型，例如：nAge、nCount；
    - o 代表 object 类型，例如：oUser、oLangMap；
    - str 代表 string 类型，例如：strName、strDescription；
    - b 代表 boolean 类型，例如：bSuccezz；

- 每个 .ts 文件中只有一个类文件，和 Java 语言保持一致；
- 无需导出的函数，统统使用双下划线作为前缀，并尽量写在类外面；
- **禁止**使用函数的 .bind 特性，改为显示的传入 this（也就是 SELF） 指针；

    - 使用函数的 .bind 特性，并在函数内部调用 this 时，会产生很严重的歧义，debug 时会非常困难；

- 数组类型以 Array 作为结尾，例如：oNameArray；
- 字典类型以 Map 作为结尾，例如：oNameDict；
- 所有的函数**必须**定义返回值类型；
- 所有的函数参数**必须**定义参数类型；
- 所有的 if、for、while、do while 必须使用 { 和 } 包裹，即使只有一句；

# 麻将谁是最核心代码？

要想看麻将最核心代码，那就得看 game/MJ_weihai_/script/table 代码。

这里是麻将玩法展示逻辑的内核！注意这里只实现了麻将该如何展示？没有实现其他逻辑。

配合 resulthandler 和 MJ_weihai_Scene 场景完成了玩麻将的逻辑，

配合 MJ_weihai_Playback 场景完成了麻将回放逻辑。

我还是想再强调一遍：**_table 中的代码是内核！而且它只是内核！_**

作为内核，是不能参与用户操作、消息收发这样的逻辑的！通过内核要完成什么样的功能，完全取决于外包装是什么。

# 关于放风玩法与 MVC

放风玩法是威海地区的特色玩法，篇幅有限这里我就不细说了……

table 内核支持放风的展示，但是却不支持放风的选牌操作。为什么要这么做呢？

因为放风的选牌操作逻辑比较麻烦，且只是威海特有的，其他地区没有这个玩法。

换做湖北玩法有血流换三张，_如果把每个地区的特色玩法都写到内核里，会造成内核很不稳定。_

就好比把 QQ、抖音这些软件写进 Windows 内核一样。

要解决这个问题的办法是，在内核之上做一个**虚设的视图（View）。**

用户在这个视图上操作，把操作结果翻译成指令传递给内核。这个请参考：MahjongLiangFengChoiceQuestionComp
