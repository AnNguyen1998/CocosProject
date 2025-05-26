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
        data.sort((a, b) => b.point - a.point);
        this.tableController.showData(data);
    }

});
