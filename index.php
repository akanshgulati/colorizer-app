<!doctype html>
<html class="no-js" lang="en">
<head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Colorizer: Interactive Color Selection</title>
    <link rel="stylesheet" href="css/foundation.css"/>
    <link rel="stylesheet" href="css/style.css"/>
    <link rel="icon" type="image/png" href="./favicon.ico">
    <meta name="description"
          content="Colorizer is an interactive of choosing colours where one can choose color vividly by dragging mouse on the screen and clicking on the colour to get its hexcode."/>
    <meta name="twitter:card" value="summary">
    <meta property="og:title" content="Colorizer: Interactive Color Selection"/>
    <meta property="og:type" content="website"/>
    <meta property="og:url" content="http://colorizer.akansh.com/"/>
    <meta property="og:image" content="http://colorizer.akansh.com/favicon.ico"/>
    <meta property="og:description"
          content="With Colorizer, just move your mouse on screen and click on the colour you like to save it in palette ."/>
    <script src="js/vendor/modernizr.js"></script>
</head>
<body>

<div class="info mobile small-text-center show-for-medium-down">
    Colorize <br>
    <span class="subtitle ">Interactive way to choose color</span><br>
    <span class="warning">This application is not mobile compatible.</span>
</div>

<div class="show-for-large-only" id="container">
    <div id="canvas">
        <div id="pos"></div>
        <div id="rgb"></div>
        <div id="color"></div>
    </div>

    <div class="row fullwidth color" id="color-swatch">
        <div class="info">
            Colorizer
            <span class="subtitle">Interactive way to choose color</span>
        </div>
        <div id="color-tray">
            <div class="columns small-1 last"></div>
        </div>
        <a id="closeall" title="Clear All Swatches"></a>
    </div>
</div>
<script src="js/vendor/jquery.js"></script>
<script src="js/foundation.min.js"></script>
<script>
    $(document).foundation();
</script>
<script src="js/color.js" type="application/javascript"></script>
</body>

</html>
