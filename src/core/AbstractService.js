/**
 * Created by Gaurang on 7/16/2015.
 */

this.plainjs = this.plainjs || {};

(function () {
    "use strict";

    var AbstractService = function (_serviceId) {
        this.serviceId = _serviceId;

    };

    var p = createjs.extend(AbstractService, createjs.EventDispatcher);

    p.serviceId = null;

    p.getId = function(){
        return this.modelId;
    };

    p.addListener = function (_evtId){

    };

    p.handleEvent = function(_event){

    };

    p.dispatchEvent = function(_event){

    };

    p.isActive = function(){
      return true;
    };


    plainjs.AbstractService = createjs.promote(AbstractService,"EventDispatcher");

}());