$(function(){
  var pkId=getUrlParam('pkId');
  console.log(pkId)
  caseDetail(pkId);
})

function getUrlParam(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
  var r = window.location.search.substr(1).match(reg);  //匹配目标参数
  if (r != null) return unescape(r[2]); return null; //返回参数值
}

function caseDetail(pkId){
  $.ajax({
    url:baseURL+'/case/detail',
    async:true,
    type:'GET',
    dataType:"json",
    data:{
      id:pkId,
    },
    success:function(res){
      var time=0,clock=0;
      time=res.data.releaseTime.substring(0,10);
      clock=res.data.releaseTime.substring(11,16),
      console.log(res.data)
      $(".pic").append("<img src='"+res.data.cover+"'>")
      $(".title").append(res.data.title),
      $(".detail").append("作者："+res.data.author+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;发布时间："+time+" "+clock);
      $("article section").append(res.data.content)
    },
    error:function () { 
      alert("获取错误")
    }

  })
}