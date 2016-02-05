/**
 * Created by Gaurang on 7/22/2015.
 */

this.plainjs = this.plainjs || {};

(function () {
    "use strict";

    var BaseController = function (_controllerId,_contextInfoObj,_moduleId,_moduleManager) {
        this.AbstractController_constructor(_controllerId,_contextInfoObj);
        this.moduleId = _moduleId;
        this.moduleManager = _moduleManager;
    };

    var p = createjs.extend(BaseController, plainjs.AbstractController);

    p.views = [];
    p.models = [];
    p.services = [];
    p.moduleId = null;
    p.moduleManager = null;


    p.createElements = function(){
        this.AbstractController_createElements(); // call parent method;
        var baseevt = new plainjs.BaseEvent("test",false,false,"20");
        this.dispatchEvent(baseevt);

    };

    // create views, service,model on-demand

    p.createView = function(){

    };

    p.createModel = function(){

    };

    p.createService = function(){

    };

    p.assignEventsListener = function(_contextElementId) {

    };

    p.getView = function(_viewId){

    };

    p.getModel = function(_modelId){

    };

    p.getService = function(_serviceId){

    };

    // Launch Default view,model,service
    p.launch = function (){

    };







    plainjs.BaseController = createjs.promote(BaseController,"AbstractController");

}());