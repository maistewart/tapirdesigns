document.getElementById("buttonback").addEventListener("mouseover",buttonover);

function buttonover() {
    var image = document.getElementById('button');
    if (image.src.match("orig")) {
        image.src = "img/buttonclick.png";
    }
}

document.getElementById("buttonback").addEventListener("mouseout",buttonout);

function buttonout() {
    var image = document.getElementById('button');
    if (image.src.match("click")) {
        image.src = "img/buttonorig.png"
    }
}

$(document).ready(function(){
    $(window).scroll(function(){
        var value= $(this).scrollTop();
        if (value>60) {
            $("header").stop().animate({height:50},800);
            $(".moveup").stop().animate({top:0},800);
            $("#headclear").stop().animate({height:50},800);
            $("#headerback").slideUp("slow");
            $("#logohold").slideUp("slow");
        }

        else {
            $("header").stop().animate({height:120},"slow");
            $(".moveup").stop().animate({top:70},"slow");
            $("#headclear").stop().animate({height:120},"slow");
            $("#headerback").slideDown("slow");
            $("#logohold").slideDown("slow");
        }
    });
    /*$("#headclear").click(function(){
     $("#headclear").animate({top:0},200);
     });*/
    /* $("#links").click(function(){
     $("#links")
     })*/
});
/**
 * Created by Mai on 7/6/2014.
 */
