var myTPL = require('../tpl/my.string');
var _ = SPA.util;


SPA.defineView('my',{
	html:myTPL,
	plugins:['delegated'],
	
	bindActions:{
		'tap.back':function(){
			this.hide();
		},
		'tap.home':function(){
			this.hide();
		},
		'tap.register':function(){
			SPA.show('register');
		},
		'tap.sure':function(e,data){
			_.storage("zhangmei",true);
			this.hide();
		}
	}
})
