$(function(){
  about();
  history()
})

function about(){
  $.ajax({
    url:baseURL+'/company/detail',
    async:true,
    type:'GET',
    dataType:"json",
    data:{
      id:1,
    },
    success:function(res){
      $(".introduction p").append(res.data.introduce)
      $("#address h3").append("公司地址:      "+res.data.address)
      $("#phone h3").append("联系电话:      "+res.data.telphone)
      $("#mail h3").append("电子邮箱:      "+res.data.email)
    },
    error:function () { 
      alert("获取错误")
    }
  })
}

function history(){
  $.ajax({
    url:baseURL+'/company/develop/list',
    async:true,
    type:'GET',
    dataType:"json",
    success:function(res){
      var year=0,month=0,i=0;
      for(i=0;i<res.data.length;i++){
        year=res.data[i].releaseDate.substring(0,4);
        month=res.data[i].releaseDate.substring(5,7);
        $(".history").append("<div class='item'><div class='date'><div class='year'>"
                              +year+"</div><div class='month'><span>"
                              +month+"</span><span>月</span></div></div><div class='info'><div><span>"
                              +res.data[i].content+"</span></div></div></div>"
        )
      }
    },
    error:function () { 
      alert("获取错误")
    }
  })
}