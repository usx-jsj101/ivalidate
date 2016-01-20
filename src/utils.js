var utils = utils || {};

utils.byId=function(selector){
	return document.getElementById(selector);
}

utils.addEvent = function(el, type, fn, capture) {

    el.addEventListener(type, fn, !!capture);
};

utils.removeEevent = function(el, type, fn, capture) {

    el.removeEventListener(type, fn, !!capture);
};

utils.changeTip = function(el, attr, message) {

    var res = document.getElementById("it-" + attr);
    res.innerHTML = message;
}
utils.addTargetId = function(target, el) {

    var re;
    eval('re = /(<[^>]+for=["\\\']' + target.id + '["\\\'][^>]*)(>)([^>]*?)(<\\/[^>]+>)/;');
    el.innerHTML = el.innerHTML.replace(re, "$1 id = 'it-" + target.id + "'$2$3$4");
}