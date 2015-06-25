$(document).ready(function () {
    var xcounter = 1, ycounter = 1, zcounter = 1;
    var w, h, d, xdivider, ydivider, zdivider;
    var r, g, b, color, swatch_counter = 1;
    var canvas = $("#canvas");
    var pos= $("#pos");
    var color_a= $("#color");
    var rgb_a= $("#rgb");
    var container=$("#container");
    w = canvas.width(); //finding the width of screen
    h = canvas.height();//finding the height of screen
    d = Math.sqrt(Math.pow(w, 2) + Math.pow(h, 2));//finding the diagonal length of screen
   // pos.html("Width="+w+" Height="+h+" Diagonal="+d);
    xdivider = (w / 255); //dividing whole width into 255 points.
    ydivider = h / 255;     //diving whole height into 255 points
    zdivider = d / 255; // diving the diagonal length into 255 points
    $(canvas).mouseenter(function (e) {
        r = e.pageX / xdivider; //finding the R color
        g = e.pageY / ydivider; //finding the G color
        b = Math.sqrt(Math.pow(e.pageX, 2) + Math.pow(e.pageY, 2)) / zdivider; //Finding the B color
    });
    $(canvas).mousemove(function (e) {
        var oldx, oldy, oldz;
        var x, y, z;
        x = e.pageX;
        y = e.pageY;
        z = b = Math.sqrt(Math.pow(e.pageX, 2) + Math.pow(e.pageY, 2));
        var xtemp = parseInt(x / xdivider);
        r = xtemp > 255 ? (255 - xtemp) + 255 : xtemp;
        var ytemp = parseInt(y / ydivider);
        g = ytemp > 255 ? (255 - ytemp) + 255 : ytemp;
        var ztemp = parseInt(z / zdivider);
        b = ztemp > 255 ? (255 - ztemp) + 255 : ztemp;
        //rgb_a.html("R="+r+"G="+g+"B="+b);
        r = r.toString(16);// Forming the hexadecimal
        g = g.toString(16);
        b = b.toString(16);
        if (b.length < 2) {
            b = "0" + b;
        }
        if (r.length < 2) {
            r = "0" + r;
        }
        if (g.length < 2) {
            g = "0" + g;
        }
        color = "#" + r + g +b;
        //color_a.html(" Color="+color);
        container.css("background-color", color);
    });
    var max = 0;
    var i = -1;
    var k = -1;
    while (localStorage.key(++k)) {
        if (max < localStorage.key(k)) {
            max = localStorage.key(k);
        }
    }
    while (localStorage.key(++i)) {
        $("#closeall").show();
        var swatch = localStorage.getItem(localStorage.key(i));
        swatch_counter++;
        $(".info").hide();
        $("#color-tray").prepend("<div class='columns small-1 color-tab-" + localStorage.key(i) + "' style='background-color:" + swatch + "'>" + swatch + "<a class='close' title='Clear Swatch'></a></div>");
    }
    key = isNaN(max) ? 0 : max;
    //Adding palette to color tray properly
    $(canvas).click(function () {
        $(".info").hide();
        if (swatch_counter <= (w / ($('div.small-1').width() + 57))) { //showing all the colors in single line.
            $("#closeall").show();
            ++key;
            $("#color-tray").prepend("<div class='columns small-1 color-tab-" + key + "' style='background-color:" + color + "'>" + color + "<a class='close' title='Clear Swatch'></a></div>");
            swatch_counter++;
            localStorage.setItem(key, color);
        }
    });
    //Removing a single palette by clicking on the close button
    $("#color-tray").off('click').on('click', '.close', function () {
        $(this).parent().remove();
        swatch_counter--;
        var removekey = parseInt(($(this).parent().attr("class")).replace("columns small-1 color-tab-", ""));
        localStorage.removeItem(removekey);
        //console.log(removekey);
    });

    //Showing color on canvas when hovered on any color palette
    $("div.small-1").on('hover',function() {
        //console.log($(this).text());
        $(canvas).css("background-color", $(this).text());
    });
    //Removing the local storage completely
    $("#closeall").click(function () {
        localStorage.clear();
        location.reload(); //reloading to remove the colors.
    });
});