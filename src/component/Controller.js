/**
 * Created by Gaurang on 1/26/2015.
 */
// namespace:
this.plainjs = this.plainjs || {};

(function () {
    "use strict";

    var Controller = function () {
    };

    var ct = Controller.prototype;

    // Properties
    ct.controllerId = null;
    ct.moduleId = null;

    // Methods
    ct.beforeInitialise = function () {
        //setConfig
        //setRouteConfig
        //loadConfig
        //loadRouteConfig
        //createViewsModels
        //loadViewsModels
    };

    ct.initialise = function () {
        //initialiseViewModels
    };

    ct.afterInitialise = function () {
        //bindViewEvents
        //bindModelEvents
        //bindAppModuleEvents
        //bindRouteEvents
    };

    ct.start = function () {
        //launchView
    };

    ct.destroy = function () {
        /*destroyView
         removeViewEventBinding
         view.destroy
         destroyModel
         removeModelEventBinding
         model.destroy
         destroyMe
         removeRouterEvents
         removeAppModuleEvents
         */
    };

    function onRouteEvent() {
    }; // Handle All Route Events
    function onViewEvent() {
    }; // Handle All View Event
    function onModelEvent() {
    }; // Handle All Model Event
    function onAppModuleEvent() {
    }; // Handle AppModule Event


    plainjs.Controller = Controller;


}());