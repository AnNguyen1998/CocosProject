cc.Class({
    extends: require('PopupItem'),
    properties: {
        tableController: {
            default: null,
            type: require('TableController')
        },
        scrollView: {
            default: null,
            type: cc.ScrollView
        },
    },

    show(data) {
        this._super();
        this.tableController.showData(data);
        this.scrollView.scrollToTop(0);
    }

});
