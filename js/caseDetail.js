$(function(){
  var pkId=getUrlParam('pkId');
  caseDetail(pkId);
})

function getUrlParam(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
  var r = window.location.search.substr(1).match(reg);  //匹配目标参数
  if (r != null) return unescape(r[2]); return null; //返回参数值
}

function popUp(video){
  layer.open({
    type: 2,
    title: false,
    area: ['1050px', '600px'],
    closeBtn: 1,
    shadeClose: true,
    content:video
  })
}

function caseDetail(pkId){
  jQuery.support.cors = true;
  $.ajax({
    url:baseURL+'/case/detail?',
    async:true,
    type:'GET',
    dataType:"json",
    data:{
      id:pkId,
    },
    success:function(res){
      var time=0,clock=0,media="",url="";
      time=res.data.releaseTime.substring(0,10);
      clock=res.data.releaseTime.substring(11,16);
      url=res.data.video
      if(res.data.video==null){       
        media="<div class='layer'><img src='"+res.data.cover+"'/></div>"
      }
      else{
        media="<div class='layerV'><div class='videoIcon'></div><img src='"
            +res.data.cover+"'/></div>"
        $(".pic").click(
          function(){
            layer.open({
              type: 2,
              title: false,
              area: ['1050px', '590px'],
              closeBtn: 1,
              shadeClose: true,
              content:res.data.video
            })
          }
        )   
      }
      $(".pic").append(media)
      $(".title").append(res.data.title),
      $(".detail").append("作者："+res.data.author+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;发布时间："+time+" "+clock);
      $("article section").append(res.data.content)
    },
    error:function(){ 
    }
  })
}



