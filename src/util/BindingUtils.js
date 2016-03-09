/**
 * Created by Gaurang on 6/14/2015.
 */
this.plainjs = this.plainjs||{};

(function() {
    "use strict";

    var BindingUtil = function() {};

    var instance = null;

    BindingUtil.getInstance = function(){
      if (!instance){
          instance = new BindingUtil();
      }
        return instance;
    };

    var p = BindingUtil.prototype;

    var BindObjDictionary = {};

    function Binds (_srcObj, _srcProp,_evtname, _targObj, _targProp) {
        var srcObject = new Object();
        var srcPropStr = _srcProp+"prop";
        var srcObjKey = null;
        if(_srcObj.nodeName) {
            var eleid = _srcObj.id;
            srcObjKey = eleid;
            if (BindObjDictionary[srcObjKey] == null) {
                BindObjDictionary[srcObjKey] = _srcObj;
            }
            $(_srcObj).on(_evtname, synchronise);
            srcObject = BindObjDictionary[srcObjKey];
        }else{
            srcObjKey = _srcObj;
            if (BindObjDictionary[srcObjKey] == null) {
                BindObjDictionary[srcObjKey] = _srcObj;
            }
            $(_srcObj).on(_evtname, synchronise);
            srcObject = BindObjDictionary[srcObjKey];
        }


        if(srcObject.srcPropArray == null){
            srcObject.srcPropArray = [];
        }
        if (srcObject[srcPropStr] == null) {
            srcObject.srcPropArray.push(_srcProp);
            srcObject[srcPropStr] = new Object();
            if(typeof(_srcObj[_srcProp]) === 'function'){
                srcObject[srcPropStr].value = _srcObj[_srcProp]();
            }else{
                srcObject[srcPropStr].value = _srcObj[_srcProp];
            }

        }
        if (srcObject[srcPropStr].bindObjArray == null) {
            srcObject[srcPropStr].bindObjArray = [];
        }
        var targetObject = getTargetObject(_targObj,_targProp);
        srcObject[srcPropStr].bindObjArray.push(targetObject);
        BindObjDictionary[srcObjKey]  = srcObject;
    }

    function synchronise(event){
        event.preventDefault();
        var srcObjfrmEvt = event.target;
        var eleid;
        console.info(typeof  srcObjfrmEvt);
       if(srcObjfrmEvt.id) {
           eleid = srcObjfrmEvt.id;
        }else {
           eleid = srcObjfrmEvt;
        }
        var srcObject = BindObjDictionary[eleid];
        var srcPropArrayLen = srcObject.srcPropArray.length;
        for(var i=0;i< srcPropArrayLen;i++ ){
            var tmpProp = srcObject.srcPropArray[i];
            var tmpPropStr = tmpProp+"prop";
            // compare
            var tmpval;
            if(typeof(srcObject[tmpProp]) === 'function'){
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
            if(typeof(srcObject[srcProp]) === 'function'){
                tmpval = srcObject[srcProp]();
            }else{
                tmpval = srcObject[srcProp];
            }
            var tartmpval;
            if(tarObj.obj != null){
                if(typeof(tarObj.obj[tarObj.prop]) === 'function'){
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

    p.addBinding = function(srcObj, srcProp,evtname, targObj, targProp, twoway) {
        Binds(srcObj, srcProp,evtname, targObj, targProp);
        if(twoway){
            Binds(targObj, targProp,evtname,srcObj, srcProp);
        }
    }


    p.removeBinding = function (srcObj,evtname){
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

    plainjs.BindingUtil = BindingUtil;

}());