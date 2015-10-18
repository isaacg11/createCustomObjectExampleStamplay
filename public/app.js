Stamplay.init('createcustomobjectutorial');

function createObject(){
	var objectName = document.getElementById('objectName').value;
	var objectInstance = new Stamplay.Cobject('object').Model;
	objectInstance.set('name', objectName);
	objectInstance.save().then(function(){
		var name = objectInstance.get('name');
	});
}