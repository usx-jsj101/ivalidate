import dom from "./util/dom.js"
export function prepare(option){
    var data = {}
    var f
    if(typeof option === "string"){
        f = dom.q(option)
    }else if(typeof option === "object"){
        data = option
    }
    return data;
}