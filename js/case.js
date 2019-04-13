$(function(){
  caseList();
})

function caseList(){
  $.ajax({
    url:baseURL+'/case/list',
    async:true,
    type:'GET',
    dataType:"json",
    data:{
      limit:6,
      page:1,
      name:"",
    },
    success:function(res){
      var i=0,index=res.data.list.length,pageNum=res.data.totalPage,current=res.data.currentPage;
      var list=new Array(),time=new Array();
      $(".caseList").empty() 
      for(i=0;i<index;i++){
        time[i]=res.data.list[i].releaseTime.substring(0,10);
        list[i]="<div class='caseBox'><a target='_blank' href='caseDetail.html?pkId="
                +res.data.list[i].pkId+"'><div class='casePic'><img src='"
                +res.data.list[i].cover+"'/></div><div class='caseFont'><p>"
                +res.data.list[i].title+"</p><div class='author'>"
                +res.data.list[i].author+"</div><time>"
                +time[i]+"</time></div></a></div>"
        $(".caseList").append(list[i]) 
      };
      $(".zxf_pagediv").createPage({
        pageNum: pageNum,
        current: current,
        backfun: function(e) {
        }
      });
      $(".zxfInput").val(current);
    },
    error:function(){
      alert("获取错误")
    }
  })
}
/*加载新闻列表 */

function page(page){
  $.ajax({
    url:baseURL+'/case/list',
    async:true,
    type:'GET',
    dataType:"json",
    data:{
      limit:6,
      page:page.current,
      name:"",
    },
    success:function(res){
      var i=0,index=res.data.list.length,pageNum=res.data.totalPage,current=res.data.currentPage;
      var list=new Array(),time=new Array();
      $(".caseList").empty() 
      for(i=0;i<index;i++){
        time[i]=res.data.list[i].releaseTime.substring(0,10);
        list[i]="<div class='caseBox'><a target='_blank' href='caseDetail.html?pkId="
                +res.data.list[i].pkId+"'><div class='casePic'><img src='"
                +res.data.list[i].cover+"'/></div><div class='caseFont'><p>"
                +res.data.list[i].title+"</p><div class='author'>"
                +res.data.list[i].author+"</div><time>"
                +time[i]+"</time></div></a></div>"
        $(".caseList").append(list[i]) 
      };
      $(".zxfInput").val(current);
    },
    error:function(){
      alert("获取错误")
    }
  })
}
/*分页 */



