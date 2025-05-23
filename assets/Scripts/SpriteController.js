cc.Class({
    extends: cc.Component,

    properties: {
        spriteComponent1: {
            default: null,
            type: cc.SpriteFrame
        },
        spriteComponent2: {
            default: null,
            type: cc.SpriteFrame
        },
        flag : true,
        node1: {
            default: null,
            type: cc.Node
        },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    onChangeSprite: function() {
        if (this.flag) {
            this.node1.getComponent(cc.Sprite).spriteFrame = this.spriteComponent2;
            console.log("if");
            this.flag = false;
        }else if (!this.flag) {
           this.node1.getComponent(cc.Sprite).spriteFrame = this.spriteComponent1;
            console.log("else if");
            this.flag = true;
        }
    }
    // update (dt) {},
});
