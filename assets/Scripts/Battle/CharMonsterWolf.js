cc.Class({
    extends: require('CharItem'),

    onCollisionEnter(other, self) {
        if (other.node.group === 'Rock') {
            let progressBar = this.node.getChildByName('HP').getComponent(cc.ProgressBar);
            this.currentHP -= 100;
            progressBar.progress = this.currentHP / this.charHP;
            if (this.currentHP <= 0) {
                this.onDie();
            }
        }
    },

    onCollisionExit(other, self) {
        if (other.node.group === 'OutScreen') {
            this.node.destroy();
        }
    },

    onDie() {
        this._super();
    }
});
