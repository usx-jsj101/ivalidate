var utils = (function() {
    'use strict';

    var me = {};

    me.addEvent = function(el, type, fn, capture) {
        el.addEventListener(type, fn, !!capture);
    };

    me.removeEevent = function(el, type, fn, capture) {
        el.removeEventListener(type, fn, !!capture);
    };

    me.changeTip = function(el,attr,message) {
      var res=document.getElementById("it-"+attr);
      res.innerHTML=message;
    }
    me.addTargetId = function(target,el) {
    	var re;
      eval('re = /(<[^>]+for=["\\\']' + target.id + '["\\\'][^>]*)(>)([^>]*?)(<\\/[^>]+>)/;');
        el.innerHTML=el.innerHTML.replace(re,"$1 id = 'it-"+target.id+"'$2$3$4");
    }

    return me;
}());
