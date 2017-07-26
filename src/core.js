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

    tool.getFormElementList=function(targetForm){
	
        var list=[];
        if(targetForm.tagName.toLowerCase()=="form"){
            for (var i = targetForm.elements.length - 1; i >= 0; i--) {
                list.push(targetForm.elements[i]);  
            }
        }

        return list;
    }
	
	function FormElement(targetFormElement){
		var element={};
		
		this.input=targetFormElement;
		this.tagName=this.input.tagName;
		
		if(this.tagName=='textarea'){
			
			this.type="textarea";	
			element=new inputElement();
		}else if(this.tagName=="select"){
			
			this.type="select";
			element=new selectElement();
		}else{
			
            this.type=this.input.type;
			switch(this.input.type){

				case "text" :element = new inputElement();
							 break;
				case "checkbox":element = new checkboxElement();
								break;
				case "radio":element = new radioElement();
							 break;
			    default :element=false;
			}
		}
		this.element=element;

	}

	FormElement.prototype={
		getType:function()
			{
				return this.type;
			}
	}

	function inputElement(){

	}

	inputElement.prototype=new FormElement();

	function textareaElement(){

	}
	
    textareaElement.prototype=new FormElement();


	function selectElement(){
	}
	
	function checkboxElement(){
	}

	function radioElement(){
	}

	
    function Core(targetForm,userOption){

        this.option=userOption || {};
        this.form=targetForm;
		this.elements=tool.getFormElementList(targetForm);
    }

	Core.prototype.validate=function(){
		
	}

    Core.prototype.auto=function(){

        tool.getFormElementList(this.form);
    };

    Core.prototype.exec=function(){

    };

    window.ivalidate = validate;
})(window)
