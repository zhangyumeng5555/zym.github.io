

var bossTPL = require('../tpl/boss.string');

SPA.defineView('boss',{
	html:bossTPL,
    plugins: ['delegated'],
    bindActions:{
		'tap.back':function(e,data){			
			SPA.show('index');
		},
		'tap.home':function(e,data){			
			SPA.show('index');
		}
		
	}
})

