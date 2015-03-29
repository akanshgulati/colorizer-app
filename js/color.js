$(document).ready(function(){
    var xcounter= 1,ycounter= 1, zcounter= 1;
    var w, h, d,xdivider,ydivider,zdivider;
    var r, g, b, color, swatch_counter=1;
    var canvas=$("#canvas");
    w=canvas.width();
    h= canvas.height();
    d= Math.sqrt(Math.pow(w,2)+ Math.pow(h,2))/2;
    $("#screenpos").html("w="+w+"h="+h+"d="+d);
    xdivider=(w/255);
    ydivider=h/255;
    zdivider=d/255;
    $("#screenpos").append("<br>xdivider="+xdivider+"ydivider="+ydivider+"zdivider="+zdivider);
    $(canvas).mouseenter(function(e)
    {
        r= e.pageX/xdivider;
        g= e.pageY/ydivider;
        b= Math.sqrt(Math.pow(e.pageX,2)+Math.pow(e.pageY,2))/zdivider;
        $("#pos").html("<br>R="+r+" G="+g+" B="+b);

    });

    $(canvas).mousemove(function(e)
    {
        var oldx,oldy,oldz;
        var x, y,z;
        x= e.pageX;
        y= e.pageY;
        z=  b= Math.sqrt(Math.pow(e.pageX,2)+Math.pow(e.pageY,2));
        var xtemp= parseInt(x/xdivider);
        r=xtemp>255?(255-xtemp)+255:xtemp;
        var ytemp= parseInt(y/ydivider);
        g=ytemp>255?(255-ytemp)+255:ytemp;
        var ztemp= parseInt(z/zdivider);
        b=ztemp>255?(255-ztemp)+255:ztemp;
        r=r.toString(16); g= g.toString(16); b= b.toString(16);
        if(b.length < 2){b="0"+b;}
        if(r.length < 2){r="0"+r;}
        if(g.length < 2){g="0"+g;}
        color="#"+r+g+b;
        $("#pos").html(" R="+r+" G="+g+" B="+b+" Color="+color);
        canvas.css("background-color",color);
    });
    var max=0;
    var i=-1;
    var k=-1;
    while(localStorage.key(++k))
    {
        if(max < localStorage.key(k))
        {
            max=localStorage.key(k);
        }
    }
    while(localStorage.key(++i))
    {
        $("#closeall").show();
         var swatch=localStorage.getItem(localStorage.key(i));
            swatch_counter++;
            $(".info").hide();
            $("#color-tray").prepend("<div class='columns small-1 color-tab-"+localStorage.key(i)+"' style='background-color:" + swatch + "'>" + swatch + "<a class='close' title='Clear Swatch'></a></div>");

    }

    key=isNaN(max)?0:max;
    console.log("max="+max);
    $(canvas).click(function() {
        $(".info").fadeOut(50);
        if(swatch_counter <= (w/($('div.small-1').width()+57))) {
            $("#closeall").show();
            ++key;
            $("#color-tray").prepend("<div class='columns small-1 color-tab-"+key+"' style='background-color:" + color + "'>" + color + "<a class='close' title='Clear Swatch'></a></div>");
            swatch_counter++;
            localStorage.setItem(key, color);
            console.log("Key="+key+"and color="+color);
        }
    });
    $("#color-tray").off('click').on('click', '.close', function () {
        $(this).parent().remove();
        swatch_counter--;
       var removekey=parseInt(($(this).parent().attr("class")).replace("columns small-1 color-tab-",""));
        localStorage.removeItem(removekey);
        console.log(removekey);
    });
    $("div.small-1").hover(function()
    {
        console.log($(this).text());
       $(canvas).css("background-color",$(this).text());
    });
    $("#closeall").click(function()
    {
        localStorage.clear();
        location.reload();
    });




});

