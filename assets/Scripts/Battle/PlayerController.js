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
        console.log('PlayerController onCollisionEnter');
        if (other.node.group === 'Monster') {
            this.onHitMonster();
        }
    },

    onHitMonster() {
        this.spineBoy.setAnimation(0, 'death', true);
        this.spineBoy.setCompleteListener((trackEntry) => {
            if (trackEntry.animation.name === 'death') {
                this.onDie();
            }
        });
    },

    onDie() {
        this.node.destroy();
    }

});
