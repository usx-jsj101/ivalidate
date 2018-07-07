import {test} from './util/reg'

export function validate(rules, data){
    var result = {}

	if(data instanceof Object === true) {
		validateFromObject(rules, data)
	}
    return result;
}
function validateFromObject(rules, data) {
	rules.forEach(rule => {
	})
}
