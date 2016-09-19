(function(window) {

    var $ = window.$,
        tool={},
        defaultOption = {

        }

    function validate(targetSelector, userOption) {
        if(typeof(targetSelector)=="string"){
            targetSelector=document.querySelector(targetSelector);
        }
        return new Core(targetSelector,$.extend(true, defaultOption, userOption));
    }

    tool.getFromElementList=function(targetForm){
        var list=[];
        console.log(targetForm.elements.length);
        if(targetForm.tagName.toLowerCase()=="form"){
            for (var i = targetForm.elements.length - 1; i >= 0; i--) {
                console.log(targetForm.elements[i]);
            }
        }

        return list;
    }

    function Core(targetForm,userOption){
        this.option=userOption || {};
        this.form=targetForm;
    }

    Core.prototype.auto=function(){
        tool.getFromElementList(this.form);
    };

    Core.prototype.exec=function(){

    };

    window.ivalidate = validate;
})(window)
