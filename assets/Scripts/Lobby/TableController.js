cc.Class({
    extends: cc.Component,

    properties: {
        cell: {
            default: null,
            type: cc.Prefab
        },
        layoutTable: {
            default: null,
            type: cc.Layout
        },
        cellList: {
            default: [],
            type: cc.Prefab
        },
        scrollView: {
            default: null,
            type: cc.ScrollView
        },
    },

    onLoad() {
        for (let i = 0; i < 10; i++) {
            let cell = cc.instantiate(this.cell);
            this.cellList.push(cell);
            cell.parent = this.layoutTable.node;
        }
        this.cellList[0].color = cc.Color.RED;
        this.cellList[1].color = cc.Color.ORANGE;
        this.cellList[2].color = cc.Color.YELLOW;
    },

    showData(data) {
        data.sort((a, b) => b.point - a.point);
        data.forEach((data, index) => {
            let labelName = this.cellList[index].getChildByName('Name').getComponent(cc.Label);
            let labelRank = this.cellList[index].getChildByName('Rank').getComponent(cc.Label);
            let titlePoint = this.cellList[index].getChildByName('TitlePoint');
            let labelPoint = titlePoint.getChildByName('Point').getComponent(cc.Label);
            labelPoint.string = data.point + ' points';
            labelName.string = data.username;
            labelRank.string = index + 1;
        });
        this.scrollView.scrollToTop(0);
    }

});
