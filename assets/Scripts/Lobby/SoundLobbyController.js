const Emitter = require('MEmitter');
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
    },

    onLoad() {
        this.playBackgroundMusic();
        this.isSFXChecked = true;
        Emitter.instance.registerEvent("slider", this.onMusicSliderChange.bind(this));
        Emitter.instance.registerEvent("musicToggle", this.onMusicToggleChange.bind(this));
        Emitter.instance.registerEvent("sfxToggle", this.onSFXToggleChange.bind(this));
    },

    playBackgroundMusic() {
        this.bgmId = cc.audioEngine.play(this.backgroundMusic, true, 1);
    },

    onClickSFX() {
        if (this.isSFXChecked) {
            cc.audioEngine.play(this.clickMusic, false, 1);
        }
    },

    onMusicToggleChange(isChecked) {
        if (isChecked) {
            cc.audioEngine.resume(this.bgmId);
        }
        else {
            cc.audioEngine.pause(this.bgmId);
        }
    },

    onSFXToggleChange(isChecked) {
        this.isSFXChecked = isChecked;
    },

    onMusicSliderChange(process) {
        cc.audioEngine.setVolume(this.bgmId, process);
    },

});
