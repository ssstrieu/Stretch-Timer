//debugger
//alert('Stretch Break!');

//pass area parm from index page



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


//trying to filter types of stretches, passes #parm


$('#timerStart').on('click', function(ev){
	ev.preventDefault();

	var filterValue=$('#focusArea').val();
	var url = 'stretch.html'+'#'+filterValue;
	console.log("The filterValue is "+filterValue);
	window.location = url;
});

//redefine filtervalue on second page by passing parm from index
var filter#=location.hash.split('#')[1];
var filteredList=[];
var tipObject={};

//connect to json
//parms: title,descrArray,imgSrc,source

	$.ajax({
		url: 'js/tips.json',
		type:"GET",
		dataType: "json",
		success: function(response){
			console.log('jsonnnnn connected');
			if (!filterValue=='All'){
				for (var i = 0; i < response.length; i++) {
					if(filter#=response[i].area) {
						filteredList.push(response[i]);
						console.log(response[i].area);
						
					}
				console.log(filteredList);
				}
			}else{
				//for filter of "All", just pass entire tip library
				for (var i = 0; i < response.length; i++) {
					filteredList.push(response[i]);
					
				}
				console.log('condition that filterValue is ALL');
			}
		getRandomTip();
		}
	});
var tipObject={};
var n=0;

	function getRandomTip(){
		n=(Math.floor((Math.random())*filteredList.length));
		tipObject=(filteredList[n]);
		formatTip(tipObject.name,tipObject.instructions,tipObject.img,tipObject.source);
	}

	//formatTip(tipObject.name,tipObject.instructions,tipObject.img,tipObject.source);
	//formatTip('name of stretch',[1,2,3],'img/02.jpg','www.google.com');
	















