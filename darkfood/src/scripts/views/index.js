var indexTPL = require('../tpl/index.string');

SPA.defineView('index',{
	html:indexTPL,
	
	plugins: ['delegated'],
	modules: [{
	    name: 'Content',
	    container: '.center-main',
	    views: ['home','boss','vip','more','durk'],
	    defaultTag: 'home'
	}],
	 
	bindActions:{
		'tap.switch':function(e,data){
			this.modules.Content.launch(data.tag);
		},
		'tap.boss':function(e,data){
			SPA.show('boss');
		},
		'tap.more':function(e,data){
			SPA.show('more');
		},
		'tap.vip':function(e,data){
			SPA.show('vip');
		},
		'tap.moreMenu':function(e,data){
			SPA.show('more-menu');
		}
		
	}
	
	
	
	
	
})
