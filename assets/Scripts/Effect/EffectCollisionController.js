const Emitter = require('MEmitter');
const EventKey = require('EventsKey');
const Offset = cc.v2(100,0);
cc.Class({
    extends: cc.Component,

    properties: {
        effectPrefab: {
            default: null,
            type: cc.Prefab,
        },
    },

    onLoad() {
        this.initEffectCollision();
        this.registerEvents();
    },

    initEffectCollision() {
        this.EventsMap = {
            [EventKey.ON_COLLISION_ENTER]: this.onCollisionProcess.bind(this),
        }
    },

    registerEvents() {
        Emitter.instance.registerEventsMap(this.EventsMap);
    },

    onCollisionProcess(position) {
        let effectNode = cc.instantiate(this.effectPrefab);
        let worldPosition = this.node.convertToWorldSpaceAR(cc.v2(0, 0));
        let localPosition = this.node.convertToNodeSpaceAR(worldPosition);
        this.node.setPosition(localPosition.x + position.x + 720 - Offset.x, localPosition.y + position.y);
        this.node.addChild(effectNode);
    },

    onDestroy() {
        Emitter.instance.removeEventsMap(this.EventsMap);
    }

});
