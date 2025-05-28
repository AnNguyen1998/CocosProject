const Emitter = require('MEmitter');
const EventsKey = require('EventsKey');
cc.Class({
    extends: require('PopupItem'),

    properties: {
        volumeSlider: {
            default: null,
            type: cc.Slider
        },
        toggleBGM: {
            default: null,
            type: cc.Node
        },
        toggleSFX: {
            default: null,
            type: cc.Node
        }
    },

    onLoad() {
        this._super();
        this.onMusicSliderChange();
    },

    onMusicSliderChange() {
        let process = this.volumeSlider.progress;
        let loadVolume = this.volumeSlider.node.getChildByName("Load");
        loadVolume.width = this.volumeSlider.node.width * process;
        Emitter.instance.emit(EventsKey.CHANGED_SLIDER, process);
    },

    onMusicToggleChange() {
        let isChecked = this.toggleBGM.getComponent(cc.Toggle).isChecked;
        Emitter.instance.emit(EventsKey.TOGGLE_MUSIC, isChecked);
    },

    onSFXToggleChange() {
        let isChecked = this.toggleSFX.getComponent(cc.Toggle).isChecked;
        Emitter.instance.emit(EventsKey.TOGGLE_SOUNDFX, isChecked);
    }

});
