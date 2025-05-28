const Emitter = require('MEmitter');
const EventsKey = require('EventsKey');
cc.Class({
    extends: cc.Component,

    properties: {
        popupController: {
            default: null,
            type: require('PopupController')
        },
    },

    showSetting() {
        Emitter.instance.emit(EventsKey.SHOW_SETTING_POPUP);
    },

    showRank() {
        Emitter.instance.emit(EventsKey.SHOW_RANK_POPUP);
    },

    hideSetting() {
        Emitter.instance.emit(EventsKey.HIDE_SETTING_POPUP);
    },

    hideRank() {
        Emitter.instance.emit(EventsKey.HIDE_RANK_POPUP);
    },

});
