cc.Class({
    extends: cc.Component,

    properties: {
        playBGMSound: {
            default: null,
            type: cc.AudioClip
        },
        onclickPlaySound: {
            default: null,
            type: cc.AudioClip
        }
    },

    onLoad () {
        this.playBGM();
    },

    start () {

    },

    playBGM: function() {
        cc.audioEngine.play(this.playBGMSound, true, 1);
        console.log("playBGM");
    },

    onClickPlay: function() {
        cc.audioEngine.play(this.onclickPlaySound, false, 1);
        console.log("onClickPlay");
    },
    // update (dt) {},
});
