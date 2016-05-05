var guideTPL = require('../tpl/guide.string');

SPA.defineView('guide',{
	html:guideTPL,
	plugins:['delegated'],
     	bindActions:{
//   		"goto.index":function(){
//   			SPA.open('index');
//   		}
     	},
	
	bindEvents:{
		 'beforeShow': function() {
		 	setTimeout(function(){
				SPA.show('index');
				
			},2000)
		  }    
	}
	
})
