var URL = window.location.href;
var BASE_PATH = URL.substring(0, URL.lastIndexOf('/') + 1);
var EVENT_TYPE = mobilecheck() ? 'tap' : 'click';
var BGM = $("#bgm")[0];
var __isAnimate = true;
var __isSoundOn = true;
var __isLaugh = true;
/**
 * 音乐icon & 提示箭头 
 */
$(function () {
    $(".musicicon").on("touchstart", function () {
        __isSoundOn = !__isSoundOn;
        __isSoundOn ? $(".musicicon").addClass("musicplay") : $("musicicon").removeClass("musicplay");
        __isSoundOn ? BGM.play() : BGM.pause();
    })
});

/**
 * 图片预加载 
 */
$(function () {
    //prevent iphone touchmove
    $(".page").on("touchmove", function (event) {
        event.preventDefault();
    })

    var loader = new PxLoader(),
        // 把页面的图片列在这里
        fileList = [
            'img/loading.png',
            'img/arrow.png',
            'img/music.png',

            'img/page_1/family.png',
            'img/page_1/heart.png',
            'img/page_1/logo1.png',
            'img/page_1/logo2.png',
            'img/page_1/p1_text.png',
            'img/page_1/p1_title.png',
            'img/page_2/p2_family.png',
            'img/page_2/p2_heart.png',
            'img/page_2/p2_text.png',
            'img/page_2/p2_title.png',
            'img/page_2/red.png',
            'img/page_3/iphone.png',
            'img/page_3/man.png',
            'img/page_3/man_2_text.png',
            'img/page_3/woman_1_text.png',
            'img/page_3/man_1_text.png',
            'img/page_3/p7_title.png',
            'img/page_3/woman.png',
            'img/page_3/woman_2_text.png',
            'img/page_4/blueCar.png',
            'img/page_4/blueLight.png',
            'img/page_4/car1Explain.png',
            'img/page_4/car2Explain.png',
            'img/page_4/car3Explain.png',
            'img/page_4/car4Explain.png',
            'img/page_4/carDemo.png',
            'img/page_4/clearBtn.png',
            'img/page_4/cloud.png',
            'img/page_4/explainBottom.png',
            'img/page_4/greenCar.png',
            'img/page_4/greenLight.png',
            'img/page_4/per1Icon.png',
            'img/page_4/per2Icon1.png',
            'img/page_4/per2Icon2.png',
            'img/page_4/per3Icon1.png',
            'img/page_4/per3Icon2.png',
            'img/page_4/per4Icon1.png',
            'img/page_4/person1.png',
            'img/page_4/person2.png',
            'img/page_4/person3.png',
            'img/page_4/person4.png',
            'img/page_4/pinkLight.png',
            'img/page_4/redCar.png',
            'img/page_4/redLight.png',
            'img/page_4/road.png',
            'img/page_5/balloon_green.png',
            'img/page_5/balloon_purple.png',
            'img/page_5/balloon_skyBlue.png',
            'img/page_5/container_1_title.png',
            'img/page_5/container_title.png',
            'img/page_5/p5_data.png',
            'img/page_5/p5_text.png',
            'img/page_5/p5_timer.png',
            'img/page_5/p5_title.png',
            'img/page_6/p6_footer.png',
            'img/page_6/p6_prize.png',
            'img/page_6/p6_prize_1.png',
            'img/page_6/p6_prize_text.png',
            'img/page_6/p6_prize_text_1.png',
            'img/page_6/p6_prize_title.png',
            'img/page_6/p6_prize_title_1.png',
            'img/page_6/p6_title.png',
            'img/page_7/p7_code.png',
            'img/page_7/p7_emil.png',
            'img/page_7/p7_eye.png',
            'img/page_7/p7_footer.png',
            'img/page_7/p7_heart.png',
            'img/page_7/p7_text.png',
            'img/page_8/p8_details.png',
            'img/page_8/p8_emil.png',
            'img/page_8/p8_footer.png',
            'img/page_8/p8_hotLine.png',
            'img/page_8/p8_title.png',
            'img/page_9/p9_family.png',
            'img/page_9/p9_heart.png',
            'img/page_9/p9_text.png',
            'img/page_3/person1text.png',
            'img/page_3/person2text.png',
            'img/page_3/person3text.png',

            'img/share.jpg',

        ];
    for (var i = 1; i <= 13; i++) {
        fileList.push("img/family/" + i + ".png");
    }
    for (var i = 1; i <= 19; i++) {
        fileList.push("img/fire/" + i + ".png");
    }
    for (var i = 1; i <= 10; i++) {
        fileList.push("img/gift/" + i + ".png");
    }
    for (var i = 1; i <= 19; i++) {
        fileList.push("img/ring/" + i + ".png");
    }
    //把图片载入加载器
    for (var i = 0; i < fileList.length; i++) {
        var pxImage = new PxLoaderImage(BASE_PATH + fileList[i]);

        pxImage.imageNumber = i + 1;
        loader.add(pxImage);
    }

    //当加载完成时
    loader.addCompletionListener(function () {
        console.log("预加载图片：" + fileList.length + "张");
        //BGM.play();
        // __isAnimate = false;
        pageShow();
        $(".loading-container").hide();
        $(".page-container").show();
    });

    //loading 进度监听
    loader.addProgressListener(function (e) {
        var percent = Math.round((e.completedCount / e.totalCount) * 100); //正序, 1-100
        $(".loadingProgress2").css("width", percent + "%");
        $(".progressNumb").html(percent + "%");
    });
    //启动
    loader.start();
});

// canvas 序列帧预加载
$(function () {
    canvas_ring.picReady();
    canvas_fire.picReady();
    canvas_gift.picReady();
    canvas_p9family.picReady();
    canvas_p9ring.picReady();
})

/**
 * 交互事件监听 
 */
$(function () {

    bgm_init();
    $(".page").swipeUp(function () {
        nextPage();
    });
    $(".page").swipeDown(function (e) {
        prevPage();
    });
    $(".p4").swipeUp(function () {
        $(".carPost").addClass("invisible");
        __isLaugh = false;
    });
    $(".p4").swipeDown(function (e) {
        $(".carPost").addClass("invisible");
        __isLaugh = false;
    });
    $(".p3").swipeUp(function () {
        __isLaugh = false;
    });
    $(".p5").swipeDown(function (e) {
        __isLaugh = false;
    });

    //p4 小车点击出现遮罩
    $(".car").on(EVENT_TYPE, function () {
        var numb = $(this).attr("data");
        $(".car" + numb + "Post").removeClass("invisible");
        __isAnimate = false;
    });
    $(".person").on(EVENT_TYPE, function () {
        var numb = $(this).attr("data");
        $(".car" + numb + "Post").removeClass("invisible");
        __isAnimate = false;
    });
    //遮罩关闭按钮点击
    $(".clearBtn").on(EVENT_TYPE, function () {
        $(this).parent().addClass("invisible");
    });
});



/**
 * ios 手机不能自动播放声音
 */
function bgm_init() {
    document.addEventListener("WeixinJSBridgeReady", function () {
        BGM.play();
    }, false);

}

function prevPage() {
    if (__isAnimate) return;
    var pageNo = $(".cur").attr("data-page");
    if (pageNo == 1) return;
    pageLeave();

    __isAnimate = true;
    $(".cur").addClass("page-prev-out");
    $(".cur").prev(".page").addClass("page-prev-in");
    setTimeout(function () {
        $(".cur").removeClass("cur").prev(".page").addClass("cur");
    }, 200);
    setTimeout(function () {
        $(".page-prev-out").removeClass("page-prev-out");
        $(".page-prev-in").removeClass("page-prev-in");
        __isAnimate = false;
        pageShow();
    }, 400);
}

function nextPage() {
    if (__isAnimate) return;
    var pageNo = $(".cur").attr("data-page");
    if (pageNo == 9) return;

    __isAnimate = true;
    $(".cur").addClass("page-next-out");
    $(".cur").next(".page").addClass("page-next-in");
    setTimeout(function () {
        $(".cur").removeClass("cur").next(".page").addClass("cur");
    }, 200);
    setTimeout(function () {
        $(".page-next-out").removeClass("page-next-out");
        $(".page-next-in").removeClass("page-next-in");
        __isAnimate = false;
        pageShow();
    }, 500);
}



function pageShow() {
    var pageNo = $(".cur").attr("data-page");
    switch (pageNo) {
        case "1":
            showPage1();
            break;
        case "2":
            showPage2();
            break;
        case "3":
            showPage3();
            break;
        case "4":
            showPage4();
            break;
        case "5":
            showPage5();
            break;
        case "6":
            showPage6();
            break;
        case "7":
            showPage7();
            break;
        case "8":
            showPage8();
            break;
        case "9":
            showPage9();
            break;
        default:
            showPage1();
            break;
    }
}

var p1First = true;

function showPage1() {
    if (!p1First) {
        __isAnimate = false;
        canvas_ring.start();
        return;
    }
    p1First = false;
    $(".ring").addClass("ring_anim");
    $(".p1_title").addClass("p1_title_anim");
    $(".family").addClass("family_anim");
    $(".p1_text").addClass("p1_text_anim");
    $(".arrowW1").addClass("arrpwW1_anim");
    canvas_ring.start();
    setTimeout(() => {
        __isAnimate = false;
    }, 2000);
}

var p2First = true;

function showPage2() {
    if (!p2First) {
        __isAnimate = false;
        return;
    }
    __isAnimate = true;
    p2First = false;
    $(".color_red").addClass("color_red_anim");
    $(".p2_family").addClass("p2_family_anim");
    $(".p2_title").addClass("p2_title_anim");
    $(".p2_text").addClass("p2_text_anim");
    $(".p2_heartW").addClass("p2_heart1_anim");
    $(".p2_heart").addClass("p2_heart_anim");
    $(".arrowW2").addClass("arrowW2_anim");
    setTimeout(() => {
        __isAnimate = false;
    }, 3500);
}

var p3First = true;

function showPage3() {
    if (!p3First) {
        __isAnimate = false;
        return;
    }
    __isAnimate = true;
    p3First = false;
    $(".man_1").addClass("man_1_anim");
    $(".man_2").addClass("man_2_anim");
    $(".woman_1").addClass("woman_1_anim");
    $(".woman_2").addClass("woman_2_anim");
    $(".man_1_textBg").addClass("man_1_text_anim");
    $(".man_2_textBg").addClass("man_2_text_anim");
    $(".woman_1_textBg").addClass("woman_1_text_anim");
    $(".woman_2_textBg").addClass("woman_2_text_anim");
    $(".man_1_textW").removeClass("opacity0");
    $(".man_2_textW").removeClass("opacity0");
    $(".woman_1_textW").removeClass("opacity0");
    $(".woman_2_textW").removeClass("opacity0");
    $(".arrowW3").addClass("arrowW3_anim");
    setTimeout(() => {
        drawText("canvasText1", "man_1_text", manText1);
    }, 1000);
    setTimeout(() => {
        drawText("canvasText2", "woman_1_text", womanText1);
    }, 3500);
    setTimeout(() => {
        drawText("canvasText3", "man_2_text", manText2);
    }, 8000);
    setTimeout(() => {
        drawText("canvasText4", "woman_2_text", womanText2);
    }, 10500);
    setTimeout(() => {
        __isAnimate = false;
    }, 11500);
}

var p4First = true;

function showPage4() {
    if (!p4First) {
        __isAnimate = false;
        return;
    }
    __isAnimate = true;
    p4First = false;

    $(".road").addClass("road_anim");
    $(".cloud1").addClass("cloud1_anim");
    $(".cloud2").addClass("cloud2_anim");
    $(".cloud3").addClass("cloud3_anim");
    $(".cloud4").addClass("cloud4_anim");
    setTimeout(function () {
        carDemo();
    }, 600);
}


var p5First = true;

function showPage5() {
    if (!p5First) {
        __isAnimate = false;
        return;
    }
    __isAnimate = true;
    p5First = false;
    $(".p5_title").addClass("p5_title_anim");
    $(".p5_text").addClass("p5_text_anim");
    $(".container_title").addClass("container_title_anim");
    $(".container_data").addClass("container_data_anim");
    $(".container_timeW").addClass("container_timeW_anim");
    $(".container_time").addClass("container_time_anim");
    /*$(".container").addClass("container_anim");*/
    $(".container_1").addClass("container_1_anim");
    $(".container_1_title").addClass("container_1_title_anim");
    $(".balloon_skyBlue").addClass("balloon_skyBlue_anim");
    $(".balloon_green").addClass("balloon_green_anim");
    $(".ballon_purple").addClass("ballon_purple_anim");
    $(".p5_gift").addClass("p5_gift_anim");
    $(".arrowW5").addClass("arrowW5_anim");
    setTimeout(function () {
        $(".balloon_skyBlue").removeClass("balloon_skyBlue_anim").addClass("balloon_skyBlue2_anim");
        $(".balloon_green").removeClass("balloon_green_anim").addClass("balloon_green2_anim");
        $(".ballon_purple").removeClass("ballon_purple_anim").addClass("ballon_purple2_anim");
    }, 9500);
    setTimeout(function () {}, 2000);
    setTimeout(function () {}, 6500);
    /* setTimeout(function () {
         canvas_p5gift.start();
     },7500);*/
    setTimeout(function () {
        __isAnimate = false;
    }, 3000);
}

var p6First = true;

function showPage6() {
    if (!p6First) {
        __isAnimate = false;
        return;
    }
    __isAnimate = true;
    p6First = false;
    $(".p6_title").addClass("p6_title_anim");
    $(".p6_prize_text").addClass("p6_prize_text_anim");
    $(".p6_prize_title").addClass("p6_prize_title_anim");
    $(".p6_prize_text_1").addClass("p6_prize_text_1_anim");
    $(".p6_prize_title_1").addClass("p6_prize_title_1_anim");
    $(".p6_prizeW").addClass("p6_prizeW_anim");
    $(".p6_prize").addClass("p6_prize_anim");
    $(".p6_prize_1W").addClass("p6_prize_1W_anim");
    $(".p6_prize_1").addClass("p6_prize_1_anim");
    $(".gift").addClass("gift_anim");


    setTimeout(function () {
        canvas_gift.start();
        canvas_fire.start();

    }, 4000);
    setTimeout(function () {
        __isAnimate = false;
    }, 5500);
}

function mobilecheck() {
    var check = false;
    (function (a) {
        if (/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
}


var p7First = true;

function showPage7() {
    var windowWidth = $(window).width();
    var i = 0;
    var r = 100 / 640 * windowWidth / 2;
    if (!p7First) {
        __isAnimate = false;
        P7rotation = setInterval(function () {
            var DIS = $(".p7_eye");
            var speed = 3 * Math.PI;
            DIS.css({
                left: Math.cos(i / speed) * r + r - 50 / 320 * windowWidth + "px",
                top: Math.sin(i / speed) * r + r + 40 + "px",
            })
            i++;
        }, 50);
        return;
    }
    __isAnimate = true;
    p7First = false;
    $(".p7_eye").addClass("p7_eye_anim");
    setTimeout(function () {
        $(".p7_text").addClass("p7_text_anim");
        $(".p7_code").addClass("p7_code_anim");
        $(".p7_heart").addClass("p7_heart_anim");
        $(".p7_emilW").addClass("p7_emilW_anim");
        $(".p7_emil").addClass("p7_emil_anim");
        $(".arrowW7").addClass("arrowW7_anim");
    }, 3000);
    setTimeout(function () {
        p7Text("p7_text1", p7Text1);
    }, 5500);
    setTimeout(function () {
        drawText("canvasTitle", "p7_title", srcMerck);
    }, 500);

    setTimeout(function () {
        p7Text("p7_text2", p7Text2);
    }, 6500);
    //顺时针转圈

    P7rotation = setInterval(function () {
        var DIS = $(".p7_eye");
        var speed = 3 * Math.PI;
        DIS.css({
            left: Math.cos(i / speed) * r + r - 50 / 320 * windowWidth + "px",
            top: Math.sin(i / speed) * r + r + 40 + "px",
        })
        i++;
    }, 50);
    setTimeout(function () {
        __isAnimate = false;
    }, 8000);

}

var p8First = true;

function showPage8() {
    var windowWidth = $(window).width();
    var i = 0;
    var r = 100 / 640 * windowWidth / 2;
    if (!p8First) {
        __isAnimate = false;
        P8rotation = setInterval(function () {
            var DIS = $(".p8_footer");
            var speed = 3 * Math.PI;
            DIS.css({
                top: Math.cos(i / speed) * r + r + 250 / 320 * windowWidth + "px",
                left: Math.sin(i / speed) * r + r + 50 / 320 * windowWidth + "px",
            })
            i++;
        }, 50);
        return;
    }
    __isAnimate = true;
    p8First = false;
    $(".p8_title").addClass("p8_title_anim");
    $(".p8_hotline").addClass("p8_hotline_anim");
    $(".p8_emil").addClass("p8_emil_anim");
    $(".p8_details").addClass("p8_details_anim");
    $(".p8_footer").addClass("p8_footer_anim");
    $(".arrowW8").addClass("arrowW8_anim");

    //逆时针转圈
    P8rotation = setInterval(function () {
        var DIS = $(".p8_footer");
        var speed = 3 * Math.PI;
        DIS.css({
            top: Math.cos(i / speed) * r + r + 250 / 320 * windowWidth + "px",
            left: Math.sin(i / speed) * r + r + 50 / 320 * windowWidth + "px",
        })
        i++;
    }, 50);
    setTimeout(function () {
        __isAnimate = false;
    }, 3000);
}
var p9First = true;

function showPage9() {
    if (!p9First) {
        __isAnimate = false;
        canvas_p9family.start();
        canvas_p9ring.start();
        return;
    }
    __isAnimate = true;
    p9First = false;
    $(".p9_heartW").addClass("p9_heartW_anim");
    $(".p9_heart").addClass("p9_heart_anim");
    $(".p9_ring").addClass("p9_ring_anim");
    $(".p9_title").addClass("p9_title_anim");
    $(".p9_family").addClass("p9_family_anim");
    setTimeout(function () {
        $(".p9_heart").removeClass("p9_heart_anim").addClass("p9_heart2_anim");
    }, 2200);
    canvas_p9family.start();
    canvas_p9ring.start();
    setTimeout(function () {
        __isAnimate = false;
    }, 3000);
}


// style
$(window).resize(function () {
    setTimeout(function () {
        resize();
    }, 200);
});
$(document).ready(function () {
    setTimeout(function () {
        resize();
    }, 200);

});

function resize() {

    var resizeDiv = resizeTool.initial({
        portrait: "null", //portrait 竖屏 landscape false 横屏
        windowWidth: 320, //默认屏幕320
    });
    resizeDiv.start();
    resizeDiv.resizeText("p7_t", 14, 14);
    resizeDiv.resizeText("progressNumb", 14, 14);

    resizeDiv.resizeWpb("p1Wrap", "550", "320", "534.28");
    resizeDiv.resizeWpb("iphone", "570", "256", "508");
    resizeDiv.resizeWpb("road", "570", "311.48", "435.48");
    resizeDiv.resizeWpb("p5Wrap", "555", "320", "479.36");
    resizeDiv.resizeWpb("p6Wrap", "565", "320", "486.47");
    resizeDiv.resizeScale("p7Wrap", "520", "320", "513.67");
    resizeDiv.resizeScale("p8Wrap", "525", "320", "463.73");
    resizeDiv.resizeScale("p9Wrap", "520", "320", "440.58");

    var w = $(window).width();
    var h = $(window).height();



}