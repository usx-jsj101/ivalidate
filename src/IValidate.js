import {prepare} from "./prepare.js"
import {validate} from "./validate.js"
export default class IValidate{
	/**
     * 创建一个校验类示例 
     * @param {object} 配置数据 
     */
    constructor({
		rules, data
	}){
        
        this.rules =  prepare(rules)
		this.data = data
    }

	/**
	 * 执行校验
	 */
    exec(){
        return validate()
    }

    collect(){

    }

    validate(){
        
    }

    static exec(option){
        return validate(option);
    }
}
