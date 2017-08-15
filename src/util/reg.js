import reg from "./reg/number"

export function test(value,type){
    var result = {}
    result = reg[type].call(value)
    return result;
}

