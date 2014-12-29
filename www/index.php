<!DOCTYPE html>
<!--[if lt IE 7 ]><html class="ie ie6" lang="en"> <![endif]-->
<!--[if IE 7 ]><html class="ie ie7" lang="en"> <![endif]-->
<!--[if IE 8 ]><html class="ie ie8" lang="en"> <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!--><html lang="en"> <!--<![endif]-->
<?php
// ini_set('display_errors',1);
// error_reporting(E_ALL);
?>

 <?php
    $title = 'This is a love story.';
    $descrip = 'A tale of two spartans, partners in crime, moved to the windy city (recruiting a furry friend along the way). This is their love story.';
    $tweet = 'A /storied/ proposal followed by an uproarious “YES!” This is a love story told by @joshDcomp @mtthwbsh & @GabeCooper';
    $authors = '@joshDcomp, @mtthwbsh @GabeCooper';
    $keywords = 'marriage, proposal, love, story, engagement, animation, illustration, MTTHWBSH, joshDcomp, GabeCooper, html5, css3, tech, story, love story, michigan state university, msu, grand rapids, chicago, east lansing';
    $ogURL = 'http://astoryabout.us/';
    $shortURL = 'http://goo.gl/XbNhv';
    $thumb = 'http://astoryabout.us/img/thumb.png';

?>
<head>
    <meta charset="utf-8">

    <title><?php echo $title; ?></title>
        <meta name="description" content="<?php echo $descrip; ?>">
        <meta name="keywords" content="<?php echo $keywords; ?>">
        <meta name="author" content="<?php echo $authors; ?>">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

    <!-- Social Media & Google meta
    ==============================================================================-->
        <!-- FB -->
        <meta property="og:url" content="<?php echo $ogURL; ?>"/>
        <meta property="og:title" content="<?php echo $title; ?>"/>
        <meta property="og:description" content="<?php echo $descrip; ?>"/>
        <meta property="og:image" content="<?php echo $thumb; ?>"/>
        <!-- Google -->
        <meta name="thumbnail" content="<?php echo $thumb; ?>" />

    <!-- CSS
    ==============================================================================-->
        <link rel="stylesheet" href="main.css">
    <!-- Fonts
    ==============================================================================-->
        <link href='http://fonts.googleapis.com/css?family=Source+Sans+Pro:900|Gentium+Basic:400,700,400italic,700italic' rel='stylesheet' type='text/css'>

    <!--[if lt IE 9]>
        <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->

    <!-- Favicons
    ==============================================================================-->
        <link rel="shortcut icon" href="img/favicons/favicon.ico">
        <link rel="apple-touch-icon" href="img/favicons/apple-touch-icon.png">
        <link rel="apple-touch-icon" sizes="72x72" href="img/favicons/apple-touch-icon-72x72.png">
        <link rel="apple-touch-icon" sizes="114x114" href="img/favicons/apple-touch-icon-114x114.png">
</head>
<body>
    <div class="storyboard-container">

        <aside class="ui-elements">

            <div class="social_ctas">
                <a
                    href="http://www.facebook.com/sharer.php?s=100&p[title]=<?php echo $title;
                                                               ?>&p[summary]=<?php echo urlencode($descrip);
                                                               ?>&p[url]=<?php echo $ogURL;
                                                               ?>&p[description]=<?php echo urlencode($descrip);
                                                               ?>&p[image]=<?php echo $ogURL;
                                                               ?>"
                    class="post_share_facebook"
                >&nbsp;</a>

                <a  href="<?php  echo $ogURL; ?>"
                    title="<?php echo urlencode($tweet); ?>"
                    class="post_share_tweet"
                >&nbsp;</a>
            </div>


            <div class="ui__back-button ui-do_back">&nbsp;</div>
            <div class="ui__next-button ui-do_next">&nbsp;</div>

            <div class="ui__keyboard">
                <img
                    src="img/ui-elements/top-arrow-key.png"
                    alt="up arrow key"
                    class="ui__keyboard--key ui__keyboard--top-key ui-do_up"
                 />
                <img
                    src="img/ui-elements/left-arrow-key.png"
                    alt="left arrow key"
                    class="ui__keyboard--key ui__keyboard--left-key ui-do_back"
                 />
                <img
                    src="img/ui-elements/bottom-arrow-key.png"
                    alt="down arrow key"
                    class="ui__keyboard--key ui__keyboard--botom-key ui-do_down"
                 />
                <img
                    src="img/ui-elements/right-arrow-key.png"
                    alt="right arrow key"
                    class="ui__keyboard--key ui__keyboard--right-key ui-do_next"
                 />
            </div>

            <ul class="ui__nav">
            <?php for($i = 1; $i < 9; $i++){ ?>
                <li class="<?php echo 'ui__nav__slide ui__nav__slide' . $i; ?>" data-bookmark="<?php echo 'ch' . $i; ?>"></li>
            <?php } ?>
                <li class="ui__nav__slide ui__nav__colophon ui-do_skip_to" data-bookmark="colophon"></li>
            </ul>
        </aside>

        <div class="story_book">
            <?php include( dirname(__FILE__) . '/pages/_front-cover.phtml'); ?>
            <?php include( dirname(__FILE__) . '/pages/_page-factory.phtml'); ?>
            <?php include( dirname(__FILE__) . '/pages/_map.phtml');?>
            <?php include( dirname(__FILE__) . '/pages/_colophon.phtml'); ?>
        </div>
    </div>
    <!-- SCRIPTS
    ==============================================================================-->
    <script type="text/javascript" src="js/jquery.1.10.js"></script>
    <script type="text/javascript" src="js/jquery.easing.js"></script>
    <script type="text/javascript" src="js/jquery.rotate.js"></script>
    <script type="text/javascript" src="js/love-story.js"></script>

    <!-- ANALYTICS
    ==============================================================================-->
    <script>
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-17210974-3', 'astoryabout.us');
        ga('send', 'pageview');
    </script>
</body>
</html>
