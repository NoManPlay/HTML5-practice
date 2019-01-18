p7Text1 = "请查收公司邮箱，";
p7Text2 = "获取您的登入账号和密码";

// page1
var canvas_ring = canvasSeque.initial({
    sequence: false, // true雪碧图 false 全屏
    imgSrc: BASE_PATH + 'img/ring/', //图片路径
    number: 20, //序列帧数量  i=1 1-75
    id: "ring", // canvas idName
    loop: true,
    type: "png", //全屏时设置
    first: 1, //   多张起始 默认1
    frame: 10, //   ms/
});

var canvas_fire = canvasSeque.initial({
    sequence: false, // true雪碧图 false 全屏
    imgSrc: BASE_PATH + 'img/fire/', //图片路径
    number: 20, //序列帧数量  i=1 1-75
    id: "fire", // canvas idName
    loop: true,
    type: "png", //全屏时设置
    first: 1, //   多张起始 默认1
    frame: 10, //   ms/
});
var fireAgain = true;
canvas_fire.control = function () {
    if (fireAgain && canvas_fire.i == 10) {
        canvas_fire.i = 2;
        fireAgain = false;
    }
    if (canvas_fire.i == 20) {
        canvas_fire.i = 12;
    }
}

var canvas_gift = canvasSeque.initial({
    sequence: false, // true雪碧图 false 全屏
    imgSrc: BASE_PATH + 'img/gift/', //图片路径
    number: 10, //序列帧数量  i=1 1-75
    id: "gift", // canvas idName
    loop: true,
    type: "png", //全屏时设置
    first: 1, //   多张起始 默认1
    frame: 10, //   ms/
});
var __isCloseGift = false;
canvas_gift.control = function () {
    // console.log(canvas_gift.i)
    if (canvas_gift.i == 10) {
        canvas_gift.pause();
        $(".p6_prize_1").removeClass("p6_prize_1_anim").addClass("p6_prize_12_anim");
        $(".p6_prize").removeClass("p6_prize_anim").addClass("p6_prize2_anim");
        $(".p6_left").addClass("p6_left_anim");

        setTimeout(function () {
            __isCloseGift = true;
            canvas_gift.play();
            canvas_gift.return();
        }, 2000);
    }
    if (canvas_gift.i == 0 && __isCloseGift) {
        canvas_gift.stop();
        // $(".p6_left").addClass("p6_left_anim");
        $(".arrowW6").addClass("arrowW6_anim");

    }
};


var canvas_p9ring = canvasSeque.initial({
    sequence: false, // true雪碧图 false 全屏
    imgSrc: BASE_PATH + 'img/ring/', //图片路径
    number: 20, //序列帧数量  i=1 1-75
    id: "p9_ring", // canvas idName
    loop: true,
    type: "png", //全屏时设置
    first: 1, //   多张起始 默认1
    frame: 10, //   ms/
});

var canvas_p9family = canvasSeque.initial({
    sequence: false, // true雪碧图 false 全屏
    imgSrc: BASE_PATH + 'img/family/', //图片路径
    number: 13, //序列帧数量  i=1 1-75
    id: "p9_family", // canvas idName
    loop: true,
    type: "png", //全屏时设置
    first: 1, //   多张起始 默认1
    frame: 10, //   ms/
});

// 打字效果
function p7Text(className, string) {
    var numb = 0;
    var total = string.length;
    var testInterval = setInterval(() => {
        numb++;
        if (numb == total + 1) {
            clearInterval(testInterval);
        }
        $("." + className).html(string.slice(0, numb));
    }, 100);
}

// carDemo
function carDemo() {
    var tranX = 0;
    var tranY = 0;
    var stat = 1;
    var j = 0;
    var p4Car = setInterval(function () {
        j++;
        if (stat == 1) {
            tranY = 0;
            if (tranX > 48 && tranX < 100) {
                if (j % 5 == 0) tranX++;
                if (tranX == 50) {
                    $(".person1").addClass("person1_anim");
                }
            } else {
                tranX++;
                if (tranX == 215) {
                    $(".blueCar").removeClass('opacity0')
                    $(".blueLight").addClass("car1Light_anim");
                }
            }
            if (tranX >= 275) {
                console.log(12)
                stat = 2;
                tranX = 275;

            }
        }
        if (stat == 2) {
            tranY++;
            tranX = 275;
            $(".carDemo").removeClass("left").addClass("down");
            if (tranY >= 300) {
                stat = 3;
                tranY = 300;
            }
        }
        if (stat == 3) {
            tranY = 300;
            $(".carDemo").removeClass("down").addClass("left");
            if (tranX > 150 && tranX < 250) {
                if (j % 5 == 0) tranX--;
                if (tranX == 230) {
                    $(".person2").addClass("person2_anim");
                }
            } else {
                tranX--;
            }

            if (tranX <= 71) {
                stat = 4;
                tranX = 71;
                $(".pinkLight").addClass("car2Light_anim");
                $(".pinkCar").removeClass('opacity0')
            }
        }
        if (stat == 4) {
            tranY++;
            tranX = 71;
            $(".carDemo").removeClass("left").addClass("down");
            if (tranY >= 588) {
                stat = 5;
                tranY = 588;
            }
        }
        if (stat == 5) {
            tranY = 588;
            $(".carDemo").removeClass("left down");
            if (tranX > 220 && tranX < 322) {
                if (j % 5 == 0) tranX++;
                if (tranX == 243) {
                    $(".person3").addClass("person3_anim");
                }
                if (tranX == 315) {
                    $(".greenLight").addClass("car3Light_anim");
                    $(".greenCar").removeClass('opacity0')
                }

            } else {
                tranX++;
            }
            if (tranX >= 322) {
                stat = 6;
                tranX = 322;
            }
        }
        if (stat == 6) {
            tranY++;
            tranX = 322;
            $(".carDemo").removeClass("left").addClass("down");
            if (tranY >= 865) {
                stat = 7;
                tranY = 865;

            }
        }
        if (stat == 7) {
            tranY = 865;
            $(".carDemo").removeClass("down").addClass("left");
            if (tranX > 223 && tranX < 260) {
                if (j % 5 == 0) tranX--;
                if (tranX == 243) {
                    $(".person4").addClass("person4_anim");
                }
            } else {
                tranX--;
                if (tranX == 150) {
                    $(".redLight").addClass("car4Light_anim")
                    $(".redCar").removeClass('opacity0')
                }

            }

            if (tranX <= 0) {
                stat = 8;
                tranX = 0;
            }
        }
        if (stat == 8) {
            $(".arrowW4").addClass("arrowW4_anim");
            __isAnimate = false;
            clearInterval(p4Car);
        }
        $(".carDemo").css({
            "transform": "translate3d(" + tranX + "%," + tranY + "%,0)",
        })
    }, 1);
}



var P7rotation;
var P8rotation;

function pageLeave() {
    var pageNo = $(".cur").attr("data-page");
    switch (pageNo) {
        case "1":
            leavePage1();
            break;
        case "2":
            leavePage2();
            break;
        case "3":
            leavePage3();
            break;
        case "4":
            leavePage4();
            break;
        case "5":
            leavePage5();
            break;
        case "6":
            leavePage6();
            break;
        case "7":
            leavePage7();
            break;
        case "8":
            leavePage8();
            break;
        case "9":
            leavePage9();
            break;
        default:
            leavePage1();
            break;
    }
}

function leavePage1() {
    canvas_ring.stop();
}

function leavePage2() {


}

function leavePage3() {


}

function leavePage4() {


}

function leavePage5() {

    // canvas_p5gift.stop();

}

function leavePage6() {
    // canvas_fire.stop();

}

function leavePage7() {
    clearInterval(P7rotation);
}

function leavePage8() {
    clearInterval(P8rotation);

}

function leavePage9() {

    canvas_p9family.stop();
    canvas_p9ring.stop();

}


var manText1 = [{
        x: 48,
        y: 23,
        width: 20,
        height: 22
    },
    {
        x: 68,
        y: 23,
        width: 14,
        height: 22
    },
    {
        x: 82,
        y: 23,
        width: 25,
        height: 22
    },
    {
        x: 107,
        y: 23,
        width: 21,
        height: 22
    },
    {
        x: 128,
        y: 23,
        width: 23,
        height: 22
    },
    {
        x: 150,
        y: 23,
        width: 21,
        height: 22
    },
    {
        x: 171,
        y: 23,
        width: 21,
        height: 22
    },
    {
        x: 192,
        y: 23,
        width: 22,
        height: 22
    },
    {
        x: 214,
        y: 23,
        width: 21,
        height: 22
    },
    {
        x: 59,
        y: 50,
        width: 43,
        height: 22
    },
    {
        x: 102,
        y: 50,
        width: 22,
        height: 22
    },
    {
        x: 124,
        y: 50,
        width: 22,
        height: 22
    },
    {
        x: 146,
        y: 50,
        width: 10,
        height: 22
    }
];

var womanText1 = [{
        x: 27,
        y: 14,
        width: 40,
        height: 21
    },
    {
        x: 67,
        y: 14,
        width: 25,
        height: 21
    },
    {
        x: 92,
        y: 14,
        width: 23,
        height: 21
    },
    {
        x: 115,
        y: 14,
        width: 22,
        height: 21
    },
    {
        x: 137,
        y: 14,
        width: 22,
        height: 21
    },
    {
        x: 159,
        y: 14,
        width: 21,
        height: 21
    },
    {
        x: 180,
        y: 14,
        width: 22,
        height: 21
    },
    {
        x: 202,
        y: 14,
        width: 22,
        height: 21
    },
    {
        x: 16,
        y: 44,
        width: 20,
        height: 21
    },
    {
        x: 36,
        y: 44,
        width: 22,
        height: 21
    },
    {
        x: 58,
        y: 44,
        width: 21,
        height: 21
    },
    {
        x: 79,
        y: 44,
        width: 21,
        height: 21
    },
    {
        x: 98,
        y: 44,
        width: 21,
        height: 21
    },
    {
        x: 119,
        y: 44,
        width: 23,
        height: 21
    },
    {
        x: 142,
        y: 44,
        width: 21,
        height: 21
    },
    {
        x: 163,
        y: 44,
        width: 21,
        height: 21
    },
    {
        x: 184,
        y: 44,
        width: 21,
        height: 21
    },
    {
        x: 205,
        y: 44,
        width: 22,
        height: 21
    },
    {
        x: 227,
        y: 44,
        width: 12,
        height: 21
    },
    {
        x: 14,
        y: 71,
        width: 24,
        height: 21
    },
    {
        x: 38,
        y: 71,
        width: 15,
        height: 21
    },
    {
        x: 53,
        y: 71,
        width: 24,
        height: 21
    },
    {
        x: 77,
        y: 71,
        width: 23,
        height: 21
    },
    {
        x: 100,
        y: 71,
        width: 20,
        height: 21
    },
    {
        x: 120,
        y: 71,
        width: 23,
        height: 21
    },
    {
        x: 143,
        y: 71,
        width: 22,
        height: 21
    },
    {
        x: 165,
        y: 71,
        width: 21,
        height: 21
    },
    {
        x: 186,
        y: 71,
        width: 21,
        height: 21
    },
    {
        x: 207,
        y: 71,
        width: 23,
        height: 21
    },
    {
        x: 14,
        y: 95,
        width: 23,
        height: 32
    },
    {
        x: 37,
        y: 95,
        width: 22,
        height: 32
    },
    {
        x: 59,
        y: 95,
        width: 22,
        height: 32
    },
    {
        x: 81,
        y: 95,
        width: 10,
        height: 32
    },
    {
        x: 91,
        y: 95,
        width: 29,
        height: 32
    }
];

var manText2 = [{
        x: 47,
        y: 25,
        width: 21,
        height: 23
    },
    {
        x: 68,
        y: 25,
        width: 21,
        height: 23
    },
    {
        x: 89,
        y: 25,
        width: 22,
        height: 23
    },
    {
        x: 111,
        y: 25,
        width: 11,
        height: 23
    },
    {
        x: 122,
        y: 25,
        width: 24,
        height: 23
    },
    {
        x: 147,
        y: 25,
        width: 22,
        height: 23
    },
    {
        x: 169,
        y: 25,
        width: 22,
        height: 23
    },
    {
        x: 191,
        y: 25,
        width: 21,
        height: 23
    },
    {
        x: 212,
        y: 25,
        width: 20,
        height: 23
    },
    {
        x: 232,
        y: 25,
        width: 21,
        height: 23
    },
    {
        x: 44,
        y: 51,
        width: 21,
        height: 23
    },
    {
        x: 68,
        y: 51,
        width: 47,
        height: 23
    },
    {
        x: 115,
        y: 51,
        width: 25,
        height: 23
    },
    {
        x: 140,
        y: 51,
        width: 22,
        height: 23
    },
    {
        x: 162,
        y: 51,
        width: 21,
        height: 23
    },
    {
        x: 183,
        y: 51,
        width: 11,
        height: 23
    }
];

var womanText2 = [{
        x: 15,
        y: 18,
        width: 22,
        height: 22
    },
    {
        x: 37,
        y: 18,
        width: 21,
        height: 22
    },
    {
        x: 58,
        y: 18,
        width: 22,
        height: 22
    },
    {
        x: 80,
        y: 18,
        width: 22,
        height: 22
    },
    {
        x: 102,
        y: 18,
        width: 15,
        height: 22
    },
    {
        x: 113,
        y: 18,
        width: 24,
        height: 22
    },
    {
        x: 137,
        y: 18,
        width: 23,
        height: 22
    },
    {
        x: 160,
        y: 18,
        width: 21,
        height: 22
    },
    {
        x: 181,
        y: 18,
        width: 22,
        height: 22
    },
    {
        x: 203,
        y: 18,
        width: 23,
        height: 22
    },
    {
        x: 15,
        y: 44,
        width: 21,
        height: 30
    },
    {
        x: 36,
        y: 44,
        width: 21,
        height: 30
    },
    {
        x: 57,
        y: 44,
        width: 19,
        height: 30
    },
    {
        x: 76,
        y: 44,
        width: 36,
        height: 30
    }
];

var srcMerck = [{
        x: 25,
        y: 24,
        width: 35,
        height: 42
    },
    {
        x: 60,
        y: 24,
        width: 36,
        height: 42
    },
    {
        x: 96,
        y: 24,
        width: 35,
        height: 42
    },
    {
        x: 131,
        y: 24,
        width: 39,
        height: 42
    },
    {
        x: 170,
        y: 24,
        width: 37,
        height: 42
    },
    {
        x: 207,
        y: 24,
        width: 32,
        height: 42
    },
    {
        x: 239,
        y: 24,
        width: 31,
        height: 42
    },
    {
        x: 270,
        y: 24,
        width: 9,
        height: 42
    },
    {
        x: 279,
        y: 24,
        width: 14,
        height: 42
    },
    {
        x: 293,
        y: 24,
        width: 12,
        height: 42
    },
    {
        x: 305,
        y: 24,
        width: 21,
        height: 42
    },
    {
        x: 326,
        y: 24,
        width: 16,
        height: 42
    },
    {
        x: 342,
        y: 24,
        width: 22,
        height: 42
    },
    {
        x: 364,
        y: 24,
        width: 24,
        height: 42
    },
    {
        x: 388,
        y: 24,
        width: 23,
        height: 42
    },
    {
        x: 411,
        y: 24,
        width: 11,
        height: 42
    },
    {
        x: 422,
        y: 24,
        width: 12,
        height: 42
    },
    {
        x: 434,
        y: 24,
        width: 19,
        height: 42
    },
    {
        x: 453,
        y: 24,
        width: 22,
        height: 42
    },
    {
        x: 475,
        y: 24,
        width: 35,
        height: 42
    },
    {
        x: 510,
        y: 24,
        width: 13,
        height: 42
    },
    {
        x: 523,
        y: 24,
        width: 35,
        height: 42
    },
    {
        x: 558,
        y: 24,
        width: 22,
        height: 42
    },
    {
        x: 580,
        y: 24,
        width: 18,
        height: 42
    },
    {
        x: 598,
        y: 24,
        width: 18,
        height: 42
    },
    {
        x: 616,
        y: 24,
        width: 24,
        height: 42
    },
]


var __isIntervalClose = false;

function drawText(canvasID, pic, personArr) {
    var CANVAS_P1 = $("#" + canvasID)[0];
    var CTX_P1 = CANVAS_P1.getContext('2d');
    var img = new Image();
    img.src = BASE_PATH + "img/page_3/" + pic + ".png";
    var i = 0;
    img.onload = function () {
        var p1Interval = setInterval(function () {
            if (__isIntervalClose) {
                clearInterval(p1Interval);
                return;
            }
            if (i >= personArr.length) {
                clearInterval(p1Interval);
                return;
            }
            CTX_P1.drawImage(img, personArr[i].x, personArr[i].y, personArr[i].width, personArr[i].height, personArr[i].x, personArr[i].y, personArr[i].width, personArr[i].height);
            i++;
        }, 100);
    }
}