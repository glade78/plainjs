/**
 * Created by Gaurang on 1/26/2015.
 */

/**
 * Created by glade on 2/15/14.
 */
// namespace:
this.plainjs = this.plainjs || {};

(function () {
    "use strict";

    var View = function (_viewObj) {
        if(! typeof(_viewObj) === "ViewObject"){
            throw "ViewObject Require";
        }

        this.viewObject = _viewObj;
        //this.viewmediator = _viewObj.mediator;
        //this.viewId = _viewObj.viewId;
        //this.modelId = _viewObj.modelId;
       // this.controllerId = _viewObj.controllerId;
        //this.templateURL = _viewObj.templateUrl;

    };

    var v = createjs.extend(View, createjs.EventDispatcher);
    var templatedata = null;

    v.viewObject = null;
    v.viewmediator = null;
    v.model = null;
    v.htmlElement = null; // htmlTag Compiled from templateUrl


    v.currentState = "default";
    v.parentView = null;
    v.components = null;
    v.elementId = null;
    v.requires = [];



    v.constructView = function(){
        this.disableView();
        this.bindProperties();
        this.bindEvents();
        var baseevt = new plainjs.BaseEvent("viewConstructed",false,false,this);
        this.dispatchEvent(baseevt);
    };

    v.getViewContent = function(){

    };


    v.loadView = function () {
        if(this.viewObject.templateURL !== null) {
            var responder = new plainjs.Responder();
            responder.resultHandler = this.viewLoaded;
            responder.faultHandler = function(_req){
                throw "Error loading View  "+ this.viewObject.viewId;
            };
            plainjs.HTTPService.getInstance().send(plainjs.AjaxService.GET,null,this.viewObject.templateURL,responder);

        }
    };



    v.parseTemplate = function(_data){
        // process in subclass
    };

    function viewLoaded(_req){
        this.templatedata  = _req.responseText;
        var baseevt = new plainjs.BaseEvent("viewLoaded",false,false,this);
        this.dispatchEvent(baseevt);
        this.initView();

    };

    v.initView = function () {
        if(this.viewObject == null){
            throw "Cant initialise null view "
        }
        this.parseTemplate(this.templatedata);
        this.constructView();

        this.renderView();

    };



    v.renderView = function () {
        this.enableView();
        this.showView();
    };

    v.getComponent = function (componentId) {
        return this.components[componentId];
    };


    v._get_viewState = function () {
        return this.currentState;
    };

    v._set_viewState = function (stateName) {
        /* Concept data-view-state="login"
         */
        if (stateName != this.currentState) {

            var el = this.getElementById(this.elementId);
            var currentStateNode = el.querySelector('[data-view-state=' + this.currentStat + ']');
            var newStateNode = el.querySelector('[data-view-state=' + stateName + ']');
            currentStateNode.style.display = "none";
            newStateNode.style.display = "block";
            //this.dispatchEvent(new CollectionEvent(ViewEvent.CHANGE_VIEW_STATE,this,stateName));
        }

    };

    try {
        Object.defineProperties(v, {
            viewState: { get: v._get_viewState, set: v._set_viewState }
        });
    } catch (e) {} // TODO: use Log

    //Component Activate
    v.enableView = function () {

    };

    //Component DeActivate
    v.disableView = function () {

    };

    //
    v.hideView = function () {

    };

    v.showView = function () {

    };

    v.bindProperties = function () {

    };

    v.unbindProperties = function () {

    };

    v.bindEvents = function () {

    };

    v.unbindEvents = function () {

    };

    v.destroyView = function () {

    };



    plainjs.View = View;

}());
