/**
 * Created by Gaurang on 4/30/2015.
 */


var CustomButton = function(){
    this.length = 10;

    this.setValue = function (val){
        this.length = val;
        this.dispatchEvent("change",this);
    }

    this.getValue  = function(){
        return this.length;
    }


};

createjs.EventDispatcher.initialize(CustomButton.prototype);
var myCustomButton = new CustomButton();



function bindInputTextBox(){
    var srcele = document.getElementById("inputtxt_1");
    var destele = document.getElementById("lbl_1");
    plainjs.BindingUtil.getInstance().addBinding(srcele,"value","change",myCustomButton,"setValue",false);
    plainjs.BindingUtil.getInstance().addBinding(myCustomButton,"getValue","change",destele,"value",false);
}

function removeBindInputTextBox(){
    var srcele = document.getElementById("inputtxt_1");
    plainjs.BindingUtil.getInstance().removeBinding(srcele,"value");
}

function bindPasswordTextBox(){
    var srcele = document.getElementById("pwd_2");
    var destele = document.getElementById("lbl_2");
    plainjs.BindingUtil.getInstance().addBinding(srcele,"value","change",destele,"value",false);
}

function bindCheckBoxTextBox(){
    var srcele = document.getElementById("chk_3");
    var destele = document.getElementById("lbl_3");
    plainjs.BindingUtil.getInstance().addBinding(srcele,"checked","change",destele,"value",false);
}


function bindSelectionBox(){
    var srcele = document.getElementById("mySelect");
    var destele = document.getElementById("lbl_4");
    plainjs.BindingUtil.getInstance().addBinding(srcele,"value","change",destele,"value",false);
}








