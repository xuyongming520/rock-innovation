$(function(){
  $(".weChatLogo").hide()
})

$("#news").click(
  function(){
    window.location.href="news.html"
  }
)
$("#fNews a").click(
  function(){
    window.location.href="news.html"
  }
)
/*新闻资讯*/
$("#pro").click(
  function(){
    window.location.href="product.html"
  }
)
$("#fPro a").click(
  function(){
    window.location.href="product.html"
  }
)
/*产品信息 */
$("#case").click(
  function(){
    window.location.href="case.html"
  }
)
$("#fCase a").click(
  function(){
    window.location.href="case.html"
  }
)
/*应用案例 */
$("#about").click(
  function(){
    window.location.href="about.html"
  }
)
$("#fAbout a").click(
  function(){
    window.location.href="about.html"
  }
)
/*关于我们 */
$("#policeLogo").click(
  function(){
    window.open("http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33060202000686")
  }
)
$("#FooterInfoLogo").click(
  function(){
    window.location.href="../index.html"
  }
)

$(".weChat img").mouseover(
  function(){
    $(".weChatLogo").show()
  }
).mouseout(
  function(){
    $(".weChatLogo").hide()
  }
)



