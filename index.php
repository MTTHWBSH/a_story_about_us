<!DOCTYPE html>
<!--[if lt IE 7 ]><html class="ie ie6" lang="en"> <![endif]-->
<!--[if IE 7 ]><html class="ie ie7" lang="en"> <![endif]-->
<!--[if IE 8 ]><html class="ie ie8" lang="en"> <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!--><html lang="en"> <!--<![endif]-->
<?php ini_set('display_errors',1); 
 error_reporting(E_ALL); ?>
<head>
  <meta charset="utf-8">
  <title>From classmates to…mates?</title>
  <meta name="description" content="Once there were two young kids that went to Michigan State University, now they've gone and done something silly.">
  <meta name="author" content="@joshDcomp, @mttwbsh">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

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
      <div class="ui__left-button">&nbsp;</div>
      <div class="ui__right-button">&nbsp;</div>
      
      <div class="ui__keyboard">
        <img src="img/ui-elements/top-arrow-key.png" alt="up arrow key" class="ui__keyboard--top-key" />
        <img src="img/ui-elements/left-arrow-key.png" alt="left arrow key" class="ui__keyboard--left-key" />
        <img src="img/ui-elements/bottom-arrow-key.png" alt="down arrow key" class="ui__keyboard--botom-key" />
        <img src="img/ui-elements/right-arrow-key.png" alt="right arrow key" class="ui__keyboard--right-key" />
      </div><!-- .ui__keyboard -->
    </aside><!-- .ui-elements -->
    
    <div class="story_book">
      <?php include( dirname(__FILE__) .'/covers/_front-cover.phtml'); ?>
      <?php include( dirname(__FILE__) . '/_page-factory.phtml'); ?>
      <?php include( dirname(__FILE__) . '/covers/_colophon.phtml'); ?>
      
    </div><!-- .story_book -->
    
  </div><!-- .container -->
  <!-- SCRIPTS
  ==============================================================================-->
  <script type="text/javascript" src="js/jquery.1.10.js"></script>
  <script type="text/javascript" src="js/jquery.easing.js"></script>
  <script type="text/javascript" src="js/love-story.js"></script>
</body>
</html>