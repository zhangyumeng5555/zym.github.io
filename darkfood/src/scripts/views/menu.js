var menuTPL = require('../tpl/menu.string');

SPA.defineView('menu',{
	html:menuTPL,
	plugins:['delegated'],
	bindActions:{
		'tap.list':function(e,data){
			$(e.el).addClass('active').siblings().removeClass('active');
		},
		'tap.add':function(e,data){
			var n = $(e.el).val()
			var num = parseInt(n)+1;
			$(e.el).val(num);
		},
		'tap.back4':function(){
			this.hide();
		}
	}
	
})
