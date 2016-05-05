var moreTPL = require('../tpl/more.string');

SPA.defineView('more',{
	html:moreTPL,
	plugins:['delegated'],
	bindActions:{
		'tap.switch':function(e,data){
			SPA.show('index');
		},
		'tap.boss':function(e,data){
			SPA.show('boss');
		},
		'tap.back':function(e,data){
			SPA.show('index');
		},
		'tap.vip':function(e,data){
			SPA.show('vip');
		}
		
	}
})




