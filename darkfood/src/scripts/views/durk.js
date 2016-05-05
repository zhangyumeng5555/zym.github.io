var durkTPL = require('../tpl/durk.string');

SPA.defineView('durk',{
	html:durkTPL,
	
	plugins:['delegated'],
	
	bindActions:{
		'tap.back2':function(e,data){
			SPA.show('index');
		},
		'tap.home2':function(e,data){
			SPA.show('index');
		}
		
	}
})
