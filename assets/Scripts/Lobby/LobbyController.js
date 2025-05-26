cc.Class({
    extends: cc.Component,

    properties: {
        PopupController: {
            default: null,
            type: require('PopupController')
        },
    },

    showSetting() {
        this.PopupController.showSetting();
    },

    showRank() {
        this.PopupController.showRank();
    },

    hideSetting() {
        this.PopupController.hideSetting();
    },

    hideRank() {
        this.PopupController.hideRank();
    },

});
