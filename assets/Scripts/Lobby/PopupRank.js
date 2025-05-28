cc.Class({
    extends: require('PopupItem'),
    properties: {
        tableController: {
            default: null,
            type: require('TableController')
        },
    },

    show(data) {
        this._super();
        this.tableController.showData(data);
    }

});
