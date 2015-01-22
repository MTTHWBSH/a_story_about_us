var LoveStoryPages = {
    bookmarks : {
        cover: 0,
        ch1 : 1,
        ch2 : 3,
        ch3 : 6,
        ch4 : 9,
        ch5 : 12,
        ch6 : 14,
        ch7 : 16,
        ch8 : 18,
        colophon : 20
    },
    content: loveStoryContent,

    animations: loveStoryAnimations,
};


var LoveStoryConfig = {
    meta: {
        title: 'This is a love story.',
        authors: '@joshDcomp, @mtthwbsh @GabeCooper',
        descrip: 'A tale of two spartans, partners in crime, moved to the windy city (recruiting a furry friend along the way). This is their love story.',
        keywords: 'marriage, proposal, love, story, engagement, animation, illustration, MTTHWBSH, joshDcomp, GabeCooper, html5, css3, love story, michigan state university, msu, grand rapids, chicago, east lansing',
        url: 'http://astoryabout.us/',
        shortURL: 'http://goo.gl/XbNhv',
        thumb: '//astoryabout.us/img/thumb.png',
    },
    social: {
        twitter:{
            tweet: 'A /storied/ proposal followed by an uproarious “YES!” This is a love story told by @joshDcomp @mtthwbsh & @GabeCooper',
        }
    },
    container: '.love_story',
    pages: LoveStoryPages,
};

var loveStory = new StoryBook(LoveStoryConfig);
$(function(){
    loveStory.init();
});
