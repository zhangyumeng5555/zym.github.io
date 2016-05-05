var moreMenuTPL = require('../tpl/more-menu.string');

SPA.defineView('more-menu',{
	html:moreMenuTPL,
	plugins:['delegated',{
		name:'avalon',
		options:function(vm){
			vm.menulist=[];
			vm.newmenulist=[];
		}
	}],
	init:{
		vm:null,
//		myScroll:null,
		dataFormat: function(data) {
		    var newData = [];
		    for (var i = 0; i < Math.ceil(data.length / 2); i++) {
		      newData[i] = [];
		      newData[i].push(data[i * 2]);
		      newData[i].push(data[i * 2 + 1]);
		    }
		    return newData;
		 }
	},
	bindActions:{
		'tap.back1':function(){
			this.hide();
		}
	},
	bindEvents: {
    'beforeShow': function() {
			var that = this;
			that.vm = that.getVM();
			//第一次获取数据
			$.ajax({
				url:'/darkfood/mock/morelist.json',
				success:function(res){
					that.vm.menulist = that.dataFormat(res.data);
					//为第二次上拉加载数据做铺垫，先存储备用
					that.vm.newmenulist = res.data;
					
					setTimeout(function(){
						myScroll.refresh();
					},0)
					
				},
				error:function(res){
					
				}
			});
			
			
		    //上拉滑动
		    var myScroll = new IScroll('#moreScroll', {
		        probeType: 3,
		        mouseWheel: true
		    });		
		    myScroll.on('scrollEnd', function () {		
		        var maxY = this.maxScrollY - this.y;
		        if (maxY > -35 && maxY < 0) {
		            var self = this;
		            myScroll.scrollTo(0, self.maxScrollY + 35);		           
		        } else if (maxY >= 0) {
		            var self = this;
		            // ajax上拉加载数据
		              $.ajax({
			         	url:"/darkfood/mock/Mmorelist.json",
			         	success:function(res){
			         		that.vm.newmenulist.pushArray(res.data);
		            		that.vm.menulist=that.dataFormat(that.vm.newmenulist);
		
			         		setTimeout(function(){
								myScroll.refresh();
								myScroll.scrollTo(0, self.y + 35);
							},0)
			         	},
			         	error:function(res){
			         		
			         	}
			         });
		
		        }
		    })
		
		}
	}
	
})
