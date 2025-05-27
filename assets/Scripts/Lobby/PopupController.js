const Emitter = require('MEmitter');
cc.Class({
    extends: cc.Component,

    properties: {
        popupSetting: {
            default: null,
            type: require('PopupItem')
        },
        popupRank: {
            default: null,
            type: require('PopupItem')
        },
    },

    onLoad() {
        Emitter.instance.registerEvent('showSetting', this.showSetting.bind(this));
        Emitter.instance.registerEvent('showRank', this.showRank.bind(this));
        Emitter.instance.registerEvent('hideSetting', this.hideSetting.bind(this));
        Emitter.instance.registerEvent('hideRank', this.hideRank.bind(this));
    },

    showSetting() {
        this.popupSetting.show();
    },

    showRank() {
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
        this.popupRank.show(fakeData);
    },

    hideSetting() {
        this.popupSetting.hide();
    },

    hideRank() {
        this.popupRank.hide();
    },

});
