(function(window) {
        'use strict';

var utils = utils || {};

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
var reg = {
    require: {
        reg: /[\w\W]+/,
        message: "内容不能为空"
    },
    digit: {
        reg: /\d*/,
        message: "请输入数字"
    },
    phone: {
        reg: /\d{11}/,
        message: "请输入正确手机号码"
    },
    mail: {
        reg: /[a-zA-Z0-9_]+@[a-zA-Z0-9]+\.[a-zA-Z]+/,
        message: "请输入正确的邮箱地址"
    }
};


var ivalidate = function(target) {
    this.target = target;
};

ivalidate.prototype = {

    init: function() {

        var list = this.target.querySelectorAll('[iv]');
        //addTargetId(list, this.target);

        for (var i = 0; i < list.length; i++) {

        
            (function(input, form) {

                addValidateEvent(input, form);

            })(list[i], this.target)
        };
    }
}

function addTargetId(list, target) {

    for (var i = 0; i < list.length; i++) {

        (function(input, form) {

            utils.addTargetId(input, form);

        })(list[i], target)

    };
}

function addValidateEvent(ipt, form) {


    var validateItems = ipt.getAttribute("iv").split(" ");


    console.log(ipt);
    utils.addEvent(ipt, "change", function() {

        console.log("change");
        checkInput(validateItems[0], ipt, form, "");

    })

}



function checkInput(prop, ipt, form, attr) {

    var reg_express = reg[prop].reg,
        pat = new RegExp(reg_express),
        message = reg[prop].message;
    if (pat.test(ipt.value)) {
        message = "正确";
    } else {
        if (attr != "") {
            message = attr;
        }
    }
    utils.changeTip(form, prop, message);
}

	window.Ivalidate=ivalidate;
})(window);