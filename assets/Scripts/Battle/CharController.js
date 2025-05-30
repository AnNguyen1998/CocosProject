const Emitter = require('MEmitter');
const EventKey = require('EventsKey');
cc.Class({
    extends: cc.Component,

    properties: {
        charPrefabList: [cc.Prefab],
        delayTime: {
            default: 0,
            type: cc.Float,
        },
        charList: {
            default: [],
            type: require('CharItem'),
            visible: false,
        },
    },

    onLoad() {
        this.schedule(this.randomInitChar, this.delayTime);
        this.initEvents();
    },

    changeCoordinate() {
        
    },

    randomInitChar() {
        let randomIndex = Math.floor(Math.random() * this.charPrefabList.length);
        let charNode = cc.instantiate(this.charPrefabList[randomIndex]);
        charNode.parent = this.node;
        this.charList.push(charNode.getComponent('CharItem'));
    },

    initEvents() {
        this.eventsMap = {
            [EventKey.ON_DIE_MONSTER]: this.removeChar.bind(this),
        };
        Emitter.instance.registerEventsMap(this.eventsMap);
    },

    removeChar(charIDRemove) {
        this.charList = this.charList.filter((charItem) => {
            return charItem.charID != charIDRemove;
        });
    },

    onDestroy() {
        this.unschedule(this.randomInitChar);
        Emitter.instance.removeEventsMap(this.eventsMap);
    }

});
