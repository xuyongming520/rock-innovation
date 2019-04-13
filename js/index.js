$(function(){
  business()
  company()
  science()
})

function business(){
  $.ajax({
    url:baseURL+'/news/list',
    async:true,
    type:'GET',
    dataType:"json",
    data:{
      limit:3,
      page:1,
      classId:1,
      name:""
    },
    success:function(res){
      var i=0,index=res.data.list.length;
      var list=new Array(),time=new Array();
      $("#business").empty() 
      for(i=0;i<index;i++){
        time[i]=res.data.list[i].releaseDate.substring(-1,10);
        list[i]="<div id='content'><a target='_blank' href='views/newsDetail.html?pkId="
                +res.data.list[i].pkId+"'>"
                +res.data.list[i].title+"</a><div id='time'>"
                +time[i]+"</div></div>";
        $("#business").append(list[i]) 
      };
    },
    error:function () { 
      alert("获取错误")
    }
  })
}

function company(){
  $.ajax({
    url:baseURL+'/news/list',
    async:true,
    type:'GET',
    dataType:"json",
    data:{
      limit:3,
      page:1,
      classId:2,
      name:""
    },
    success:function(res){
      var i=0,index=res.data.list.length;
      var list=new Array(),time=new Array();
      $("#company").empty() 
      for(i=0;i<index;i++){
        time[i]=res.data.list[i].releaseDate.substring(-1,10);
        list[i]="<div id='content'><a target='_blank' href='views/newsDetail.html?pkId="+res.data.list[i].pkId+"'>"
                +res.data.list[i].title+"</a><div id='time'>"
                +time[i]+"</div></div>";
        $("#company").append(list[i]) 
      };
    },
    error:function () { 
      alert("获取错误")
    }
  })
}

function science(){
  $.ajax({
    url:baseURL+'/news/list',
    async:true,
    type:'GET',
    dataType:"json",
    data:{
      limit:3,
      page:1,
      classId:3,
      name:""
    },
    success:function(res){
      var i=0,index=res.data.list.length;
      var list=new Array(),time=new Array();
      $("#science").empty() 
      for(i=0;i<index;i++){
        time[i]=res.data.list[i].releaseDate.substring(-1,10);
        list[i]="<div id='content'><a target='_blank' href='views/newsDetail.html?pkId="
                +res.data.list[i].pkId+"'>"
                +res.data.list[i].title+"</a><div id='time'>"
                +time[i]+"</div></div>";
        $("#science").append(list[i]) 
      };
    },
    error:function () { 
      alert("获取错误")
    }
  })
}

