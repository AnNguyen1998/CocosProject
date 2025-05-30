cc.Class({
    extends: cc.Component,

    properties: {
        buttonPrefab: {
            default: null,
            type: cc.Prefab,
        },
        layoutButtons: {
            default: null,
            type: cc.Layout,
        },
        buttonList: {
            default: [],
            type: cc.Prefab,
        },
        spine: {
            default: null,
            type: sp.Skeleton,
        },
    },

    onLoad() {
        this.initButtons();
        this.showAnimation();
    },

    initButtons() {
        this.numberAnimations = this.spine._skeleton.data.animations.length;
        for (let i = 0; i < this.numberAnimations; i++) {
            let button = cc.instantiate(this.buttonPrefab);
            this.buttonList.push(button);
            button.parent = this.layoutButtons.node;
        }
    },

    showAnimation() {
        let animations = this.spine._skeleton.data.animations;
        animations.forEach((animation, index) => {
            let label = this.buttonList[index].getChildByName('ButtonLabel').getComponent(cc.Label);
            label.string = animation.name;
            this.buttonList[index].getComponent(cc.Button).node.on('click', this.onButtonClick.bind(this, animation.name), this);
        });
    },

    onButtonClick(animationName) {
        this.spine.setAnimation(0, animationName, true);
    },

    onDestroy() {
        this.buttonList.forEach(button => {
            button.destroy();
        });
        this.buttonList = [];
    },

});
