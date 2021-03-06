$(function(){
  newsTopList();
  newsList();
  newsTopPic()
})

function newsTopList(){
  $.ajax({
    url:baseURL+'/news/list',
    async:true,
    type:'GET',
    dataType:"json",
    data:{
      limit:3,
      page:1,
      classId:0,
      name:"",
    },
    success:function(res){
      var i=0;
      var year=new Array(),month=new Array(),day=new Array(),list=new Array(),content=new Array();
      var pattern =new RegExp("<([^>]*)>");
      $(".headRight").empty() 
      for(i=0;i<3;i++){
        year[i]=res.data.list[i].releaseDate.substring(-1,4);
        month[i]=res.data.list[i].releaseDate.substring(5,7);
        day[i]=res.data.list[i].releaseDate.substring(8,10);
        content=res.data.list[i].content
        while(pattern.test(content)){
          content=content.replace(pattern,'');
        }
        list[i]="<div class='listTop'><div class='listLeft'><span class='year'>"
                +year[i]+"</span><span class='month'>"
                +month[i]+"月<b>/"+day[i]
                +"</b></span></div><div class='listRight'><a target='_blank' href='newsDetail.html?pkId="
                +res.data.list[i].pkId+"'><span class='title'>"
                +res.data.list[i].title+"</span><p>"
                +content+"</p></a></div><div class='clear'></div></div>"
                $(".headRight").append(list[i]) 
      }
    },
    error:function(){
    }
  })
}
/*加载头部新闻列表 */

function newsTopPic(){
  $.ajax({
    url:baseURL+'/company/upload/detail',
    async:true,
    type:'GET',
    dataType:"json",
    success:function(res){
      $(".headLeft").empty() 
      $(".headLeft").append("<a href='"+res.data.url+"'><img src='"+res.data.image+"'></img></a>") 
    },
    error:function(){
    }
  })
}
/*加载头部图片 */

function newsList(){
  $.ajax({
    url:baseURL+'/news/list',
    async:true,
    type:'GET',
    dataType:"json",
    data:{
      limit:10,
      page:1,
      classId:0,
      name:"",
    },
    success:function(res){
      var i=0,status=null,index=res.data.list.length,pageNum=res.data.totalPage,current=res.data.currentPage;
      var list=new Array(),year=new Array(),month=new Array(),day=new Array();
      $(".newsList").empty() 
      for(i=0;i<index;i++){
        year[i]=res.data.list[i].releaseDate.substring(-1,4);
        month[i]=res.data.list[i].releaseDate.substring(5,7);
        day[i]=res.data.list[i].releaseDate.substring(8,10);
        if(res.data.list[i].classId==1){
          status="行业动态"
        }
        else if(res.data.list[i].classId==2){
          status="公司动态"
        }
        else if(res.data.list[i].classId==3){
          status="科研动态"
        }
        console.log(res.data.list[i].class)  
        list[i]="<li><a target='_blank' href='newsDetail.html?pkId="+res.data.list[i].pkId+"'>"
                +res.data.list[i].title+"<span>("+status+")</span>"
                +"</a><span class='newsDate'>"
                +year[i]+"/"
                +month[i]+"/"
                +day[i]+"</span>";
        $(".newsList").append(list[i]) 
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
    }
  })
}
/*加载新闻列表 */

function page(page){
  $.ajax({
    url:baseURL+'/news/list',
    async:true,
    type:'GET',
    dataType:"json",
    data:{
      limit:10,
      page:page.current,
      classId:0,
      name:"",
    },
    success:function(res){
      var i=0,index=res.data.list.length,current=res.data.currentPage;
      var list=new Array(),year=new Array(),month=new Array(),day=new Array();
      $(".newsList").empty() 
      for(i=0;i<index;i++){
        year[i]=res.data.list[i].releaseDate.substring(-1,4);
        month[i]=res.data.list[i].releaseDate.substring(5,7);
        day[i]=res.data.list[i].releaseDate.substring(8,10);
        list[i]="<li><a target='_blank' href='newsDetail.html?pkId="+res.data.list[i].pkId+"'>"
                +res.data.list[i].title
                +"</a><span class='newsDate'>"
                +year[i]+"/"
                +month[i]+"/"
                +day[i]+"</span>";
        $(".newsList").append(list[i]) 
      };
      $(".zxfInput").val(current);
      
    },
    error:function(){
    }
  })
}
/*分页 */



