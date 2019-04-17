$(function(){
  var pkId=getUrlParam('pkId');
  proDetail(pkId);
})

function getUrlParam(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
  var r = window.location.search.substr(1).match(reg);  //匹配目标参数
  if (r != null) return unescape(r[2]); return null; //返回参数值
}

function proDetail(pkId){
  $.ajax({
    url:baseURL+'/products/detail',
    async:true,
    type:'GET',
    dataType:"json",
    data:{
      id:pkId,
    },
    success:function(res){
      var category="1",time=0,index=res.data.pathList.length,i=0;
      if(res.data.classId==1){
        category="硬件"
      }
      else if(res.data.classId==2){
        category="软件"
      }      
      time=res.data.marketTime.substring(0,10);
      if(res.data.video==null){
        $(".proBigImg").append("<div class='layer'><img class='bigImg' src='"
        +res.data.pathList[0]+"'></div>")
      }
      else{
        $(".proBigImg").append("<div class='videoIcon'></div><div class='layer'><img class='bigImg' src='"
                            +res.data.pathList[0]+"'></div>")
      }
      for(i=0;i<index;i++){
        $(".imgItem").append("<li class='smallImage'><a><img src='"
                              +res.data.pathList[i]+"'></a></li>")
      }
      $(".proImgWrap ul li").mouseover(
        function(){
          var _this=$(this),index=$(this).index();
          _this.css("border-color","#000").siblings('li').css("border-color","#fff");
          $(".layer").empty();
          $(".videoIcon").show();
          $(".layer").append("<img class='bigImg' src='"
          +res.data.pathList[index]+"'>")
        }
      )
      $(".videoIcon").click(
        function () {
          $(".layer").empty();
          $(".videoIcon").hide();
          $(".layer").append("<video autoplay controls height='350px' width='350px' class='video'><source src='"
                                  +res.data.video+"' type='video/mp4'></video>")
        }
      )
      $(".title").append(res.data.name),
      $(".smallTitle>p").append(res.data.shortIntroduce)
      $(".company").append(res.data.company)
      $("#class div:last").append(category)
      $("#model div:last").append(res.data.model)
      $("#time div:last").append(time)
      $(".detail").append(res.data.longIntroduce);
    },
    error:function () { 
    }
  })
}