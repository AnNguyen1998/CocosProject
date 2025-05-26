cc.Class({
    extends: cc.Component,

    properties: {
        popupSetting: {
            default: null,
            type: require('PopupItem')
        },
        popupRank: {
            default: null,
            type: require('PopupItem')
        },
    },

    showSetting() {
        this.popupSetting.show();
    },

    showRank() {
        this.popupRank.show();
    },

    hideSetting() {
        this.popupSetting.hide();
    },

    hideRank() {
        this.popupRank.hide();
    },

});
