const Emitter = require('MEmitter');
cc.Class({
    extends: cc.Component,

    properties: {
        popupController: {
            default: null,
            type: require('PopupController')
        },
    },

    showSetting() {
        Emitter.instance.emit('showSetting');
    },

    showRank() {
        Emitter.instance.emit('showRank');
    },

    hideSetting() {
        Emitter.instance.emit('hideSetting');
    },

    hideRank() {
        Emitter.instance.emit('hideRank');
    },

});
