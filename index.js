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
        if (value>100) {
            $("header").stop().animate({height:70},800);
            $(".moveup").stop().animate({top:0},800);
            $("#headclear").stop().animate({height:70},800);
            $("#headerback").slideUp("slow");
            $("#logohold").slideUp("slow");
            /*$("#bannerclear").stop().fadeIn(800);*/
        }

        else {
            $("header").stop().animate({height:120},"slow");
            $(".moveup").stop().animate({top:70},"slow");
            $("#headclear").stop().animate({height:120},"slow");
            $("#headerback").slideDown("slow");
            $("#logohold").slideDown("slow");
            /*$("#bannerclear").stop().fadeOut(800);*/

        }
    });

});
/**
 * Created by Mai on 7/6/2014.
 */
