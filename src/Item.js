export default class Item {
	constructor(rule) {
		this.rule = rule
		this.explain(rule)
	}
	explain(rule) {
		if (rule instanceof Object === true) {
			for (let name in rule) {
				this.name = name;
				this.originExp = rule[name];
				this.rules = explainRuleExp(this.originExp)
			}
		}
	},
	explainRuleExp (originExp) {
		let ruleExpList = originExp.split("|")
		if (ruleExpList.length > 0) {
			ruleExpList.forEach((exp) => {

			})
		}
		return ruleExpList;
	}
	addRule() {

	}
	removeRule() {

	}
	exec() {

	}
}
