/**
 * Created by Gaurang on 7/15/2015.
 */

this.plainjs = this.plainjs || {};

(function () {
    "use strict";

    var AbstractModel = function (_modelId) {
        this.modelId = _modelId;

    };

    var p = createjs.extend(AbstractModel, createjs.EventDispatcher);

    p.modelId = null;

    p.getId = function(){
        return this.modelId;
    };

    p.addEventListener = function(_evtId, _targetObj){

    };

    p.removeAllEventListeners = function(){

    };

    p.getObject = function(_objectId){

    };

    p.addListener = function (_evtId){

    };

    p.handleEvent = function(_event){

    };

    p.dispatchEvent = function(_event){

    };



    plainjs.AbstractModel = createjs.promote(AbstractModel,"EventDispatcher");

}());
