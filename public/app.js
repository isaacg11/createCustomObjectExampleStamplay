Stamplay.init('createcustomobjectutorial');

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