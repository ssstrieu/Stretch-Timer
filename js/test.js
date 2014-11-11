debugger
console.log('hi this is test script running.');

//this works- displaying tip on page
	var formatTip=function(title,descrArray,imgSrc,source){
		$('.tipName').text(title);
		$('.tip-wrapper img').attr('src',imgSrc);
		$('.tip-wrapper a').attr('href',source);
		$('.tip-wrapper a').text(source);

		for (var i = 0; i < descrArray.length; i++) {
			console.log('starting desciprtion');
			$('.tipIntructions').append('<li>');
			$('.tipIntructions li').last().text(descrArray[i]);
		}
		$('.tip-wrapper').append($('#newTip'));
	}	

	

	//test implement
	var testDescr=['one','two','three','four'];
	formatTip('Cool Stretch',testDescr,'img/01.jpg','www.google.com');
	//$('#newTip').on('click',putTip);
 















