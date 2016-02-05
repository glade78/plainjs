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


//var binding  = new plainjs.BindingUtil();
var bindd = "plainjs.BindingUtil";
plainjs.BindingUtil.getInstance().addBinding(ele1,"value","change",ele2,"value",false);
//plainjs.BindingUtil.addBinding(ele1,"value","change",modelb,"value",false);
//modela.name = "testing";

createjs.EventDispatcher.initialize(CustomButton.prototype);
var myCustomButton = new CustomButton();

//addBinding(myCustomButton,"getValue","change",ele1,"value",false);
//myCustomButton.setValue(20);
//addBinding(ele1,"value","change",myCustomButton,"length",false);
//addBinding(ele1,"value","change",ele2,"value",false);
//addBinding(myCustomButton,"length","change",ele2,"value",false);
//myCustomButton.length = 10;

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
