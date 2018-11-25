const resetForm = (form) => {
	[...document.forms[form].getElementsByTagName("input")].forEach((element, i) => {
		element.value = '';
	})
	document.forms[form].querySelector('button').setAttribute('disabled','disabled');
}
module.exports = resetForm;