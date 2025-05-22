var SoundController = require("SoundController");
cc.Class({
    extends: cc.Component,

    properties: {
        labelComponent: {
            default: null,
            type: cc.Label
        },
        labelComponent1: {
            default: null,
            type: cc.Label
        },
        labelFont: {
            default: null,
            type: cc.Font
        },
        soundController : {
            default: null,
            type: SoundController
        }
        // flag: true
    },

    onLoad() {

    },

    start() {
        
    },

    onclickLabel() {
        if (!this.soundController.soundFlag) {
            this.labelComponent.string = "Play";
            console.log("if");
        } else {
            this.labelComponent.string = "Stop";
            console.log("else if");
        }
        // this.soundFlag = !this.soundFlag;
    },

    changeFont: function () {
        this.labelComponent1.font = this.labelFont;
        this.labelComponent1.fontSize = 80;
        this.labelComponent1.lineHeight = 80;
        this.labelComponent1.node.color = cc.Color.RED;
        console.log("changeFont");
    },

    onRotate: function () {
        this.labelComponent1.node.angle += 10;
    },

    update(dt) {

    },
});
