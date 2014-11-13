//debugger
//alert('Stretch Break!');


//this works- displaying tip on page
	var formatTip=function(title,descrArray,imgSrc,source){
		$('.tipName').text(title);
		$('.tip-wrapper img').attr('src',imgSrc);
		$('.tip-wrapper a').attr('href',source);
		$('.tip-wrapper a').text(source);

		for (var i = 0; i < descrArray.length; i++) {
			//console.log('starting desciprtion');
			$('.tipIntructions').append('<li>');
			$('.tipIntructions li').last().text(descrArray[i]);
		}
		$('.tip-wrapper').append($('#newTip'));
	}	

	

	//test implement
	
	//$('#newTip').on('click',putTip);
 
//try to connect ot json

//parms: title,descrArray,imgSrc,source
	var tipObject={};

	$.ajax({
		url: 'js/tips.json',
		type:"GET",
		dataType: "json",
		success: function(response){
			console.log('jsonnnnn connected');
			console.log(Math.floor((Math.random())*response.length));
			var i=(Math.floor((Math.random())*response.length));
			tipObject=(response[i]);
			formatTip(tipObject.name,tipObject.instructions,tipObject.img,tipObject.source);

		}
	});

	//formatTip(tipObject.name,tipObject.instructions,tipObject.img,tipObject.source);
	//formatTip('name of stretch',[1,2,3],'img/02.jpg','www.google.com');
	















