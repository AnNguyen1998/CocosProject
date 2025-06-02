const StateMachine = require('javascript-state-machine');
cc.Class({
    extends: cc.Component,

    properties: {
        spineBoy: {
            default: null,
            type: sp.Skeleton,
        },
    },

    onLoad() {
        this.init();
        this.isAnimComplete = false;
    },

    init() {
        this.fsm = new StateMachine({
            init: 'hoverboard',
            transitions: [
                { name: 'onHit', from: 'hoverboard', to: 'death' }
            ],
            methods: {
                onEnterHoverboard: () => {
                    this.spineBoy.setAnimation(0, 'portal', true);
                    this.spineBoy.setCompleteListener((trackEntry) => {
                        if (trackEntry.animation.name === 'portal') {
                            this.spineBoy.setAnimation(0, 'hoverboard', true);
                            this.spineBoy.setCompleteListener((trackEntry) => {
                                this.isAnimComplete = true;
                            })
                        }
                    })
                },
                onEnterDeath: () => {
                    this.spineBoy.setAnimation(0, 'death', true);
                    this.spineBoy.setCompleteListener((trackEntry) => {
                        if (trackEntry.animation.name === 'death') {
                            this.onDie();
                        }
                    });
                },
            }
        });
    },

    onClickButtonUp() {
        if (this.isAnimComplete) {
            cc.tween(this.spineBoy.node)
                .by(0.5, { y: 100 })
                .start();
        }
    },

    onClickButtonDown() {
        if (this.isAnimComplete) {
            cc.tween(this.spineBoy.node)
                .by(0.5, { y: -100 })
                .start();
        }
    },

    onCollisionEnter(other, self) {
        if (other.node.group === 'Monster') {
            this.onHitMonster();
        }
    },

    onHitMonster() {
        this.fsm.onHit();
    },

    onDie() {
        this.node.destroy();
    }

});
