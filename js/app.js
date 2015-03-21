/**
 * Created by Eduardo Barros on 29/11/2014.
 */

$('.block .nav .item').distinct({
	plusOne: true,
	prefix: 'item',
	target: '.block'
}, 'click');

if ("geolocation" in navigator) {
	console.log('ok');
} else {
	console.log('not ok');
}

/*navigator.geolocation.getCurrentPosition(function(position) {
	alert(position.coords.latitude + ' : ' + position.coords.longitude);
});*/

function addStyleSheetRules (rules) {

	var styleEl = document.createElement('style'),
		styleSheet;

	// Append style element to head
	document.head.appendChild(styleEl);

	// Grab style sheet
	styleSheet = styleEl.sheet;

	for (var i = 0, rl = rules.length; i < rl; i++) {

		var j = 1,
			rule = rules[i],
			selector = rules[i][0],
			propStr = '';

		// If the second argument of a rule is an array of arrays, correct our variables.
		if (Object.prototype.toString.call(rule[1][0]) === '[object Array]') {
			rule = rule[1];
			j = 0;
		}

		for (var pl = rule.length; j < pl; j++) {
			var prop = rule[j];
			propStr += prop[0] + ':' + prop[1] + (prop[2] ? ' !important' : '') + ';\n';
		}

		// Insert CSS Rule
		styleSheet.insertRule(selector + '{' + propStr + '}', styleSheet.cssRules.length);
	}
}

/*
addStyleSheetRules([
	['body', // Also accepts a second argument as an array of arrays instead
		['color', 'red'],
		['background-color', 'green', true] // 'true' for !important rules
	],
	['.myClass',
		['background-color', 'yellow']
	]
]);
*/
