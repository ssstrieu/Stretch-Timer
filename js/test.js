debugger
alert('hi this is test script.');

//this works- displaying tip on page
	var formatTip=function(title,descrArray,imgSrc){
		$('h1').text(title);
		$('.wrapper img').attr('src',imgSrc);
		for (var i = 0; i < descrArray.length; i++) {
			$('.wrapper').append('<li>');
			$('.wrapper li').last().text(descrArray[i]);
		}
		$('.wrapper').append($('#newTip'));
	}	

	var testDescr=['one','two','three']

//this doesn't work yet- cnnt to json file
	var getJSONtip= $.getJSON( "tips.json", function(e) {
		var tipNum=Math.floor(Math.random()*3)+1;
		var tipName= tips[tipNum].name;
		var tipPicSrc=tips[tipNum].img;
		var tipDescription=[];
		for (var i = 0; i < tips[tipNum].instructions.length; i++) {
		 	tipDescription.push(tips[tipNum].instructions[i]);
		 };
		

		formatTip(tipName,tipDescription,tipPicSrc);
	});

		//test var
	var putTip= formatTip('Name',testDescr,'img/02.jpg');

	$('#newTip').on('click',putTip);
 

