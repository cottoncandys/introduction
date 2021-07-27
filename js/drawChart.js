/*******************************  bar chart *********************************/


let values = [50,200,150,100,25,50,200,150,100,25,50,200,200,100,25];

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




/*****************************Brand*Number*Run******************************** */



$(window).on('scroll', function () {
    if (checkVisible($('#p01'))) {

        $('.mycount').each(function () {
            var $this = $(this),
                countTo = $this.text();//$this.attr('data-count');

            $({ countNum: $this.text() }).animate({
                countNum: countTo
            }, {
                duration: 4000,
                easing: 'swing',
                step: function () {
                    $this.text(Math.floor(this.countNum) + '%');
                },
                complete: function () {
                    $this.text((this.countNum) + '%');
                }
            });

        });
        $(window).off('scroll');

    }

});

$(".nav.big ul li:nth-child(6)").click(function (e) {
    e.preventDefault();
    $(".active", $(this).closest("ul.nav-tabs li")).removeClass("active");
    $(this).addClass("active vv");
    $("ul.nav-tabs li").eq(0).addClass("active").siblings(".active").removeClass("active");//預設在第一個tab
    $(".tab-pane").eq(0).addClass("active").siblings(".active").removeClass("active");//預設在第一個tab連動的子項目
});


function checkVisible(elm, eval) {
    eval = eval || "object visible";
    var viewportHeight = $(window).height(), // Viewport Height
        scrolltop = $(window).scrollTop(), // Scroll Top
        y = $(elm).offset().top,
        elementHeight = $(elm).height();

    if (eval == "object visible") return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
    if (eval == "above") return ((y < (viewportHeight + scrolltop)));
}

