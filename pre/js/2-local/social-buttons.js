/**
 * Bind an event to the 'Share' link, passing the event information
 * The handler has to stay in the .on() method or the event doesn't
 * get caught in time.
 */
// $(document).ready(function() {//document ready makes things happy. I'm not changing it :D
//   $('a.post_share_tweet', this).on('click', function(e){
//     e.preventDefault();
//
//     // Because we're not using the regular twitter.com/intent/tweet or whatever,
//     // we store the url of the card in the href of the link, and the title is the actual tweet
//     var loc = $(this).attr('href');
//     var tweet  = $(this).attr('title');
//
//     //Trigger a new window with the Twitter dialog, in the middle of the page
//     window.open('http://twitter.com/share?url=' + loc + '&text=' + tweet, 'twitterwindow', 'height=300, width=550, top='+($(window).height()/2 - 225) +', left='+$(window).width()/2 +', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
//   });//(a.tweet).bind()
//
//
//   $('a.post_share_facebook', this).on('click', function(e){
//     e.preventDefault();
//
//     var fb_link = $(this).attr('href');
//
//     //Trigger a new window with the Facebook dialogue
//     window.open( fb_link, 'popup', 'height=300, width=550, top='+($(window).height()/2 - 225) +', left='+$(window).width()/2 +', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
//   });
// });//document.ready
