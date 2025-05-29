cc.Class({
    extends: cc.Component,

    properties: {
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
        cc.tween(this.node)
            .by(0.5, { rotation: 180 })
            .call(() => {
                this.node.destroy();
            })
            .start();
    }

});
