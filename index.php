<!doctype html>
<html class="no-js" lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Color-Chooser</title>
    <link rel="stylesheet" href="css/foundation.css" />
    <link rel="stylesheet" href="css/style.css" />
    <script src="js/vendor/modernizr.js"></script>

  </head>
  <body>

    <div id="canvas">
        <div id="pos"></div>
    </div>

    <!--<div id="hexcode" style="position: absolute; bottom: 10px;"></div>
    <div id="rgb" style="position: absolute; bottom: 10px; right: 10px;">-->


    <div class="row fullwidth color" id="color-swatch">
        <div class="info">
            Colorize
            <span class="subtitle">Interactive way to choose color</span>
        </div>
        <div id="color-tray">
            <div class="columns small-1 last"></div>
        </div>
        <a id="closeall" title="Clear All Swatches"></a>
        <!--        <div class="columns small-1 color-tab">#011029 <div class="close"></div>
                </div>
                <div class="columns small-1 color-tab"></div>
                <div class="columns small-1 color-tab"></div>
                <div class="columns small-1 color-tab"></div>
                <div class="columns small-1 color-tab"></div>
        -->
    </div>

    <script src="js/vendor/jquery.js"></script>
    <script src="js/foundation.min.js"></script>
    <script>
        $(document).ready(function()
            {
                 var canvas=$("#canvas");

            }
        );

      $(document).foundation();
    </script>
    <script>


    </script>
        <script src="js/color.js" type="application/javascript"></script>
  </body>

</html>
