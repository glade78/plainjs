
var CustomButton = function(ele){
    this.elementid = ele;
    this.htmlElement = null;
    var thisRef = this;
    registerElement(this.elementid);
    this.htmlElement.addEventListener("click",onElementClicked,false);

    function registerElement(htmleleid){
        var targetElement = document.getElementById(htmleleid);
        if (targetElement != null) {
            thisRef.htmlElement = targetElement;
        }
    }

    function onElementClicked (evt){
        var baseevt = new plainjs.BaseEvent("test",false,false,"20");
        thisRef.dispatchEvent(baseevt);
    }
}

function preload(){
    var importScripts = new plainjs.PreloadScripts();
    var scpArray = ['../js/src/core2/BaseEvent.js',
        '../js/src/core2/AbstractController.js',
        '../js/src/core2/BaseController.js'];
    importScripts.loadScripts(scpArray,loadCompleted);
}

function loadCompleted(){
    console.log("loadComepleted");
    init();
}

function init(){
    var testController = new plainjs.BaseController("testCtr",null,"testModule",null);
    testController.addEventListener("test",onClicked);
    testController.init();
    var ctid = testController.controllerId;
    //createjs.EventDispatcher.initialize(CustomButton.prototype);
    //var myCustomButton = new CustomButton("butt");
    //myCustomButton.addEventListener("test",onClicked);
}

function onClicked(evt) {
    console.log("test: "+evt.target.elementid);
}

//preload();

//var req =  plainjs.AjaxService.getRequest(plainjs.AjaxService.GET,"http://192.168.0.1");
//console.log("req" +req.token);

//var req1 = plainjs.AjaxService.getRequest(plainjs.AjaxService.GET,"http://192.168.0.1");
//console.log("req" +req1.token);
