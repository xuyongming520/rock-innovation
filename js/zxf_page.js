(function($){
	var zp = {
		init:function(obj,pageinit){
			return (function(){
				zp.addhtml(obj,pageinit);
				zp.bindEvent(obj,pageinit);
			}());
		},
		addhtml:function(obj,pageinit){
			return (function(){
				obj.empty();
				/*上一页*/
				if (pageinit.current > 1) {
					obj.append('<a href="javascript:;" class="preBtn">上一页</a>');
				} else{
					obj.remove('.prevPage');
					obj.append('<span class="disabled">上一页</span>');
				}
				/*中间页*/
				if (pageinit.current >4 && pageinit.pageNum > 4) {
					obj.append('<a href="javascript:;" class="zxfPageNum">'+1+'</a>');
					obj.append('<span>...</span>');
				}
				else if(pageinit.current >7 && pageinit.pageNum > 7){
					obj.append('<a href="javascript:;" class="zxfPageNum">'+1+'</a>');
					obj.append('<a href="javascript:;" class="zxfPageNum">'+2+'</a>');
					obj.append('<span>...</span>');
				}
				if (pageinit.current >4 && pageinit.current <= pageinit.pageNum-5) {
					var start  = pageinit.current - 2,end = pageinit.current + 2;
				}else if(pageinit.current >4 && pageinit.current > pageinit.pageNum-5){
					var start  = pageinit.pageNum - 4,end = pageinit.pageNum;
				}else{
					var start = 1,end = 9;
				}
				for (;start <= end;start++) {
					if (start <= pageinit.pageNum && start >=1) {
						if (start == pageinit.current) {
							obj.append('<span class="current">'+ start +'</span>');
						} else if(start == pageinit.current+1){
							obj.append('<a href="javascript:;" class="zxfPageNum nextPage">'+ start +'</a>');
						}else{
							obj.append('<a href="javascript:;" class="zxfPageNum">'+ start +'</a>');
						}
					}
				}
				if (end < pageinit.pageNum) {
					obj.append('<span>...</span>');
				}
				/*下一页*/
				if (pageinit.current >= pageinit.pageNum) {
					obj.remove('.nextBtn');
					obj.append('<span class="disabled">下一页</span>');
				} else{
					obj.append('<a href="javascript:;" class="nextBtn">下一页</a>');
				}
				/*尾部*/
				obj.append('<span>'+'共'+'<b>'+pageinit.pageNum+'</b>'+'页，'+'</span>');
				obj.append('<span>'+'到第'+'<input type="number" class="zxfInput"/>'+'页'+'</span>');
				obj.append('<span class="zxFokBtn">'+'确定'+'</span>');
			}());
		},
		bindEvent:function(obj,pageinit){
			return (function(){
				obj.on("click","a.preBtn",function(){
					var cur = parseInt(obj.children("span.current").text());
					var current = $.extend(pageinit, {"current":cur-1});
					page(current);
					zp.addhtml(obj,current);
					if (typeof(pageinit.backfun)=="function") {
						pageinit.backfun(current);
					}
					current=0;
				});
				obj.on("click","a.zxfPageNum",function(){
					var cur = parseInt($(this).text());
					var current = $.extend(pageinit, {"current":cur});
					page(current);
					zp.addhtml(obj,current);
					if (typeof(pageinit.backfun)=="function") {
						pageinit.backfun(current);
					}
					current=0;
				});
				obj.on("click","a.nextBtn",function(){
					var cur = parseInt(obj.children("span.current").text());
					var current = $.extend(pageinit, {"current":cur+1});
					page(current);
					zp.addhtml(obj,current);
					if (typeof(pageinit.backfun)=="function") {
						pageinit.backfun(current);
					}
					current=0;
				});
				obj.on("click","span.zxFokBtn",function(){
					var cur = parseInt($("input.zxfInput").val());
					var current = $.extend(pageinit, {"current":cur});
					page(current);
					zp.addhtml(obj,{"current":cur,"pageNum":pageinit.pageNum});
					if (typeof(pageinit.backfun)=="function") {
						pageinit.backfun(current);
					}
					current=0;
				});
			}());
		}
	}
	$.fn.createPage = function(options){
		var pageinit = $.extend({
			pageNum : 15,
			current : 1,
			backfun : function(){}
		},options);
		zp.init(this,pageinit);
	}
}(jQuery));
