Stamplay.init('createcustomobjectutorial');

function createObject(){
	var objectName = document.getElementById('objectName').value;
	var objectInstance = new Stamplay.Cobject('object').Model;
	objectInstance.set('name', objectName);
	objectInstance.save().then(function(){
		var name = objectInstance.get('name');
		var date = objectInstance.get('dt_create');
		var id = objectInstance.get('_id');
		document.getElementById("objectOutputName").innerHTML = name;
		document.getElementById("objectOutputDate").innerHTML = date;
		document.getElementById("objectOutputID").innerHTML = id;
		document.getElementById("objectName").value = "";
	});
}

function reset(){
	document.getElementById("objectOutputName").innerHTML = '';
	document.getElementById("objectOutputDate").innerHTML = '';
	document.getElementById("objectOutputID").innerHTML = '';
}