var registerTPL = require('../tpl/register.string');



SPA.defineView('register',{
	html:registerTPL,
	plugins:['delegated'],
	bindActions:{
		'tap.back5':function(){
			this.hide();
		},
		'tap.sure':function(e,data){
			_.storage("zhangmei",true);
			this.hide();
		}
		
	}
	
})
