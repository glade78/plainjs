/**
 * Created by Gaurang on 7/17/2015.
 */

this.plainjs = this.plainjs || {};

(function () {
    "use strict";

    var BaseEvent = function (type, bubbles, cancelable,argument) {
        this.initialize(type, bubbles, cancelable);
        this.arg = argument;
    };

    var p = createjs.extend(BaseEvent, createjs.Event);

    p.Event_initialize = p.initialize;

    p.arg = null;

    p.clone = function() {
        return new BaseEvent(this.type,this.bubbles,this.cancelable,this.arg);
    };

    plainjs.BaseEvent = createjs.promote(BaseEvent,"Event");;

}());