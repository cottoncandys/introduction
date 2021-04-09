//web scroll/nav scroll
$('.cd-nav-trigger').on('click', function () {
    if ($('.cd-primary-nav').hasClass('fade-in')) {
        $("body").css("overflow-y", "auto");
    } else {
        $("body").css("overflow-y", "hidden");
    }
});

$(function () {
    $('[href^="#p"]').on('click', function (e) {
        $('.cd-primary-nav').removeClass('fade-in');
        $('.cd-overlay-nav').children('span').velocity({
            translateZ: 0,
            scaleX: 0,
            scaleY: 0,
        }, 0);
        $('.cd-nav-trigger').removeClass('close-nav');
        $("body").css("overflow-y", "auto");
    });

    $('[href="#aboutMeModal"]').on('click', function (e) {
        $('.cd-primary-nav').removeClass('fade-in');
        $('.cd-overlay-nav').children('span').velocity({
            translateZ: 0,
            scaleX: 0,
            scaleY: 0,
        }, 0);
        $('.cd-nav-trigger').removeClass('close-nav');
        $("body").css("overflow-y", "auto");
    });
});






$(document).ready(function() {



/*************************************************************** */

  //  4.點選導覽列 會到指定圖片
  let num_li = $(".nav li").length;
  for (var i = 0; i <= num_li; i++) {
    //   $("html,body").stop();
      $(".nav li:eq(" + i + ") ").click({//自命名變數i,e
          id: i
      }, function(e) {//
          $(".nav li").removeClass("active").css("background-color", "$gray-l90");//所有的LI 都變回原色 除了被點到的
          $(".nav li").children('.slider').css("visibility", "hidden"); 
          let page = e.data.id ;//把從0開始+1 變成從1開始

          $("html,body").animate({
              "scrollTop": $(".p0" + page).offset().top
          }, 1000);

          $(this).addClass("active");//this= (".nav li:eq("+e.data.id+")") 某個LI被點到 bg就變色
          $(this).children(".slider").css("visibility", "visible");

      })
      
    }
    $(".nav li:eq(4)").click(function(){
        $("#tab2").addClass("active");
        // $("#tab2.active").find("#web").addClass("active");
    })
  //  2.一進入網頁時，nav垂直置中
  center();
  //  3.縮放allpage，重新nav置中
  $(window).resize(function() {
      center();     
  })
  //  1.nav垂直置中的高度
  function center() {
      let pos = $(window).height() / 2 - $(".nav").height() / 2;
      $(".nav").css("top", pos);
  }
  //5用捲動捲軸時改變游標顏色
  $(window).scroll(function() {
      $(".nav li").removeClass("active").css("background-color", "$gray-l90"); //除了被點擊到的游標，其他都恢復成原來的顏色 
      $(".nav li .slider").css("visibility", "hidden");

      if ($(window).scrollTop() >= $(".p00").offset().top && $(window).scrollTop() < $(".p01").offset().top) {
          $(".nav li:eq(0)").addClass("active");
      } else if ($(window).scrollTop() >= $(".p01").offset().top && $(window).scrollTop() < $(".p02").offset().top) {
          $(".nav li:eq(1)").addClass("active");
          $(".nav li:eq(1) .slider").css("visibility", "visible");
      } else if ($(window).scrollTop() >= $(".p02").offset().top && $(window).scrollTop() < $(".p03").offset().top) {
          $(".nav li:eq(2)").addClass("active");
          $(".nav li:eq(2) .slider").css("visibility", "visible");
      } else if ($(window).scrollTop() >= $(".p03").offset().top && $(window).scrollTop() < $(".p04").offset().top) {
          $(".nav li:eq(3)").addClass("active");
          $(".nav li:eq(3) .slider").css("visibility", "visible");
      } else if ($(window).scrollTop() >= $(".p04").offset().top && $(window).scrollTop() < $(".p05").offset().top) {
          $(".nav li:eq(4)").addClass("active");
          $(".nav li:eq(4) .slider").css("visibility", "visible");
          $("#tab2").addClass("active");
      } else if ($(window).scrollTop() >= $(".p05").offset().top && $(window).scrollTop() < $(".p06").offset().top) {
          $(".nav li:eq(5)").addClass("active");
          $(".nav li:eq(5) .slider").css("visibility", "visible");
          $("#tab2").addClass("active");
          //   $("#tab2").hasClass("active").find("#web").addClass("active");
      } else if ($(window).scrollTop() >= $(".p06").offset().top) {
          $(".nav li:eq(6)").addClass("active");
          $(".nav li:eq(6) .slider").css("visibility", "visible");
      }

  })


/*******************************time line ******************************** */

    new WOW({ live: true }).init();
    wow = new WOW(
        {
            boxClass: 'section-title',// 需要执行动画的元素的类名      
            animateClass: 'animated', // animation.css 动画类名
            offset: 0,          //（相对于底部）距離顯示多遠開始顯示動畫 (預設是0, 因此捲動到顯示時才出現動畫)
            mobile: true,       // 是否在移动设备执行动画
            live: true ,     //非同步產生的內容是否也要套用 
            callback:function () {
                // $('.section-title:after').css('visibility','visible');
                // $('.section-title:after').fadeIn();
               // 當每個要開始時, 呼叫這裡面的內容, 參數是要開始進行動畫特效的element DOM
            },
            scrollContainer: '.cd-primary-nav.fade-in' // 只套用在某個container中捲動才呈現, 不設定就是整個視窗
        
        }
    )
    wow.init();

   



});//document ready END

// $(window).load(function () {
//     resizeScreen();
// });







/*******************************  bar chart *********************************/

let values = [50,200,150,100,25,50,200,150,100,25,50,200,150,100,25];

drawChart(values,"#chart",15) 

let barbox = document.getElementsByClassName("barra");
for(var i = 0; i < barbox.length; i++)
{
        barbox[i].className += " barra"+ [i+1];
        barbox[i].appendChild(document.createElement('span'));
        // barbox.item(i).classList.add(span);        
}
            
function drawChart(data,selector,padding){
    let max = Math.max.apply(Math, data);
    let chart = document.querySelector(selector);
    let barwidth = ((chart.offsetWidth-(values.length-1)*padding-(data.length)*10) /data.length) * 100;
    let sum = data.reduce(function(pv, cv) { return pv + cv; }, 0);
    let left = 0;
	for (var i in data){
	  let newbar = document.createElement('div');
      newbar.setAttribute("class", "barra");//wow slideInUp 
	  newbar.style.width=(barwidth/max)+"%";
	  newbar.style.height=((data[i]/max)*100)+"%";
	  newbar.style.left=left+"px";
	  chart.appendChild(newbar);
	  left += barwidth+padding+10;
	}
}

$(".barra").each(function(i, el){
    $(el).on({
        mousemove: function(e){
            $(".pointer").fadeIn(50).offset({
                top: e.pageY - 45,
                left: e.pageX -20
            });
            var lis = $("#xAxis > li ");
            $(".note").text( lis.eq(i).children("span").text() );
        },
        mouseleave: function(){
            $(".pointer").fadeOut(50);
        }
    });
  });




/*******************************  tabs *********************************/


$.fn.tabbing = function (options) {
    var opts = { delayTime: 300 };
    options = options || {};
    opts = $.extend(opts, options);
    return this.each(function () {
        $(this).on('click', function (event) {
            event.preventDefault();
            var sum = 0;
            $(this).prevAll().each(function () { sum += $(this).width(); });
            var get = document.getElementById('tabs').scrollWidth
            var dist = sum - ($(this).parent().width() - $(this).width()) / 2;
            if (dist < 0) {
                dist = 0;
            }
            /* else if(dist+sum > get){
              dist = get-sum+dist+dist;
            } */
            $(this).parent().animate({
                scrollLeft: dist
            }, opts['delayTime']);
        });
    });
};
$('#tabs li').tabbing();


$('#tabs li').click(function () {
    var hashit = $(this).find('a').attr('href')
    var autoHeight = $(hashit).height() + 30;
    $('.tab-content').animate({ height: autoHeight }, 100);
});

/********************************************************************/


