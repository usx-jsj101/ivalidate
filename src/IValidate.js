import {prepare} from "./prepare.js"
import {validate} from "./validate.js"
class IValidate{
    constructor(option){
        
        this.data = prepare(option)
    }

    exec(){
        return validate(this.data)
    }

    static exec(option){
        return validate(option);
    }
}