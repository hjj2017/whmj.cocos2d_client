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

