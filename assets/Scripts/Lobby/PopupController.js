const Emitter = require('MEmitter');
const EventsKey = require('EventsKey');
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
        this.initEventsMap();
        this.registerEventsMap();
    },

    initEventsMap() {
        this.eventsMap = {
            [EventsKey.SHOW_SETTING_POPUP]: this.showSetting.bind(this),
            [EventsKey.SHOW_RANK_POPUP]: this.showRank.bind(this),
            [EventsKey.HIDE_SETTING_POPUP]: this.hideSetting.bind(this),
            [EventsKey.HIDE_RANK_POPUP]: this.hideRank.bind(this)
        };
    },

    registerEventsMap() {
        Emitter.instance.registerEventsMap(this.eventsMap);
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

    removeEventsMap() {
        Emitter.instance.removeEventsMap(this.eventsMap);
    },

    onDestroy() {
        this.removeEventsMap();
    }

});
