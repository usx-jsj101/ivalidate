import RuleItem from "./Item.js"
export function prepare(rules){
    var ruleItems = [] 
	if( rules instanceof Array === true) {
		rules.forEach((rule) => {
			let ruleItem = new RuleItem(rule)
		})
	}
    
    return ruleItems;
}
