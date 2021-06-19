// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "送给我",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "亲爱的爸爸~",  // 同上...
        "今天是你的节日",
        "我在北京",
        "你在厦门",
        "承蒙互联网的红利",
        "送给你一份特别的礼物;P",
        "很想很想念你",
        "不论是满足或者是失意",
        "如果我能选择一个人 和我分享这些点滴",
        "多么希望是你 我亲爱的父亲",
        "这确实是一种 特别的感觉",
        "像冰甜的凉瓜",
        "想起来 甜甜的",
        "见到了 香香的",
        "离别后清凉凉的",
        "不会伤情",
        "会给人能量和希望",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "欸！介绍给你一个帅哥嘻嘻": "./imgs/dad/wo1.png",
        "嘻嘻嘻嘻": "./imgs/dad/nanshen1.png",
         "知言心里永远的男神": "./imgs/dad/nanshen2.png",
        "他是咱们家最壮！": "./imgs/dad/mamababa.png",
        "他是咱们家最勇猛": "./imgs/dad/nanshen3.png",
        "他还很体贴": "./imgs/dad/nanshen4.png",
        "他把家里的大小情人都照顾得很好": "./imgs/dad/nanshen5.png",
        "我们家有他是我们家的最开心": "./imgs/dad/nanshen6.png",
         "一波！一波！狂粉！狂粉！": "./imgs/dad/wodebaba.png",
        "我爱爸爸": "./imgs/dad/nanshen7.png",
        // "今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "开始",
        play: "音乐",
        bannar_coming: "颜色",
        balloons_flying: "好像少点东西",
        cake_fadein: "蛋糕？",
        light_candle: "蜡烛？",
        wish_message: "父亲节快乐！",
        story: "A MESSAGE FOR YOU",
    }
};
