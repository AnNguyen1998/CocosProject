var SoundController = cc.Class({
    extends: cc.Component,

    properties: {
        playBGMSound: {
            default: null,
            type: cc.AudioClip
        },
        onClickPlaySound: {
            default: null,
            type: cc.AudioClip
        },
       soundFlag : true,

    },

    onLoad() {
        this.playBGM();
        console.log("soundFlag_0", this.soundFlag);
        console.log("sound controller loaded");
    },

    playBGM () {
        this.bgmId = cc.audioEngine.play(this.playBGMSound, true, 1);
        console.log("playBGM");
    },

    onClickPlay () {
        cc.audioEngine.play(this.onclickPlaySound, false, 1);
        if(this.soundFlag) {
            cc.audioEngine.pause(this.bgmId);
        }else if (!this.soundFlag) {
            cc.audioEngine.resume(this.bgmId);
        }
        this.soundFlag = !this.soundFlag;
        console.log("onClickPlay");
    },
    
});
