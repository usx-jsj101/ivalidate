var utils = (function() {
    'use strict';

    var me = {};

    me.addEvent = function(el, type, fn, capture) {
        el.addEventListener(type, fn, !!capture);
    };

    me.removeEevent = function(el, type, fn, capture) {
        el.removeEventListener(type, fn, !!capture);
    };

    me.getByAttr = function(el,attr,message) {
    	var re;
    	eval('re = /(<[a-zA-Z]+ for="' + attr + '">)([\\s\\S]*?)(<\\/[a-zA-Z]+>)/;'); 
        console.log(el.innerHTML=el.innerHTML.replace(re,function(m,p1,p2,p3){
        	return p1+message+p3;
        }));
    }

    return me;
}());
