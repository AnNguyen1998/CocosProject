cc.Class({
    extends: cc.Component,

    properties: {
        popupController: {
            default: null,
            type: require('PopupController')
        },
    },

    showSetting() {
        this.popupController.showSetting();
    },

    showRank() {
        this.popupController.showRank();
    },

    hideSetting() {
        this.popupController.hideSetting();
    },

    hideRank() {
        this.popupController.hideRank();
    },

});
