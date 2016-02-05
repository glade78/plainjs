/**
 * Created by Gaurang on 7/14/2015.
 */

this.plainjs = this.plainjs || {};

(function () {
    "use strict";

    var AbstractController = function (_controllerId,_contextInfoObj) {
        this.controllerId = _controllerId;
        this.contextInfoObj = _contextInfoObj;
        //this.EventDispatcher_constructor();

    };

    var p = createjs.extend(AbstractController,createjs.EventDispatcher);



    p.contextInfoObj = null;
    p.controllerId = null;


    p.importScriptsArray = [];

    p.implements = ['iListener','iController'];

    p.getId = function(){
      return this.controllerId;
    };

    p.init = function(){
        //loadContextObject();

        this.createElements();
    };


    function loadImports(){
        //var importScripts = new plainjs.PreloadScripts();
        //var scpArray = ['../js/src/core2/BaseEvent.js'];
        //importScripts.loadScripts(scpArray,loadCompleted);
    }

    function loadImportsCompleted(){
        //console.log("loadComepleted");

    }

    p.loadContextObject = function(){

    };

    p.onContextObjectLoaded = function(){

    };


    p.readContextObject = function(){
        loadImports();
    };

    p.createElements = function(){
        console.log("Abstract Controller Method");
    };

    p.getEventMap = function(){

    };

    p.readEventMap = function(){

    };



    p.launch = function(){

    };



    p.removeAllEventListeners = function(){

    };

    p.getObject = function(_objectId){

    };

    // iListeners Method
    p.addListener = function (_evtId){

    };

    // iListeners Method
    p.handleEvent = function(_event){

    };




    plainjs.AbstractController = createjs.promote(AbstractController,"EventDispatcher");

}());