let $ = document
let locationKey = $.querySelector('#location')
let title = $.querySelector('title')

let keyCodeElem = $.getElementById('keyCode')
let keyElem = $.getElementById('key')
let whichElem = $.getElementById('which')
let codeElem = $.getElementById('code')
let locationElem = $.getElementById('location')

document.body.addEventListener('keydown', function (event) {
	event.preventDefault()
	
	starter.style.display = 'none'
	heading.style.display = 'flex'
	ascii.style.display = 'flex'
	infos.style.display = 'flex'
	let eventkey = event.key
	let eventwhich = event.which
    let eventlocation = event.location
	let eventcode = event.code
	let eventkeycode = event.keyCode
	keyCodeElem.innerHTML = eventkeycode
	keyElem.innerHTML = eventkey
	whichElem.innerHTML = eventwhich
	codeElem.innerHTML = eventcode
	locationElem.innerHTML = eventlocation

})