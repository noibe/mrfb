/**
 * Created by Eduardo Barros on 29/11/2014.
 */

var Session;

testSession(Session);

$.ajax({
	cache: false,
	success: function (data) {
		session = data;
		testSession(session);

		var newElement = addElement('div', 'hello world', 'blue font-white');
		for (var i = 7; --i; ) addElement('div', 'Hello!', 'star', newElement);

		$('.star').distinct({
			plusOne: true,
			selfAction: {
				action: function() {
					console.log('oi');
				},
				index: [4, 1],
				passParam: false
			}
		});
	},
	url: 'i'
});

function testSession(Session) {
	if (Session) console.log('ok'); else console.log('not ok');
}

function addElement (element, content, classValue, target, before) {

	// Create the new element
	if (!element) element = 'div';
	var newDiv = document.createElement(element);

	// Add the class to the new element
	if (classValue) newDiv.setAttribute('class', classValue);

	// Test if has content to add on the new element
	if (content) {
		// get the content
		var newContent = document.createTextNode(content);
		// Append the content
		newDiv.appendChild(newContent);
	}

	if (!before) before = null;
	if (!target) target = document.body;

	// Add the newly created element and its content into the DOM
	target.insertBefore(newDiv, before);

	return newDiv;

}
