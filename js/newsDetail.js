$(function(){
  var pkId=getUrlParam('pkId');
  console.log(pkId)
  news(pkId);
})

function getUrlParam(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
  var r = window.location.search.substr(1).match(reg);  //匹配目标参数
  if (r != null) return unescape(r[2]); return null; //返回参数值
}

function news(pkId){
  $.ajax({
    url:baseURL+'/news/detail',
    async:true,
    type:'GET',
    dataType:"json",
    data:{
      id:pkId,
    },
    success:function(res){
      var time=0,clock=0;
      time=res.data.releaseDate.substring(-1,10);
      clock=res.data.releaseDate.substring(11,16),
      $(".title").append(res.data.title),
      $(".time").append("发布时间："+time+" "+clock);
      $(".article section").append(res.data.content)
    },
    error:function () { 
      alert("获取错误")
    }

  })
}