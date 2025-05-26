cc.Class({
    extends: cc.Component,

    properties: {
        backgroundMusic: {
            default: null,
            type: cc.AudioClip
        },
        clickMusic: {
            default: null,
            type: cc.AudioClip
        },
        toggleBGM: {
            default: null,
            type: cc.Node
        },
        toggleSFX: {
            default: null,
            type: cc.Node
        },
        musicSlider: {
            default: null,
            type: cc.Slider
        },
    },

    onLoad() {
        this.playBackgroundMusic();
        this.isSFXChecked = true;
    },

    playBackgroundMusic() {
        this.bgmId = cc.audioEngine.play(this.backgroundMusic, true, 1);
    },

    onClickSFX() {
        if (this.isSFXChecked) {
            cc.audioEngine.play(this.clickMusic, false, 1);
        }
    },

    onToggleBGMClick() {
        if (this.toggleBGM.getComponent(cc.Toggle).isChecked) {
            cc.audioEngine.resume(this.bgmId);
        }
        else {
            cc.audioEngine.pause(this.bgmId);
        }
    },

    onToggleSFXClick() {
        this.isSFXChecked = this.toggleSFX.getComponent(cc.Toggle).isChecked;
    },

    onMusicSliderChange() {
        const volume = this.musicSlider.progress;
        cc.audioEngine.setVolume(this.bgmId, volume);
    },

});
