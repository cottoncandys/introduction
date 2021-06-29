$(document).ready(function () {

    /*******************************  works slider ********************************/
    // $("[id^=click_]").click(function () {
    //     var id = $(this).attr("id").split("click_")[1];
    //     alert(id);

    // });

    //slider


    // var idss = $("[id^=tArticle]").length;
    // // var bb = idss.attr("id").split("tArticle")[1];
    // // $("div [id^=tArticle]").each(function () {
    // //     bb++;
    // // });
    // // alert(bb);
   
    // let ids = document.getElementsById("[id^=tArticle]");
    // for (var i = 0; i < ids.length; i++) {
    
    // // if ($('.tab-pane').hasClass('active')){
    // if (idss > 0) {
    //     // var ids = idss.attr("id").split("tArticle")[1];
    //     var list = ids[i].find(".list").eq(0);
    //     var $item_id = 0;
    //     var $item_limit = ids[i].attr("limit") || 2;
    //     var $item_max = list.find("a").length;
    //     var $item_page = Math.ceil($item_max / $item_limit);
    //     var next_btn = ids[i].find(".next").eq(0);
    //     var prev_btn = ids[i].find(".prev").eq(0);

    //     next_btn.hide();
    //     prev_btn.hide();
    //     if ($item_page > 1) {
    //         next_btn.fadeIn();
    //     }

    //     next_btn.click(function () {
    //         if (parseInt(list.css("left")) + list.prop('scrollWidth') > list.width()) {
    //             var containW = ids[i].find(".list-area").width();
    //             $item_id += 1;
    //             list.css("left", $item_id * containW * -1);

    //             prev_btn.fadeIn();
    //             if ($item_id == $item_page - 1) {
    //                 next_btn.fadeOut();
    //             } else {
    //                 next_btn.fadeIn();
    //             }
    //         }
    //     });
    //     prev_btn.click(function () {
    //         if ($item_id > 0) {
    //             var containW = ids[i].find(".list-area").width();
    //             $item_id -= 1;
    //             list.css("left", $item_id * containW * -1);

    //             next_btn.fadeIn();
    //             if ($item_id == 0) {
    //                 prev_btn.fadeOut();
    //             } else {
    //                 prev_btn.fadeIn();
    //             }
    //         }
    //     });

    // }
    // }
    /* --------------------- */
 


  

/* ------------------- */

    if ($("#tArticle1").length > 0) {
        var list1 = $("#tArticle1").find(".list").eq(0);
        var $item_id1 = 0;
        var $item_limit1 = $("#tArticle1").attr("limit") || 2; //計算字串長度
        var $item_max1 = list1.find("a").length;
        var $item_page1 = Math.ceil($item_max1 / $item_limit1);
        var next_btn1 = $("#tArticle1").find(".next").eq(0);
        var prev_btn1 = $("#tArticle1").find(".prev").eq(0);

        next_btn1.hide();
        prev_btn1.hide();
        if ($item_page1 > 1) {
            next_btn1.fadeIn();
        }

        next_btn1.click(function () {
            if (parseInt(list1.css("left")) + list1.prop('scrollWidth') > list1.width()) {
                var containW1 = $("#tArticle1").find(".list-area").width();
                $item_id1 += 1;
                list1.css("left", $item_id1 * containW1 * -1);

                prev_btn1.fadeIn();
                if ($item_id1 == $item_page1 - 1) {
                    next_btn1.fadeOut();
                } else {
                    next_btn1.fadeIn();
                }
            }
        });
        prev_btn1.click(function () {
            if ($item_id1 > 0) {
                var containW1 = $("#tArticle1").find(".list-area").width();
                $item_id1 -= 1;
                list1.css("left", $item_id1 * containW1 * -1);

                next_btn1.fadeIn();
                if ($item_id1 == 0) {
                    prev_btn1.fadeOut();
                } else {
                    prev_btn1.fadeIn();
                }
            }
        });

    }

    if ($("#tArticle2").length > 0) {
        var list2 = $("#tArticle2").find(".list").eq(0);
        var $item_id2 = 0;
        var $item_limit2 = $("#tArticle2").attr("limit") || 2; //計算字串長度
        var $item_max2 = list2.find("a").length;
        var $item_page2 = Math.ceil($item_max2 / $item_limit2);
        var next_btn2 = $("#tArticle2").find(".next").eq(0);
        var prev_btn2 = $("#tArticle2").find(".prev").eq(0);

        next_btn2.hide();
        prev_btn2.hide();
        if ($item_page2 > 1) {
            next_btn2.fadeIn();
        }

        next_btn2.click(function () {
            if (parseInt(list2.css("left")) + list2.prop('scrollWidth') > list2.width()) {
                var containW2 = $("#tArticle2").find(".list-area").width();
                $item_id2 += 1;
                list2.css("left", $item_id2 * containW2 * -1);

                prev_btn2.fadeIn();
                if ($item_id2 == $item_page2 - 1) {
                    next_btn2.fadeOut();
                } else {
                    next_btn2.fadeIn();
                }
            }
        });
        prev_btn2.click(function () {
            if ($item_id2 > 0) {
                var containW2 = $("#tArticle2").find(".list-area").width();
                $item_id2 -= 1;
                list2.css("left", $item_id2 * containW2 * -1);

                next_btn2.fadeIn();
                if ($item_id2 == 0) {
                    prev_btn2.fadeOut();
                } else {
                    prev_btn2.fadeIn();
                }
            }
        });

    }

    if ($("#tArticle3").length > 0) {
        var list3 = $("#tArticle3").find(".list").eq(0);
        var $item_id3 = 0;
        var $item_limit3 = $("#tArticle3").attr("limit") || 2; //計算字串長度
        var $item_max3 = list3.find("a").length;
        var $item_page3 = Math.ceil($item_max3 / $item_limit3);
        var next_btn3 = $("#tArticle3").find(".next").eq(0);
        var prev_btn3 = $("#tArticle3").find(".prev").eq(0);

        next_btn3.hide();
        prev_btn3.hide();
        if ($item_page3 > 1) {
            next_btn3.fadeIn();
        }

        next_btn3.click(function () {
            if (parseInt(list3.css("left")) + list3.prop('scrollWidth') > list3.width()) {
                var containW3 = $("#tArticle3").find(".list-area").width();
                $item_id3 += 1;
                list3.css("left", $item_id3 * containW3 * -1);

                prev_btn3.fadeIn();
                if ($item_id3 == $item_page3 - 1) {
                    next_btn3.fadeOut();
                } else {
                    next_btn3.fadeIn();
                }
            }
        });
        prev_btn3.click(function () {
            if ($item_id3 > 0) {
                var containW3 = $("#tArticle3").find(".list-area").width();
                $item_id3 -= 1;
                list3.css("left", $item_id3 * containW3 * -1);

                next_btn3.fadeIn();
                if ($item_id3 == 0) {
                    prev_btn3.fadeOut();
                } else {
                    prev_btn3.fadeIn();
                }
            }
        });

    }

    if ($("#tArticle4").length > 0) {
        var list4 = $("#tArticle4").find(".list").eq(0);
        var $item_id4 = 0;
        var $item_limit4 = $("#tArticle4").attr("limit") || 2; //計算字串長度
        var $item_max4 = list4.find("a").length;
        var $item_page4 = Math.ceil($item_max4 / $item_limit4);
        var next_btn4 = $("#tArticle4").find(".next").eq(0);
        var prev_btn4 = $("#tArticle4").find(".prev").eq(0);

        next_btn4.hide();
        prev_btn4.hide();
        if ($item_page4 > 1) {
            next_btn4.fadeIn();
        }

        next_btn4.click(function () {
            if (parseInt(list4.css("left")) + list4.prop('scrollWidth') > list4.width()) {
                var containW4 = $("#tArticle4").find(".list-area").width();
                $item_id4 += 1;
                list4.css("left", $item_id4 * containW4 * -1);

                prev_btn4.fadeIn();
                if ($item_id4 == $item_page4 - 1) {
                    next_btn4.fadeOut();
                } else {
                    next_btn4.fadeIn();
                }
            }
        });
        prev_btn4.click(function () {
            if ($item_id4 > 0) {
                var containW4 = $("#tArticle4").find(".list-area").width();
                $item_id4 -= 1;
                list4.css("left", $item_id4 * containW4 * -1);

                next_btn4.fadeIn();
                if ($item_id4 == 0) {
                    prev_btn4.fadeOut();
                } else {
                    prev_btn4.fadeIn();
                }
            }
        });

    }

    if ($("#tArticle5").length > 0) {
        var list5 = $("#tArticle5").find(".list").eq(0);
        var $item_id5 = 0;
        var $item_limit5 = $("#tArticle5").attr("limit") || 2; //計算字串長度
        var $item_max5 = list5.find("a").length;
        var $item_page5 = Math.ceil($item_max5 / $item_limit5);
        var next_btn5 = $("#tArticle5").find(".next").eq(0);
        var prev_btn5 = $("#tArticle5").find(".prev").eq(0);

        next_btn5.hide();
        prev_btn5.hide();
        if ($item_page5 > 1) {
            next_btn5.fadeIn();
        }

        next_btn5.click(function () {
            if (parseInt(list5.css("left")) + list5.prop('scrollWidth') > list5.width()) {
                var containW5 = $("#tArticle5").find(".list-area").width();
                $item_id5 += 1;
                list5.css("left", $item_id5 * containW5 * -1);

                prev_btn5.fadeIn();
                if ($item_id5 == $item_page5 - 1) {
                    next_btn5.fadeOut();
                } else {
                    next_btn5.fadeIn();
                }
            }
        });
        prev_btn5.click(function () {
            if ($item_id5 > 0) {
                var containW5 = $("#tArticle5").find(".list-area").width();
                $item_id5 -= 1;
                list5.css("left", $item_id5 * containW5 * -1);

                next_btn5.fadeIn();
                if ($item_id5 == 0) {
                    prev_btn5.fadeOut();
                } else {
                    prev_btn5.fadeIn();
                }
            }
        });

    }

    if ($("#tArticle6").length > 0) {
        var list6 = $("#tArticle6").find(".list").eq(0);
        var $item_id6 = 0;
        var $item_limit6 = $("#tArticle6").attr("limit") || 2; //計算字串長度
        var $item_max6 = list6.find("a").length;
        var $item_page6 = Math.ceil($item_max6 / $item_limit6);
        var next_btn6 = $("#tArticle6").find(".next").eq(0);
        var prev_btn6 = $("#tArticle6").find(".prev").eq(0);

        next_btn6.hide();
        prev_btn6.hide();
        if ($item_page6 > 1) {
            next_btn6.fadeIn();
        }

        next_btn6.click(function () {
            if (parseInt(list6.css("left")) + list6.prop('scrollWidth') > list6.width()) {
                var containW6 = $("#tArticle6").find(".list-area").width();
                $item_id6 += 1;
                list6.css("left", $item_id6 * containW6 * -1);

                prev_btn6.fadeIn();
                if ($item_id6 == $item_page6 - 1) {
                    next_btn6.fadeOut();
                } else {
                    next_btn6.fadeIn();
                }
            }
        });
        prev_btn6.click(function () {
            if ($item_id6 > 0) {
                var containW6 = $("#tArticle6").find(".list-area").width();
                $item_id6 -= 1;
                list6.css("left", $item_id6 * containW6 * -1);

                next_btn6.fadeIn();
                if ($item_id6 == 0) {
                    prev_btn6.fadeOut();
                } else {
                    prev_btn6.fadeIn();
                }
            }
        });

    }

    if ($("#tArticle7").length > 0) {
        var list7 = $("#tArticle7").find(".list").eq(0);
        var $item_id7 = 0;
        var $item_limit7 = $("#tArticle7").attr("limit") || 2; //計算字串長度
        var $item_max7 = list7.find("a").length;
        var $item_page7 = Math.ceil($item_max7 / $item_limit7);
        var next_btn7 = $("#tArticle7").find(".next").eq(0);
        var prev_btn7 = $("#tArticle7").find(".prev").eq(0);

        next_btn7.hide();
        prev_btn7.hide();
        if ($item_page7 > 1) {
            next_btn7.fadeIn();
        }

        next_btn7.click(function () {
            if (parseInt(list7.css("left")) + list7.prop('scrollWidth') > list7.width()) {
                var containW7 = $("#tArticle7").find(".list-area").width();
                $item_id7 += 1;
                list7.css("left", $item_id7 * containW7 * -1);

                prev_btn7.fadeIn();
                if ($item_id7 == $item_page7 - 1) {
                    next_btn7.fadeOut();
                } else {
                    next_btn7.fadeIn();
                }
            }
        });
        prev_btn7.click(function () {
            if ($item_id7 > 0) {
                var containW7 = $("#tArticle7").find(".list-area").width();
                $item_id7 -= 1;
                list7.css("left", $item_id7 * containW7 * -1);

                next_btn7.fadeIn();
                if ($item_id7 == 0) {
                    prev_btn7.fadeOut();
                } else {
                    prev_btn7.fadeIn();
                }
            }
        });

    }






 //fill images
            // $(".img").imgLiquid({
            //     fill: true,
            //     onItemFinish: function (index, container, img) { container.addClass('active'); }
            // });



})

// $(window).load(function () {
//     resizeScreen();
// });