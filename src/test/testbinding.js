/**
 * Created by Gaurang on 4/30/2015.
 */


var BindDicRefArray = [];
//var BindObjDictionary = {};


var ele1 = document.getElementById("inputtxt1");
var ele2 = document.getElementById("inputtxt2");
var modela = {name: "john"};
var modelb = {value: "test2"};



//$("#inputtxt1").on("change",test2);
//$("#inputtxt2").on("change",test1);

//var srcProp = "value";



//$(ele1).data("binding-trgt",modela);
//$(ele2).data("binding-trgt",modela);

function test2(event){
    event.preventDefault();
    ele2.value =  event.target.value;
    modela["name"] = ele1.value;
    console.log(modela.name);
    var ele3 = event.target;
    console.log($(ele3).data("binding-trgt"));
    console.log("element :"+event.target);
    //var evt = new plainjs.BaseEvent("Test",false,true);
    //this.dispatchEvent(evt);

   // console.log("element prop :"+BindObjDictionary[event.target].srcProp);
}

function test1(event){
    event.preventDefault();
    ele1.value =  event.target.value;
    var ele3 = event.target;
    console.log($(ele3).data("binding-trgt"));
}




function Binds (srcObj, srcProp,evtname, targObj, targProp) {
    var srcObject;
    var srcPropStr = srcProp+"prop";
    if(srcObj.nodeName) {
        var eleid = srcObj.id;
        if (BindObjDictionary[eleid] == null) {
            BindObjDictionary[eleid] = srcObj;
        }
        $(srcObj).on(evtname, synchronise);
        srcObject = BindObjDictionary[eleid];
    }else{
        if (BindObjDictionary[srcObj] == null) {
            BindObjDictionary[srcObj] = srcObj;
        }
        $(srcObj).on(evtname, synchronise);
        srcObject = BindObjDictionary[srcObj];
    }


    if(srcObject.srcPropArray == null){
        srcObject.srcPropArray = [];
    }
    if (srcObject[srcPropStr] == null) {
        srcObject.srcPropArray.push(srcProp);
        srcObject[srcPropStr] = new Object();
        if(typeof(srcObj[srcProp]) == 'function'){
            srcObject[srcPropStr].value = srcObj[srcProp]();
        }else{
            srcObject[srcPropStr].value = srcObj[srcProp];
        }

    }
    if (srcObject[srcPropStr].bindObjArray == null) {
        srcObject[srcPropStr].bindObjArray = [];
    }
    var targetObject = getTargetObject(targObj,targProp);
    srcObject[srcPropStr].bindObjArray.push(targetObject);
    BindObjDictionary[srcObj]  = srcObject;
}

function synchronise(event){
    event.preventDefault();
    var srcObjfrmEvt = event.target;
    var eleid;
    console.info(typeof  srcObjfrmEvt);
    if(typeof srcObjfrmEvt == 'object' ) {
        eleid = srcObjfrmEvt;
    }else {
        eleid = srcObjfrmEvt.id;
    }
    var srcObject = BindObjDictionary[eleid];
    var srcPropArrayLen = srcObject.srcPropArray.length;
    for(var i=0;i< srcPropArrayLen;i++ ){
        var tmpProp = srcObject.srcPropArray[i];
        var tmpPropStr = tmpProp+"prop";
        // compare
        var tmpval;
        if(typeof(srcObject[tmpProp]) == 'function'){
            tmpval = srcObject[tmpProp]();
        }else{
            tmpval = srcObject[tmpProp];
        }
        if(srcObject[tmpPropStr].value != tmpval){
            synchroniseTargetObj(srcObject,tmpPropStr,tmpProp);
            srcObject[tmpPropStr].value = srcObject[tmpProp];
        }
    }

}



function synchroniseTargetObj(srcObject,srcPropStr,srcProp){
    var tarObjArray =  srcObject[srcPropStr].bindObjArray;
    var tarObjArrayLen = tarObjArray.length;
    for(var j=0;j< tarObjArrayLen;j++ ){
        var tarObj = tarObjArray[j];
        var tmpval;
        if(typeof(srcObject[srcProp]) == 'function'){
            tmpval = srcObject[srcProp]();
        }else{
            tmpval = srcObject[srcProp];
        }
        var tartmpval;
        if(tarObj.obj != null){
            if(typeof(tarObj.obj[tarObj.prop]) == 'function'){
                tarObj.obj[tarObj.prop](tmpval);
            }else{
                tarObj.obj[tarObj.prop] = tmpval;
            }
        }
    }
}



function getTargetObject(targObj, targProp){
    var tarObject = new Object();
    tarObject.obj = targObj;
    tarObject.prop = targProp;
    return tarObject;
}

function addBinding (srcObj, srcProp,evtname, targObj, targProp,twoway) {
    Binds(srcObj, srcProp,evtname, targObj, targProp);
    if(twoway){
        Binds(targObj, targProp,evtname,srcObj, srcProp);
    }
}


function removeBinding(srcObj,evtname){
    // determine is it dom element or plain object
    var srcObject;
    var srcPropStr = srcProp+"prop";
    if(srcObj == null)
        return;
    if(srcObj.nodeName) {
        var eleid = srcObj.id;
        if (BindObjDictionary[eleid] != null) {
            srcObject =  BindObjDictionary[eleid] ;
            srcObject.removeEventListener(evtname,synchronise);
        }

    }else{
        if (BindObjDictionary[srcObj] != null) {
            srcObject = BindObjDictionary[srcObj];
            srcObject.removeEventListener(evtname,synchronise);
        }
    }

    if(srcObject.srcPropArray.length > 0){

        var srcPropArrayLen = srcObject.srcPropArray.length;
        for(var j=0;j< srcPropArrayLen;j++ ){
            var srcProp = srcObject.srcPropArray[j];
            var srcPropStr = srcProp+"prop";
            srcObject[srcPropStr].bindObjArray = [];
        }
    }
}


/*
var CustomButton = function(){
    this.length = 10;

     this.setValue = function (val){
        this.length = val;
        this.dispatchEvent("change",this);
    }

    this.getValue  = function(){
        return this.length;
    }


}*/


var CustomButton = new Class({
    extend: createjs.EventDispatcher,

    length :null,

    constructor:function(){
        console.log("Super constructor called");
        this._length = 11;
        var test = 45;
    },

    init: function() {
        console.log("Super init called"+test);
        console.log("_length" +this._length);
        this._length = 10;
        console.log("_length" +this._length);
    },
    get length() {
        return this._length;
    },
    set length(value) {
        if (this._length == value) return;
        var oldName = this._length;
        this._length = value;
        //var evt = new plainjs.BaseEvent("Test",false,true,"20");
        //var ele = document.getElementById("inputtxt1");
        //this.dispatchEvent(evt);
        this.dispatchEvent("change",this);
    }

});
//http://www.bryandragon.com/articles/playing-with-javascript-inheritance/
//http://www.moock.org/lectures/troublewithjs/
var custom2Button = new Class({
   extend: CustomButton,

    constructor:function(){
        console.log("Subclass custom2Button constructor");
       // superref = CustomButton.prototype;

    },

    init: function(){
       // this.$parent["init"].apply(this.$parent, Array.prototype.slice.call(arguments, 1));

    }
});

var custom3Button = new Class({
    extend: custom2Button,

    constructor:function(){

        //superref = custom2Button.prototype;

    },

    init: function(){

    }
});


plainjs.BingdingUtil.addBinding(ele1,"value",ele2,"value",false);
plainjs.BingdingUtil.addBinding(ele1,"value","change",modelb,"value",false);
//modela.name = "testing";

createjs.EventDispatcher.initialize(CustomButton.prototype);
var myCustomButton = new CustomButton();

//addBinding(myCustomButton,"getValue","change",ele1,"value",false);
//myCustomButton.setValue(20);
//addBinding(ele1,"value","change",myCustomButton,"length",false);
//addBinding(ele1,"value","change",ele2,"value",false);
addBinding(myCustomButton,"length","change",ele2,"value",false);
myCustomButton.length = 10;

//console.log("modela.name :"+modela.name);
//console.log("modelb.value :"+modelb.value);
//modelb.value = "taketwo";
//console.log("modela.name :"+modela.name);
//var custom2Button1 = new custom2Button();
//custom2Button1.init();
//$("#inputtxt1").on("Test",testing);
//myCustomButton.addEventListener("Test",testing);

function testing(event){
 var evtarg = event.arg;
 console.log(evtarg.toString());
};
