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

function reset(){
	document.getElementById("objectOutputName").innerHTML = '';
	document.getElementById("objectOutputAuthor").innerHTML = '';
	document.getElementById("objectOutputDate").innerHTML = '';
	document.getElementById("objectOutputID").innerHTML = '';
}

/*----------------------*/
/* UPDATE OBJECT SCRIPT */
/*----------------------*/

window.onload = function(){
	var objectInstance = new Stamplay.Cobject('book').Model;
	objectInstance.fetch('562687934c0f20367d7c83a8').then(function() {
	var title = objectInstance.get('title');
	var author = objectInstance.get('author');
	var date = objectInstance.get('dt_update');
	var id = objectInstance.get('_id');
	
	document.getElementById('updateOutputName').innerHTML = title;
	document.getElementById('updateOutputAuthor').innerHTML = author;
	document.getElementById('updateOutputDate').innerHTML = date;
	document.getElementById('updateOutputID').innerHTML = id;
	});
};

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

