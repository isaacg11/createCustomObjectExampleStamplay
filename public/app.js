Stamplay.init('createcustomobjectutorial');
/*----------------------*/
/* CREATE OBJECT SCRIPT */
/*----------------------*/

function createObject(){
	var objectName = document.getElementById('objectName').value;
	var objectAuthor = document.getElementById('objectAuthor').value;
	var objectInstance = new Stamplay.Cobject('book').Model;
	objectInstance.set('title', objectName);
	objectInstance.set('author', objectAuthor);
	objectInstance.save().then(function(){
		var title = objectInstance.get('title');
		var author = objectInstance.instance.author;
		var date = objectInstance.get('dt_create');
		var id = objectInstance.get('_id');
		document.getElementById("objectOutputName").innerHTML = title;
		document.getElementById("objectOutputAuthor").innerHTML = author;
		document.getElementById("objectOutputDate").innerHTML = date;
		document.getElementById("objectOutputID").innerHTML = id;
		document.getElementById("objectName").value = "";
		document.getElementById("objectAuthor").value = "";
	});
}

function resetCreated(){
	document.getElementById("objectOutputName").innerHTML = '';
	document.getElementById("objectOutputAuthor").innerHTML = '';
	document.getElementById("objectOutputDate").innerHTML = '';
	document.getElementById("objectOutputID").innerHTML = '';
}

/*----------------------*/
/* UPDATE OBJECT SCRIPT */
/*----------------------*/


function updateObject(){
	var newTitle = document.getElementById('title').value;
	var newAuthor = document.getElementById('author').value;
	var objectInstance = new Stamplay.Cobject('book').Model;

	objectInstance.fetch('562687934c0f20367d7c83a8').then(function(){
    objectInstance.set('title', newTitle);
    objectInstance.set('author', newAuthor);
    objectInstance.save().then(function(){
    	
		document.getElementById('updateOutputName').innerHTML = objectInstance.instance.title;
		document.getElementById('updateOutputAuthor').innerHTML = objectInstance.instance.author;
		document.getElementById('updateOutputDate').innerHTML = objectInstance.instance.dt_update;
		document.getElementById('title').value = "";
		document.getElementById('author').value = "";
    	});
	});
}

/*----------------------*/
/* QUERY OBJECT SCRIPT  */
/*----------------------*/

function queryObject(){
	var cuisine = document.getElementById('cuisine').value;
	var city = document.getElementById('city').value;
	
	var objectCollection = new Stamplay.Cobject('resturaunt').Collection;
	objectCollection.equalTo("cuisine", cuisine).equalTo("city", city).fetch().then(function() {
		var cuisine = objectCollection.instance[0].get('cuisine');
		var resturaunt = objectCollection.instance[0].get('resturaunt');
		var city = objectCollection.instance[0].get('city');
		var address = objectCollection.instance[0].get('address');

		document.getElementById('queryOutputName').innerHTML = resturaunt; 
		document.getElementById('queryOutputCuisine').innerHTML = cuisine; 
		document.getElementById('queryOutputCity').innerHTML = city; 
		document.getElementById('queryOutputAddress').innerHTML = address; 

		document.getElementById('cuisine').value = ""; 
		document.getElementById('city').value = ""; 
	});
}

function reset(){
	document.getElementById('queryOutputName').innerHTML = ''; 
	document.getElementById('queryOutputCuisine').innerHTML = ''; 
	document.getElementById('queryOutputCity').innerHTML = ''; 
	document.getElementById('queryOutputAddress').innerHTML = ''; 
}

/*----------------------------*/
/* RATE/UPVOTE/REVIEW SCRIPT  */
/*----------------------------*/



function rateFive(){
	var a = document.getElementById("fiveStars").checked;
	if(a === true) {
		a = 5;

		var objectInstance = new Stamplay.Cobject('resturaunt').Model;
		objectInstance.fetch('5626bb424c0f20367d7c8472').then(
  		function(){
    		return objectInstance.rate(5);
  		});
	}
}
function rateFour(){
	var b = document.getElementById("fourStars").checked;
}
function rateThree(){
	var c = document.getElementById("threeStars").checked;
}
function rateTwo(){
	var d = document.getElementById("twoStars").checked;
}
function rateOne(){
	var e = document.getElementById("oneStar").checked;
}


function review(){
	var userReview = document.getElementById('review').value;
	var objectInstance = new Stamplay.Cobject('resturaunt').Model;
		objectInstance.fetch('5626bb424c0f20367d7c8472').then(function(){
			objectInstance.set("review", userReview);
			objectInstance.save();
			var newReview = objectInstance.instance.review;
			document.getElementById('rateOutputReview').innerHTML = newReview;
			document.getElementById('review').value = "";
		});
}

/*----------------------*/
/* GET ALL DATA FOR APP */
/*----------------------*/
window.onload = function(){
	var bookInstance = new Stamplay.Cobject('book').Model;
	bookInstance.fetch('562687934c0f20367d7c83a8').then(function() {
	var title = bookInstance.get('title');
	var author = bookInstance.get('author');
	var date = bookInstance.get('dt_update');
	var id = bookInstance.get('_id');
	
	document.getElementById('updateOutputName').innerHTML = title;
	document.getElementById('updateOutputAuthor').innerHTML = author;
	document.getElementById('updateOutputDate').innerHTML = date;
	document.getElementById('updateOutputID').innerHTML = id;
	});

	var resturauntInstance = new Stamplay.Cobject('resturaunt').Model;
	resturauntInstance.fetch('5626bb424c0f20367d7c8472').then(function(){
		var resturaunt = resturauntInstance.instance.resturaunt;
		var review = resturauntInstance.instance.review;
		document.getElementById('rateOutputName').innerHTML = resturaunt;
		document.getElementById('rateOutputReview').innerHTML = review;
	});
};






