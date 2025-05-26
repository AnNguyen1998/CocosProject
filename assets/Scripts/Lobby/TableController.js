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
        const fakeData = [
            {
                username: 'PixelProwler',
                point: 1500
            },
            {
                username: 'ByteBlade',
                point: 1450
            },
            {
                username: 'VortexViper',
                point: 950
            },
            {
                username: 'AuraAssassin',
                point: 1120
            },
            {
                username: 'CircuitSorcerer',
                point: 1025
            },
            {
                username: 'EchoEnigma',
                point: 520
            },
            {
                username: 'GlyphGhost',
                point: 980
            },
            {
                username: 'NebulaNomad',
                point: 1250
            },
            {
                username: 'QuantumQuasar',
                point: 1110
            },
            {
                username: 'ZenithZephyr',
                point: 990
            }];
        const cellList = [];
        for (let i = 0; i < 10; i++) {
            let cell = cc.instantiate(this.cell);
            cellList.push(cell);
            cell.parent = this.layoutTable.node;
        }
        fakeData.sort((a, b) => b.point - a.point);
        fakeData.forEach((data, index) => {
            let labelName = cellList[index].getChildByName('Name').getComponent(cc.Label);
            let labelRank = cellList[index].getChildByName('Rank').getComponent(cc.Label);
            let titlePoint = cellList[index].getChildByName('TitlePoint');
            let labelPoint = titlePoint.getChildByName('Point').getComponent(cc.Label);
            labelPoint.string = data.point + ' points';
            labelName.string = data.username;
            labelRank.string = index + 1;
        });
        cellList[0].color = cc.Color.RED;
        cellList[1].color = cc.Color.ORANGE;
        cellList[2].color = cc.Color.YELLOW;
    }
});
