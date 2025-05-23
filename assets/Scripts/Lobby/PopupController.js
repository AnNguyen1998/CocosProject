cc.Class({
    extends: cc.Component,

    properties: {
        PopupSetting: {
            default: null,
            type: require('PopupItem')
        },
        PopupRank: {
            default: null,
            type: require('PopupItem')
        },
    },

    showSetting() {
        this.PopupSetting.show();
    },

    showRank() {
        this.PopupRank.show();
    },

    hideSetting() {
        this.PopupSetting.hide();
    },
    
    hideRank() {
        this.PopupRank.hide();
    },

});
