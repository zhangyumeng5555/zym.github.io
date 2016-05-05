var successTPL = require('../tpl/success.string');

SPA.defineView('success',{
	html:successTPL,
	plugins:['delegated'],
	bindActions:{
		'tap.back6':function(){
			this.hide();
		}
	}
})
