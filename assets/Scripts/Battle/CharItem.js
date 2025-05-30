const Emitter = require('MEmitter');
const EventKey = require('EventsKey');
const RangeUp = 470;
const RangeDown = -250;
cc.Class({
    extends: cc.Component,

    properties: {
        charID: "",
        charHP: {
            default: 0,
            type: cc.Integer,
        },
        currentHP: {
            default: 0,
            type: cc.Integer,
        },
        charName: {
            default: " ",
        },
        charSpeed: {
            default: 0,
            type: cc.Float,
        },
    },

    onLoad() {
        this.onMove();
        this.initChar();
    },

    initChar() {
        cc.director.getCollisionManager().enabled = true;
        this.charID = Date.now()+"";
        this.node.getChildByName('Name').getComponent(cc.Label).string = this.charName;
        this.currentHP = this.charHP;
        this.node.getChildByName('HP').getComponent(cc.ProgressBar).progress = this.currentHP / this.charHP;
        let randomY = Math.random() * RangeUp + RangeDown;
        this.node.setPosition(cc.v2(0, randomY));
    },

    onMove() {
        cc.tween(this.node)
            .repeatForever(
                cc.tween()
                    .by(10 / this.charSpeed, { x: -100 })
            )
            .start();
        cc.tween(this.node)
            .repeatForever(
                cc.tween()
                    .by(0.5, { y: 10 })
                    .delay(0.5)
                    .by(0.5, { y: -5 })
            )
            .start();
    },

    onDie() {
        Emitter.instance.emit(EventKey.ON_DIE_MONSTER, this.charID);
        this.node.stopAllActions();
        this.node.destroy();
    },

    onCollisionTarget(target) {
        if (target === 'Rock') {
            this.currentHP -= 100;
        }
        let progressBar = this.node.getChildByName('HP').getComponent(cc.ProgressBar);
        progressBar.progress = this.currentHP / this.charHP;
        if (this.currentHP <= 0) {
            cc.tween(this.node)
            .by(0.5, { rotation: 180 })
            .call(() => {
                this.onDie();
            })
            .start();
        }
    },

    onCollisionEnter(other, self) {
        if (other.node.group === 'Rock') {
            this.onCollisionTarget(other.node.group);
        }
    },

    onCollisionExit(other, self) {
        if (other.node.group === 'OutScreen') {
            this.onDie();
        }
    },

    onDestroy() {
        this.node.stopAllActions();
    },

});
