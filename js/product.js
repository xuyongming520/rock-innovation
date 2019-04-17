var classId=0;
$(function(){
  proList();
})

function proList(){
  classId=0;
  $("#all").addClass("classFont");
  $("#soft").removeClass("classFont");
  $("#hard").removeClass("classFont");
  search(classId,name);
  return classId;
}
/*加载新闻列表 */

function selectSearch(){
  if($(".searchClass").val()=="all"){
    classId=0;
  }
  else if($(".searchClass").val()=="hard"){
    classId=1;
  }
  else if($(".searchClass").val()=="soft"){
    classId=2;
  }
  return classId;
}
/*下拉分类 */

function search(classId,name){
  if(classId==0){
    $("#all").addClass("classFont");
    $("#soft").removeClass("classFont");
    $("#hard").removeClass("classFont");
  }
  else if(classId==1){
    $("#hard").addClass("classFont");
    $("#soft").removeClass("classFont");
    $("#all").removeClass("classFont");
  }
  else if(classId==2){
    $("#soft").addClass("classFont");
    $("#hard").removeClass("classFont");
    $("#all").removeClass("classFont");
  }
  var name=$(".content").val();
  $.ajax({
    url:baseURL+'/products/list',
    async:true,
    type:'GET',
    dataType:"json",
    data:{
      limit:8,
      page:1,
      classId:classId,
      name:name,
    },
    success:function(res){
      if(res.msg=="成功"){
        var i=0,index=res.data.list.length,pageNum=res.data.totalPage,current=res.data.currentPage;
        var list=new Array();
        $(".proList").empty() 
        for(i=0;i<index;i++){
          list[i]="<div class='proBox'><a target='_blank' href='productDetail.html?pkId="
                  +res.data.list[i].pkId+"'><div class='proPic'><img src="
                  +res.data.list[i].pathList[0]+"></div><div class='proFont'><p>"
                  +res.data.list[i].name+"</p><div class='detail'>"
                  +res.data.list[i].shortIntroduce+"</div></div></a></div>"
          $(".proList").append(list[i]) 
        };
        paging(pageNum,current)
      }
      else{
        $(".proList").empty(); 
        $(".zxf_pagediv").empty();
        $(".proList").append("<div class='searchNone'>无相关搜索结果！</div>") 
      }
    },
    error:function(){
    }
  })
}
/*搜索 */

function hard(){
  classId=1;
  $("#hard").addClass("classFont");
  $("#soft").removeClass("classFont");
  $("#all").removeClass("classFont");
  search(classId,name);
  return classId;
}

function soft(){
  classId=2;
  $("#soft").addClass("classFont");
  $("#hard").removeClass("classFont");
  $("#all").removeClass("classFont");
  search(classId,name);
  return classId;
}

$("#all").click(
  function (){
    classId=0;
    $("#all").addClass("classFont");
    $("#soft").removeClass("classFont");
    $("#hard").removeClass("classFont");
    search(classId,name);
    return classId;
  }
)
/*类型选择 */

function paging(pageNum,current){
  $(".zxf_pagediv").empty();
  $(".zxf_pagediv").createPage({
    pageNum: pageNum,
    current: current,
    backfun: function(e) {}
  });
  $(".zxfInput").val(current);
}
/*分页显示*/

function page(page,classId){
  $.ajax({
    url:baseURL+'/products/list',
    async:true,
    type:'GET',
    dataType:"json",
    data:{
      limit:8,
      page:page.current,
      classId:classId,
      name:"",
    },
    success:function(res){
      var i=0,index=res.data.list.length,current=res.data.currentPage;
      var list=new Array();
      $(".proList").empty() 
      for(i=0;i<index;i++){
        list[i]="<div class='proBox'><a target='_blank' href='productDetail.html?pkId="
                +res.data.list[i].pkId+"'><div class='proPic'><img src="
                +res.data.list[i].pathList[0]+"></div><div class='proFont'><p>"
                +res.data.list[i].name+"</p><div class='detail'>"
                +res.data.list[i].shortIntroduce+"</div></div></a></div>"
        $(".proList").append(list[i]) 
      };
      $(".zxfInput").val(current);
    },
    error:function(){
    }
  })
}
/*分页 */
