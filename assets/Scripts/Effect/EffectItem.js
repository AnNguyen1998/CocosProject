cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    onLoad() {
        this.initExplodeEffect();
    },

    initExplodeEffect() {
        cc.tween(this.node)
            .by(0.5, { scale: 1.5 })
            .call(() => {
                this.node.destroy();
            })
            .start();
    },

    onDestroy() {
        this.node.destroy();
    }

});
