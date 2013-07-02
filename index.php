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
  <div class="story_book">
    <?php include('covers/_front-cover.phtml'); ?>
    <?php include( dirname(__FILE__) . '/_page-factory.phtml'); ?>
    <?php include('covers/_colophon.phtml'); ?>
  </div><!-- .story_book -->
  <!-- SCRIPTS
  ==============================================================================-->
  <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
</body>
</html>