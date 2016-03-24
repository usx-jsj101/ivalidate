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

function FormEmt(emt,rule) {

    this.emt = emt;
    this.value = emt.value;
    this.rule = rule.split(',');
}

FormEmt.prototype = {

    verification: function() {
        var val = this.value;
        return this.rule.every(function(item, index) {
            var reg_express = reg[item].reg,
                pat = new RegExp(reg_express),
                message = reg[item].message;
            console.log(pat);
            console.log(val);
            console.log(pat.test(val));
            return pat.test(val);
        }, true)
    },
    createTip: function() {

    }
}

var formElementReg = /select|input|textarea/i;

var ivalidate = function(selector, params) {

    return new ivalidate.fn.init(selector,params);
};

ivalidate.prototype = ivalidate.fn = {

    init: function(name,cb) {
        this.eles = [];
        name=name ||"";
        this.target = document.forms[name];
        if(this.target){
           var eles=this.target.elements;
           for(var i=0;i<eles.length;i++){

                var item=eles[i],iv=item.getAttribute("iv");
                console.log(item);
                if(item.name!=="" && iv){
                     var fe=new FormEmt(item,iv);
                     this.eles.push(fe);
                }
           } 
        }
        this._onSubmit(cb);  
    },

    _setRegulare: function() {
        //todo 设置验证规则
    },

    _onSubmit: function(cb) {
        var that=this;
        console.log(cb);
        utils.addEvent(this.target, "submit", function(event) {
            var res=that._validate();
            if(cb && cb["submit"]){
                cb["submit"].call(that,res);
                event.preventDefault();
            }else{
                if(!res.result){
                    alert("fail");
                    event.preventDefault();
                }
            }

        })
    },
    _validate: function() {
        var res=this.eles.every(function(emt, ix) {
            return emt.verification();
        })
        return {result:res};
    }
}

ivalidate.fn.init.prototype = ivalidate.prototype;




