/**
 * Created by Gaurang on 2/5/2015.
 */

// namespace:
this.plainjs = this.plainjs || {};

(function () {
    "use strict";

    var ArrayCollection = function (arraydata) {
        this.init(arraydata);
    };

    var ac = ArrayCollection.prototype;

    var data = null;

    ac.init = function (arrayData) {
        this.data = Array.isArray(arrayData) ? arrayData : [];
    };

    ac.addItem = function (item) {
        this.addItemAt(item, this.data.length);
    };

    ac.addItemAt = function (item, index) {
        this.data.splice(index, 0, item);
        // this.dispatchEvent(new CollectionEvent(CollectionEvent.COLLECTION_CHANGE,this,CollectionEventKind.ADD,index,-1,[item]));
    };

    ac.getItemAt = function (index) {
        return( this.data[ index ] );
    };

    ac.getItemIndex = function (item) {
        for (var i = 0; i < this.data.length; i++) {
            if (this.data[ i ] == item) {
                return( i );
            }
        }
        return( -1 );
    };

    ac.removeAll = function () {
        this.data = [];
        //this.dispatchEvent(new CollectionEvent(CollectionEvent.COLLECTION_CHANGE,this,CollectionEventKind.RESET,-1,-1,[]));
    };

    ac.removeItemAt = function (index) {
        var item = this.data.splice(index, 1)[ 0 ];
        this.length = this.data.length;
        //this.dispatchEvent(new CollectionEvent(CollectionEvent.COLLECTION_CHANGE,this,CollectionEventKind.REMOVE,index,-1,[item]));
    };

    ac.setItemAt = function (item, index) {
        this.data[ index ] = item;
        //this.dispatchEvent(new CollectionEvent(CollectionEvent.COLLECTION_CHANGE,this,CollectionEventKind.ADD,index,-1,[item]));
    };

    ac.length = function () {
        return ( this.data.length );
    };

    ac.toArray = function () {
        return( this.data );
    };

    plainjs.ArrayCollection = ArrayCollection;

}());