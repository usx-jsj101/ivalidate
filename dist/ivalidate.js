(function(window) {
        'use strict';

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

var formElementReg = /select|input|textarea/i;


var ivalidate = function(selector) {

    return new ivalidate.fn.init(selector);
};

ivalidate.prototype = ivalidate.fn = {

    init: function(selector) {
        this.eleList = [];
        this.target = utils.byId(selector);
        var list = this.target.querySelectorAll('[iv]');
        //addTargetId(list, this.target);

        for (var i = 0; i < list.length; i++) {
            var node = list[i];
            if (node.nodeName.match(formElementReg)) {

                this.eleList.push(new formEmt(list[i]));
            }
        }
    },

    setRegulare: function() {
        //todo 设置验证规则
    },

    validate: function() {
        this.eleList.forEach(function(emt, index) {
            console.log(emt.verification());
        })
    }
}

ivalidate.fn.init.prototype = ivalidate.prototype;

var formEmt = function(emt) {

    this.emt = emt;
    this.value = emt.value;
    this.rule = emt.getAttribute("iv").split(" ");
}

formEmt.prototype = {

    verification: function() {
        var val = this.value;
        return this.rule.every(function(item, index) {
            var reg_express = reg[item].reg,
                pat = new RegExp(reg_express),
                message = reg[item].message;
            return pat.test(val);
        }, true)
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
    //utils.changeTip(form, prop, message);
}

	window.iv = ivalidate;
	})(window);
