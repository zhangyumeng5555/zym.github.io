var vipTPL = require('../tpl/vip.string');

SPA.defineView('vip',{
	html:vipTPL,
	plugins:['delegated'],
	bindActions:{
		'tap.back':function(){
			SPA.show('index');
		},
		'tap.home':function(){
			SPA.show('index');
		}
	}
})
