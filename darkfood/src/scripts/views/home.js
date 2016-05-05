require('../lib/swiper-3.3.1.min.js');


var homeTPL = require('../tpl/home.string');
var waterfallUtil = require('../util/waterfall.util.js');
var _ = SPA.util;

SPA.defineView('home',{
	html:homeTPL,
	plugins:['delegated',{
		name:'avalon',
		options:function(vm){
			vm.homelist=[];
		}
	}],
		
	init:{
		vm:null,
		myScroll:null
	},

	bindActions:{
		'tap.my':function(){
			if(_.storage('zhangmei')){
	    		SPA.show('success');
	    	}else{
	    		SPA.show('my');
	    	}
		},
		'tap.food':function(){
			SPA.show('timefood');
		},
		'tap.vip1':function(){
			SPA.show('vip');
		},
		'tap.Mm':function(){
			SPA.show('menu');
		},
		'tap.yuan':function(){
			this.myScroll.scrollTo(0,0,1000,IScroll.utils.ease.quadratic);
		}
		
	},
	
	bindEvents: {
	    'beforeShow': function() {
	    	var that = this;
	    	that.vm = that.getVM();
	      var mySwiper = new Swiper('#fr-swiper', {
	      	 autoplay: 2500,
             autoplayDisableOnInteraction: false,
	         loop: true
	      });
	      
	      //ajax获取数据（第一次）
	      $.ajax({
	      	url:'/darkfood/mock/homelist.json',
	      	success:function(res){	      		
	      			that.vm.homelist=res.data;	      		
	      	},
	      	error: function(res) {
	          console.log(res);
	        }
	      });
	            
	       //上拉滑动
		    that.myScroll = new IScroll(".slideScroll", {
		        probeType: 3,
		        mouseWheel: true
		    });		
		    that.myScroll.on('scrollEnd', function () {		
		        var maxY = this.maxScrollY - this.y;
//		        console.log(this.y );
//		        if(this.y<=-500){$('.div-p').css('display','block')}else{$('.div-p').css('display','block')}
		        if (maxY > -35 && maxY < 0) {
		            var self = this;
		            that.myScroll.scrollTo(0, self.maxScrollY + 35);		           
		        } else if (maxY >= 0) {
		            var self = this;
		            // ajax上拉加载数据
		              $.ajax({
			         	url:"/darkfood/mock/Hhome.json",
			         	success:function(res){		         		
		            		that.vm.homelist =that.vm.homelist.pushArray(res.data);
							that.myScroll.refresh();
							that.myScroll.scrollTo(0, self.y + 35);
			         	},
			         	error:function(res){
			         		
			         	}
			         });
		
		        }
		    })
	      
	      
	      
	      
	      
	      
	      
	      
	      
	      
//	      var myScroll = new IScroll(".slideScroll", {
//		        probeType: 3,
//		        mouseWheel: true
//		  });
	    }
	}
})
