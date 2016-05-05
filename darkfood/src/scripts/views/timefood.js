var timefoodTPL = require('../tpl/timefood.string');

SPA.defineView('timefood',{
	html:timefoodTPL,
	
	plugins:['delegated'],
	
	init:{
		maxY:null,
		myScroll:null
	},
	
	bindActions:{
		"tap.back3":function(){
			this.hide();
		},
		"tap.top":function(){
//		  if(this.maxY<=0){
//		     $('#foot2').on('tap',function(e,data){
//		     	$(this).parent().scrollTop(-263);
//		     })
//			};
		this.myScroll.scrollTo(0,0,1000,IScroll.utils.ease.quadratic);
		
//		this.myScroll.refresh();
		
		
//	$('.insidebox').eq(0).css("-webkit-transform","-webkit-translate(0,0) translateZ(0px) !important");
//	$('.insidebox').eq(0).css("transform","translate(0, 0) translateZ(0px) !important");

	}
         
//			$().click(function(){0
//				scrollTop=0;
//			})
// $('#li10').click(function(){
//	var speed=200;
//	$('body').animate({"scrollTop":"0"},speed);
//	$(document.documentElement).animate({"scrollTop":"0"},speed);
//	return false;
//})
//      $("#foot2").click(function () {
//		        var speed=200;//滑动的速度
//		        $('.innerbox').scrollTop(0);
//		        return false;
//		 });
		
		
},
bindEvents:{
	"beforeShow":function(){
		//上拉滑动
		     this.myScroll = new IScroll("#timescroll", {
		        probeType: 3,
		        mouseWheel: true,
		        bounce:true
		    });		
//		    this.myScroll.on('scrollEnd', function () {
//		    	this.maxY = this.maxScrollY - this.y;
//		    	$('#foot2').on('click',function(e,data){
//			    console.log(this.maxY);
			  
//			    $('.insidebox').scrollTop()
//		    })
//		})
		
	}
}
	
	
})
