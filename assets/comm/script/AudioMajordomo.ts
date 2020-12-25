// @import
import Async from "./Async";

// @const
const BG_MUSIC_NODE_PATH = "AudioEffect/BGMusic";

/**
 * 音频大管家, 
 * XXX 注意: 需要场景中存在 AudioEffect 节点
 */
export default class AudioMajordomo {
    /**
     * 单例对象
     */
    private static readonly _oInstance = new AudioMajordomo();

    /**
     * 播放声音
     */
    _bEnableSound: boolean = true;

    /**
     * 播放语音
     */
    _bEnableVoice: boolean = true;

    /**
     * 语音索引
     */
    _nVoiceIndex: number = 0;

    /**
     * 私有化类默认构造器
     */
    private constructor() {
    }

    /**
     * 获取单例对象
     * 
     * @return 单例对象
     */
    static getInstance(): AudioMajordomo {
        return AudioMajordomo._oInstance;
    }

    /**
     * 播放背景音乐, 
     * XXX 注意: 背景音乐会循环播放
     * 
     * @param strBundleName Bundle 名称
     * @param strResURI 资源 URI
     * @param bAutoPlay 自动播放
     */
    playBGMusic(strBundleName: string, strResURI: string, bAutoPlay: boolean): void {
        __loadAudioAndPlay(
            strBundleName, strResURI, "BGMusic", bAutoPlay, true
        );
    }

    /**
     * 停止背景音乐
     */
    stopBGMusic(): void {
        // 查找 BGMusic 节点
        const oAudioXNode = cc.find(BG_MUSIC_NODE_PATH, cc.Canvas.instance.node);

        if (null == oAudioXNode || 
            null == oAudioXNode.getComponent(cc.AudioSource)) {
            cc.error(`在场景中未找到 "${BG_MUSIC_NODE_PATH}" 节点, 或者该节点没有绑定 AudioSource 组件`);
            return;
        }

        // 停止背景音乐
        oAudioXNode.getComponent(cc.AudioSource).stop();
    }

    /**
     * 继续播放背景音乐
     */
    resumeBGMusic(): void {
        // 查找 BGMusic 节点
        const oAudioXNode = cc.find(BG_MUSIC_NODE_PATH, cc.Canvas.instance.node);

        if (null == oAudioXNode || 
            null == oAudioXNode.getComponent(cc.AudioSource)) {
            cc.error(`在场景中未找到 "${BG_MUSIC_NODE_PATH}" 节点, 或者该节点没有绑定 AudioSource 组件`);
            return;
        }

        // 播放背景音乐
        oAudioXNode.getComponent(cc.AudioSource).play();
        oAudioXNode.getComponent(cc.AudioSource).loop = true;
    }

    /**
     * 播放音效
     * XXX 注意: 这里播放的声音是 "哐当"、"啪啪啪" 这样的音效...
     * 这种音效不能中断背景音乐
     * 
     * @param strBundleName Bundle 名称
     * @param strResUri 资源 URI
     */
    playSound(strBundleName: string, strResUri: string): void {
        if (this._bEnableSound) {
            __loadAudioAndPlay(
                strBundleName, strResUri, "Sound"
            );
        }
    }

    /**
     * 设置播放声音
     * 
     * @param bVal 布尔值
     * @return this 指针
     */
    putEnableSound(bVal: boolean): AudioMajordomo {
        this._bEnableSound = bVal;
        return this;
    }

    /**
     * 播放声音
     * XXX 注意: 这里播放的是 "一万"、“三饼” 这样的人物声音,
     * 人物声音不能中断背景音乐
     * 
     * @param strBundleName Bundle 名称
     * @param strResUri 资源 URI
     */
    playVoice(strBundleName: string, strResUri: string): void {
        if (this._bEnableVoice) {
            __loadAudioAndPlay(
                strBundleName, strResUri, "Voice"
            );
        }
    }

    /**
     * 设置播放语音
     * 
     * @param bVal 布尔值
     * @return this 指针
     */
    putEnableVoice(bVal: boolean): AudioMajordomo {
        this._bEnableVoice = bVal;
        return this;
    }
}

///////////////////////////////////////////////////////////////////////

/**
 * 加载音频并播放
 * 
 * @param strBundleName Bundle 名称
 * @param strResURI 资源 URI
 * @param strKind 种类
 * @param bAutoPlay 是否自动播放
 * @param bLoop 是否循环, true = 循环播放, false = 不循环
 */
function __loadAudioAndPlay(
    strBundleName: string, strResURI: string, strKind: "Sound" | "BGMusic" | "Voice", bAutoPlay = true, bLoop: boolean = false): void {
    if (null == strBundleName || 
        null == strResURI) {
        return;
    }

    let strX: string = strKind;

    if ("Voice" == strKind) {
        let nVoiceIndex: number = ++AudioMajordomo.getInstance()._nVoiceIndex % 4;
        strX = `Voice_${nVoiceIndex}_`;
    }

    // 获取节点路径
    const strNodePath = `AudioEffect/${strX}`;
    const oAudioXNode = cc.find(strNodePath, cc.Canvas.instance.node);

    if (null == oAudioXNode || 
        null == oAudioXNode.getComponent(cc.AudioSource)) {
        cc.error(`在场景中未找到 "${strNodePath}" 节点, 或者该节点没有绑定 AudioSource 组件`);
        return;
    }

    // 获取 Bundle
    let oBundle = cc.assetManager.getBundle(strBundleName);

    if (null == oBundle) {
        cc.error("oBundle is null");
        return null;
    }

    Async.serial(
        (funYesContinue) => {
            oBundle.preload(strResURI, (oError) => {
                if (null != oError) {
                    cc.error(oError);
                    return;
                }

                funYesContinue();
            });
        },

        () => {
            oBundle.load(strResURI, cc.AudioClip, (oError, oClip: cc.AudioClip) => {
                if (null != oError) {
                    cc.error(oError);
                    return;
                }

                let oAudioSource = oAudioXNode.getComponent(cc.AudioSource);

                if (null == oAudioSource || 
                    oAudioSource.isPlaying) {
                    return;
                }

                oAudioSource.clip = oClip;

                // XXX 注意: 如果在这里执行
                // oAudioSource.loop = true;
                // 背景音乐不会循环播放!
                // 这可能是 Cocos 的一个 Bug...
                if (bAutoPlay) {
                    oAudioSource.play();
                }

                // 然而在调用 play 函数之后,
                // 设置 loop 却可以令背景音乐循环播放
                oAudioSource.loop = bLoop;
            });
        }
    );
}
