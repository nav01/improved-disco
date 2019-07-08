//quick and dirty scraper for all the e3 data.  all data is loaded so there's no need to mess with pages and stuff.
var games = [];

var cardList = document.querySelector('.mixer');

var conferences = [
	'The Pokemon Company',
	'Google Stadia',
	'Electronic  Arts',
	'Microsoft',
	'Bethesda',
	'Devolver Digital',
	'UploadVR',
	'The PC Gaming Show',
	'Limited Run Games',
	'Ubisoft',
	'AMD',
	'Kinda Funny Games',
	'Square Enix',
	'Nintendo',
	'Other',
]

var exclusivePlatforms = [
	'playstation-4-exclusive',
	'xbox-one-exclusive',
	'pc-exclusive',
	'switch-exclusive',
	'stadia-exclusive',
	'mobile-exclusive',
	'microsoft-exclusive',
	'sony-exclusive',
]

var moreDetails = {
	timedExclusive: 'temporary-exclusive',
	epicExclusive: 'epic-store-exclusive',
	xboxPlayAnywhere: 'xbox-play-anywhere-exclusive',
	xboxGamePass: 'xbox-game-pass-exclusive',
}

var platforms = [
	'playstation-4',
	'xbox-one',
	'switch',
	'windows',
	'stadia',
	'3ds',
	'psvita',
	'macos',
	'linux',
	'mobile',
]

var vr = {
	oculus: 'oculus-devices-only',
	playstation: 'playstation-vr-only',
	allVr: 'coming-to-all-vr',
}

var images = [];

for(let i = 0; i < cardList.children.length; i++) {
	let game = {};

	let classes = cardList.children[i].getAttribute('class').split(' ');
	game.conference = classes[2].split('-').map((word) => {
		return word[0].toUpperCase() + word.substring(1)
	}).join(' ');

	game.day = classes[3].split('-')[1];

	game.image = 'https://e3recap2019.b-cdn.net/images/game-cards/' + cardList.children[i].querySelector('.card-background').getAttribute('data-url') + '.jpg';
	images.push(game.image);
	game.title = cardList.children[i].querySelector('.entry-title').innerHTML;
	let developer = cardList.children[i].querySelector('.dev-container span');
	let devLink = developer.querySelector('a'); //some developers have links to the dev/studio web page
	if (devLink) {
		game.developer = {
			devLink: devLink.getAttribute('href'),
			devName: devLink.innerHTML,
		}
	} else {
		game.developer = developer.innerHTML;
	}

	let additionalDetails = cardList.children[i].querySelector('.card-bottom');
	game.releaseDate = additionalDetails.querySelector('.release p').innerHTML;

	try {
		game.platforms = additionalDetails.querySelector('.platforms p').innerHTML.split(',').map((platform) => platform.trim());
	} catch (e) {
		/* console.log(game.title); */
		/* console.log('platforms not found'); */
	}

	try {
		game.genre = additionalDetails.querySelector('.genres p').innerHTML;
	} catch (e) {
		/* console.log(game.title);
		console.log('genre not found'); */
	}

	game.media = [];
	let media = cardList.children[i].querySelector('.media-links');
	let mediaLinks = media.querySelectorAll('.links');
	for(let i = 0; i < mediaLinks.length; i++) {
		let anchorTag = mediaLinks[i].querySelector('a');
		let media = {};
		media.mediaLink = anchorTag.getAttribute('href');
		media.mediaType = anchorTag.querySelector('span').innerHTML;
		game.media.push(media);
	}

	//miscellaneous details
	game.moreDetails = {};

	var reducer = (accumulator, currentVal) => {
		return exclusivePlatforms.includes(currentVal) ? true: (accumulator || false);
	}

	if(classes.reduce(reducer, false))
		game.moreDetails.exclusive = true;
	else
		console.log('not found');

	if (classes.includes(moreDetails.timedExclusive))
		game.moreDetails.timedExclusive = true;

	if (classes.includes(moreDetails.epicExclusive))
		game.moreDetails.epicStoreExclusive = true;

	if (classes.includes(moreDetails.xboxPlayAnywhere))
		game.moreDetails.xboxPlayAnywhere = true;

	if (classes.includes(moreDetails.xboxGamePass))
		game.moreDetails.xboxGamePass = true;

	games.push(game);

	//virtual reality
	if (classes.includes(vr.oculus))
		game.moreDetails.vr = 'oculus';
	else if (classes.includes(vr.playstation))
		game.moreDetails.vr = 'playstation';
	else if (classes.includes(vr.allVr))
		game.moreDetails.vr = 'all';
}
