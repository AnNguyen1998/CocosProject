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
        const fakeData = ['PixelProwler', 'ByteBlade', 'VortexViper', 'AuraAssassin', 'CircuitSorcerer', 'EchoEnigma', 'GlyphGhost', 'NebulaNomad', 'QuantumQuasar', 'ZenithZephyr'];
        const cellList = [];
        for (let i = 0; i < 10; i++) {
            let cell = cc.instantiate(this.cell);
            cellList.push(cell);
            cell.parent = this.layoutTable.node;
        }
        fakeData.forEach((data, index) => {
            let labelName = cellList[index].getChildByName('Name').getComponent(cc.Label);
            let labelRank = cellList[index].getChildByName('Rank').getComponent(cc.Label);
            labelName.string = data;
            labelRank.string = index + 1;
        });
        cellList[0].color = cc.Color.RED;
        cellList[1].color = cc.Color.ORANGE;
        cellList[2].color = cc.Color.YELLOW;
    }
});
