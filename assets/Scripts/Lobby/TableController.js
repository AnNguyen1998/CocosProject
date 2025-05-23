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
    },

    onLoad() {
        const fakeData = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
        const cellList = [];
        for(let i = 0; i < 5; i++) {
            let cell = cc.instantiate(this.cell);
            cellList.push(cell);
            cell.parent = this.layoutTable.node;
        }
        fakeData.forEach((data, index) => {
            cellList[index].getChildByName('Name').getComponent(cc.Label).string = data;
            cellList[index].getChildByName('Rank').getComponent(cc.Label).string = index + 1;
        });
    }
});
