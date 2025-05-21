cc.Class({
    extends: cc.Component,

    properties: {
        labelComponent: {
            default: null,
            type: cc.Label
        },
        flag : true
    },

    // onLoad () {},

    start () {

    },

    onclickLabel: function() {
        if (this.flag) {
            this.labelComponent.string = "Pause";
            console.log("if");
            this.flag = false;
        }else if (!this.flag) {
            this.labelComponent.string = "Play";
            console.log("else if");
            this.flag = true;
        }
    },
    // update (dt) {},
});
