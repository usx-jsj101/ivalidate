(function(window) {
        'use strict';


var utils=function(){

}

utils.addEvent = function(el, type, fn, capture) {
    el.addEventListener(type, fn, !!capture);
};

utils.removeEevent = function(el, type, fn, capture) {
    el.removeEventListener(type, fn, !!capture);
};

utils.changeTip = function(el,attr,message) {
  var res=document.getElementById("it-"+attr);
  res.innerHTML=message;
}
utils.addTargetId = function(target,el) {
  var re;
  eval('re = /(<[^>]+for=["\\\']' + target.id + '["\\\'][^>]*)(>)([^>]*?)(<\\/[^>]+>)/;');
    el.innerHTML=el.innerHTML.replace(re,"$1 id = 'it-"+target.id+"'$2$3$4");
}

var reg = {
    phone: {
        reg: /\d{11}/,
        message: "请输入正确手机号码"
    },
    mail: {
        reg: /[a-zA-Z0-9_]+@[a-zA-Z0-9]+\.[a-zA-Z]+/,
        message: "请输入正确的邮箱地址"
    }
}

var ivalidate=function(target){
  this.target=target;
}

ivalidate.prototype={
  init:function(){
    var list = this.target.getElementsByTagName('input');
    addTargetId(list,this.target);
    for (var i = 0; i < list.length; i++) {
        (function(input, form) {
            persetReg(input, form);
        })(list[i], this.target)
    };
  }
}

function addTargetId(list,target){
  for (var i = 0; i < list.length; i++) {
      (function(input, form) {
        utils.addTargetId(input, form);
      })(list[i], target)
  };
}

function persetReg(ipt, form) {
    for (var prop in reg) {
        if (reg.hasOwnProperty(prop)) {
            var attr = ipt.getAttribute(prop);
            if (attr != null) {
                (function(object, prams, attribute, input, form) {
                    utils.addEvent(input, "change", function() {
                        checkInput(object, prams, attribute, input, form);
                    })
                })(reg, prop, attr, ipt, form)
            }
        }
    }
}

function checkInput(reg, prop, attr, ipt, form) {
    console.log(ipt);
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