(function(window) {
        'use strict';

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

var ivalidate = (function() {
    'use strict';

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

    function init(target) {
        var list = target.getElementsByTagName('input');
        for (var i = 0; i < list.length; i++) {
            persetReg(list[i],target);
        };
    };

    function persetReg(ipt,form) {
        for (var prop in reg) {
            if (reg.hasOwnProperty(prop)) {
                var attr = ipt.getAttribute(prop);
                if (attr != null) {
                    var reg_express = reg[prop].reg,
                        pat = new RegExp(reg_express);
                    if (pat.test(ipt.value)) {
                        console.log(true);
                    } else {
                        utils.getByAttr(form,prop,reg[prop].message);
                        if (attr == "") {
                            console.log(reg[prop].message);
                        } else {
                            console.log(attr);
                        }
                    }
                }
            }
        }
    }

    return {
        begin: init
    };
}());

	window.Ivalidate=ivalidate;
})(window);