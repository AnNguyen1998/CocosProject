const Emitter = require('MEmitter');
const EventsKey = require('EventsKey');
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
        this.initEventsMap();
        this.registerEventsMap();
    },

    initEventsMap() {
        this.eventsMap = {
            [EventsKey.CHANGED_SLIDER]: this.onMusicSliderChange.bind(this),
            [EventsKey.TOGGLE_MUSIC]: this.onMusicToggleChange.bind(this),
            [EventsKey.TOGGLE_SOUNDFX]: this.onSFXToggleChange.bind(this)
        };
    },

    registerEventsMap() {
        Emitter.instance.registerEventsMap(this.eventsMap);
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

    removeEventsMap() {
        Emitter.instance.removeEventsMap(this.eventsMap);
    },

    onDestroy() {
        this.removeEventsMap();
    }

});
