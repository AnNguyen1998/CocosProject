cc.Class({
    extends: cc.Component,

    properties: {

        loadProgressBar: {
            default: null,
            type: cc.ProgressBar,
        },
        spineBoy: {
            default: null,
            type: sp.Skeleton,
        },

    },

    onLoad() {
        this.initProgressBar();
        this.preLoadScene();
    },

    preLoadScene() {
        this.spineBoy.setAnimation(0, "run", true);
        cc.director.preloadScene("BattleScene", (completedCount, totalCount, item) => {
            let percent = completedCount / totalCount;
            this.loadProgressBar.progress = percent;
            let moveDistance = this.loadProgressBar.node.width * this.loadProgressBar.progress;
            cc.tween(this.spineBoy.node)
                .by(0.5, { x: moveDistance })
                .start();
        },
            () => {
                this.loadProgressBar.progress = 1;
                this.scheduleOnce(() => {
                     cc.director.loadScene("BattleScene");
                },1);
               
            });
    },

    initProgressBar() {
        this.loadProgressBar.progress = 0;
    },

});
