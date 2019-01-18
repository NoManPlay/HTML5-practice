/*
 * @Author: qtx
 * @Date: 2019-01-10 09:59:39
 * @LastEditors: qtx
 * @LastEditTime: 2019-01-11 15:33:12
 * @Description: 
 */
var URL = window.location.href;
var BASE_PATH = URL.substring(0, URL.lastIndexOf('/') + 1);
var EVENT_TYPE = mobilecheck() ? 'tap' : 'click';
var BGM = $("#bgm")[0];
var __isAnimate = true;
var __isSoundOn = true;

/**
 * 音乐icon & 提示箭头 
 */
$(function () {
    var musicHtml = "<img src=\"" + BASE_PATH + "img/music.png\" class=\"musicicon musicplay\"/>";
    $(".page").append(musicHtml);

    $(".musicicon").on(EVENT_TYPE, function () {
        __isSoundOn = !__isSoundOn;
        __isSoundOn ? $(".musicicon").addClass("musicplay") : $(".musicicon").removeClass("musicplay");
        __isSoundOn ? BGM.play() : BGM.pause();
    });
});

/**
 * 图片预加载 
 */
$(function () {

    var loader = new PxLoader(),

        // 把页面的图片列在这里
        fileList = [
            'img/loading.gif',
            'img/arrow.png',
            'img/music.png',

            'img/share.jpg',

            'img/bg.jpg',

            'img/p1_logo.png',
            'img/p1_icon1.png',
            'img/p1_icon2.png',
            'img/p1_shadow.png',
            'img/p1_superman.png',
            'img/p1_t1.png',
            'img/p1_t2.png',

            'img/p2_p1.png',
            'img/p2_p2.png',
            'img/p2_p3.png',
            'img/p2_p4.png',
            'img/p2_p5.png',
            'img/p2_p6.png',
            'img/p2_p7.png',
            'img/p2_p8.png',
            'img/p2_p9.png',
            'img/p2_p10.png',
            'img/p2_p11.png',
            'img/p2_p12.png',
            'img/p2_p13.png',
            'img/p2_p14.png',
            'img/p2_p15.png',
            'img/p2_p16.png',
            'img/p2_p17.png',
            'img/p2_p18.png',
            'img/p2_t1.png',
            'img/p2_t2.png',
            'img/p2_t3.png',
            'img/p2_t4.png',
            'img/p2_t5.png',
            'img/p2_t6.png',
            'img/p2_t7.png',

            'img/p3_p1.png',
            'img/p3_p2.png',
            'img/p3_p3.png',
            'img/p3_p4.png',
            'img/p3_p5.png',
            'img/p3_p6.png',
            'img/p3_t1.png',
            'img/p3_t2.png',
            'img/p3_t3.png',

            'img/p4_p1.png',
            'img/p4_p2.png',
            'img/p4_p3.png',
            'img/p4_p4.png',
            'img/p4_p5.png',
            'img/p4_p6.png',
            'img/p4_p7.png',
            'img/p4_p8.png',
            'img/p4_p9.png',
            'img/p4_p10.png',
            'img/p4_p11.png',
            'img/p4_p12.png',
            'img/p4_t1.png',
            'img/p4_t2.png',
            'img/p4_t3.png',
            'img/p4_t4.png',

            'img/p5_p1.png',
            'img/p5_p2.png',
            'img/p5_p3.png',
            'img/p5_p4.png',
            'img/p5_p5.png',
            'img/p5_p6.png',
            'img/p5_t1.png',
            'img/p5_t2.png',
            'img/p5_t3.png',

            'img/p6_p1.png',
            'img/p6_p2.png',
            'img/p6_p3.png',
            'img/p6_p4.png',
            'img/p6_p5.png',
            'img/p6_p6.png',
            'img/p6_p7.png',
            'img/p6_p8.png',
            'img/p6_p9.png',
            'img/p6_p10.png',
            'img/p6_p11.png',
            'img/p6_p12.png',
            'img/p6_p13.png',
            'img/p6_p14.png',
            'img/p6_p15.png',
            'img/p6_p16.png',
            'img/p6_t1.png',
            'img/p6_t2.png',
            'img/p6_t3.png',

            'img/p7_p1.png',
            'img/p7_p2.png',
            'img/p7_p3.png',
            'img/p7_p4.png',
            'img/p7_t1.png',
            'img/p7_t2.png',
            'img/p7_t3.png',
            'img/p7_t4.png',
            'img/p7_t5.png',

            'img/p8_p1.png',
            'img/p8_p2.png',
            'img/p8_p3.png',
            'img/p8_p4.png',
            'img/p8_p5.png',
            'img/p8_p6.png',
            'img/p8_t1.png',
            'img/p8_t2.png',
            'img/p8_t3.png',

            'img/p9_p1.png',
            'img/p9_p2.png',
            'img/p9_t1.png',
            'img/p9_t2.png',
            'img/p9_t3.png',
            'img/p9_t4.png',

            'img/p10_p1.png',
            'img/p10_p2.png',
            'img/p10_p3.png',
            'img/p10_p4.png',
            'img/p10_t1.png',
            'img/p10_t2.png',
            'img/p10_t3.png',

            'img/p11_p1.png'
        ];

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
        __isAnimate = false;
        pageShow();
        $(".loading-container").hide();
        $(".page-container").show();
    });

    //loading 进度监听
    loader.addProgressListener(function (e) {
        var percent = Math.round((e.completedCount / e.totalCount) * 100); //正序, 1-100
        $("#loading_inner").text(percent + "%");
    });

    //启动
    loader.start();
});



/**
 * 交互事件监听 
 */
$(function () {
    $(".page").swipeUp(function () {
        nextPage();
    });
    $(".page").swipeDown(function (e) {
        prevPage();
    });
});

function prevPage() {
    if (__isAnimate) return;
    var pageNo = $(".cur").attr("data-page");
    if (pageNo == 1) return;

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
    if (pageNo == 11) return;

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
    }, 400);
}

//页面显示
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
        case "10":
            showPage10();
            break;
        case "11":
            showPage11();
            break;
        default:
            showPage1();
            break;
    }
}

//各页面显示
function showPage1() {
    $(".p1_logo").addClass("p1_logo_anim");
    $(".p1_icon1").addClass("p1_icon1_anim");
    $(".p1_icon2").addClass("p1_icon2_anim");
    $(".p1_shadow").addClass("p1_shadow_anim");
    $(".p1_superman").addClass("p1_superman_anim");
    $(".p1_t1").addClass("p1_t1_anim");
    $(".p1_t2").addClass("p1_t2_anim");
}

function showPage2() {
    $(".p2_p_wrap").addClass("p2_p_wrap_anim");

    $(".p2_t1").addClass("p2_t1_anim");
    $(".p2_t2").addClass("p2_t2_anim");
    $(".p2_t3").addClass("p2_t3_anim");
    $(".p2_t4").addClass("p2_t4_anim");
    $(".p2_t5").addClass("p2_t5_anim");
    $(".p2_t6").addClass("p2_t6_anim");
    $(".p2_t7").addClass("p2_t7_anim");
}

function showPage3() {
    $(".p3_p_wrap").addClass("p3_p_wrap_anim");

    $(".p3_t1").addClass("p3_t1_anim");
    $(".p3_t2").addClass("p3_t2_anim");
    $(".p3_t3").addClass("p3_t3_anim");
}

function showPage4() {
    $(".p4_p_wrap").addClass("p4_p_wrap_anim");

    $(".p4_t1").addClass("p4_t1_anim");
    $(".p4_t2").addClass("p4_t2_anim");
    $(".p4_t3").addClass("p4_t3_anim");
    $(".p4_t4").addClass("p4_t4_anim");
}

function showPage5() {
    $(".p5_p_wrap").addClass("p5_p_wrap_anim");

    $(".p5_t1").addClass("p5_t1_anim");
    $(".p5_t2").addClass("p5_t2_anim");
    $(".p5_t3").addClass("p5_t3_anim");
}

function showPage6() {
    $(".p6_p_wrap").addClass("p6_p_wrap_anim");

    $(".p6_t1").addClass("p6_t1_anim");
    $(".p6_t2").addClass("p6_t2_anim");
    $(".p6_t3").addClass("p6_t3_anim");
}

function showPage7() {
    $(".p7_p_wrap").addClass("p7_p_wrap_anim");

    $(".p7_t1").addClass("p7_t1_anim");
    $(".p7_t2").addClass("p7_t2_anim");
    $(".p7_t3").addClass("p7_t3_anim");
    $(".p7_t4").addClass("p7_t4_anim");
    $(".p7_t5").addClass("p7_t5_anim");
}

function showPage8() {
    $(".p8_p_wrap").addClass("p8_p_wrap_anim");

    $(".p8_t1").addClass("p8_t1_anim");
    $(".p8_t2").addClass("p8_t2_anim");
    $(".p8_t3").addClass("p8_t3_anim");
}

function showPage9() {
    $(".p9_t1").addClass("p9_t1_anim");
    $(".p9_t2").addClass("p9_t2_anim");
    $(".p9_t3").addClass("p9_t3_anim");
    $(".p9_t4").addClass("p9_t4_anim");

    $(".p9_p1").addClass("p9_p1_anim");
    $(".p9_p2").addClass("p9_p2_anim");
}

function showPage10() {
    $(".p10_p_wrap").addClass("p10_p_wrap_anim");

    $(".p10_t1").addClass("p10_t1_anim");
    $(".p10_t2").addClass("p10_t2_anim");
    $(".p10_t3").addClass("p10_t3_anim");
}

function showPage11() {
    $(".p11_p1").addClass("p11_p1_anim");
}

function mobilecheck() {
    var check = false;
    (function (a) {
        if (/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
}

// style
$(window).resize(function () {
    resize();
});
$(document).ready(function () {
    resize();
});

// 页面适配
function resize() {

    //320*520
    var w = $(window).width();
    var h = $(window).height();

    // resize page1
    $(".p1_logo").css("margin-top", (h - w * 1.2) / 2 + "px");

    // reseze page2
    if (h / w < 516 / 320) {
        $(".p2_p_wrap").css("width", (h - w * 0.63) * 0.88 + "px");
        $(".p2_p_wrap").css("padding-bottom", h - w * 0.63 + "px");
    } else {
        $(".p2_p_wrap").css("width", "86.09%");
        $(".p2_p_wrap").css("padding-bottom", "97.97%");
    }

    // resize page3
    if (h / w < 504 / 320) {
        $(".p3_p_wrap").css("width", (h - w * 0.47) * 0.9 + "px");
    } else {
        $(".p3_p_wrap").css("width", "100%");
    }

    //resize page4
    if (h / w < 504 / 320) {
        $(".p4_p_wrap").css("width", (h - w * 0.53) * 0.74 + "px");
        $(".p4_p_wrap").css("padding-bottom", h - w * 0.53 + "px");
    } else {
        $(".p4_p_wrap").css("width", "77.97%");
        $(".p4_p_wrap").css("padding-bottom", "104.84%");
    }

    //resize page5
    if (h / w < 504 / 320) {
        $(".p5_p_wrap").css("width", (h - w * 0.72) * 1.05 + "px");
        $(".p5_p_wrap").css("padding-bottom", h - w * 0.72 + "px");
    } else {
        $(".p5_p_wrap").css("width", "89.53%");
        $(".p5_p_wrap").css("padding-bottom", "85.16%");
    }

    // resize page6
    if (h / w < 516 / 320) {
        $(".p6_p_wrap").css("width", (h - w * 0.68) * 0.92 + "px");
        $(".p6_p_wrap").css("padding-bottom", h - w * 0.68 + "px");
    } else {
        $(".p6_p_wrap").css("width", "85.63%");
        $(".p6_p_wrap").css("padding-bottom", "93.28%");
    }

    //resize page7
    if (h / w < 504 / 320) {
        $(".p7_p_wrap").css("width", (h - w * 0.4) * 0.85 + "px");
        $(".p7_p_wrap").css("padding-bottom", h - w * 0.4 + "px");
    } else {
        $(".p7_p_wrap").css("width", "100%");
        $(".p7_p_wrap").css("padding-bottom", "117.96%");
    }

    // resize page8
    if (h / w < 504 / 320) {
        $(".p8_p_wrap").css("width", (h - w * 0.36) * 0.82 + "px");
        $(".p8_p_wrap").css("padding-bottom", h - w * 0.36 + "px");
    } else {
        $(".p8_p_wrap").css("width", "100%");
        $(".p8_p_wrap").css("padding-bottom", "121.25%");
    }

    // page9 no resize

    //resize page10
    if (h / w < 540 / 320) {
        $(".p10_p_wrap").css("width", (h - w * 0.33) * 0.74 + "px");
    } else {
        $(".p10_p_wrap").css("width", "100%");
    }

    //resize page11 end
    $(".p11_p1").css("margin-top", (h - w * 0.90) / 2 + "px");
}