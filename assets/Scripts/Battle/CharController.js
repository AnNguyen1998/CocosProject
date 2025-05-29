cc.Class({
    extends: cc.Component,

    properties: {
        charPrefabList: [cc.Prefab],
        delayTime: {
            default: 0,
            type: cc.Float,
        },
    },

    onLoad() {
        this.schedule(this.randomInitChar, this.delayTime);
    },

    randomInitChar() {
        let randomIndex = Math.floor(Math.random() * this.charPrefabList.length);
        let charNode = cc.instantiate(this.charPrefabList[randomIndex]);
        let infoChar = charNode.getComponent('Char'+charNode._name);
        let progressBar = charNode.getChildByName('HP').getComponent(cc.ProgressBar);
        let randomY = Math.random() * 470 - 250; 
        charNode.getChildByName('Name').getComponent(cc.Label).string = infoChar.charName;
        progressBar.progress = infoChar.currentHP / infoChar.charHP;
        charNode.setPosition(cc.v2(0, randomY));
        charNode.parent = this.node;
    },

    onDestroy() {
        this.unschedule(this.randomInitChar);
    }

});
