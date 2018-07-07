import iv from "./IValidate.js";

let obj = new iv({rules:[{
		"name": "string|required"
	},
	{
		"age": "+int|required"
	},
	{
		"payment": "+float"
	},
	{
		"experience:required": [
			{
				"time" : "date|required",
				"content": "string|required|norepeat"
			}
		] 
	}
], data: {
	name: "jay",
	age: 12,
	payment: 1233.21,
	experience: [
		{
			time: "2013-07",
			contenet: "Google"
		},
		{
			time: "2013-07",
			contenet: "Google"
		}
	]
}
});

export let IValidate = iv 
