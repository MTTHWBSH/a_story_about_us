var LoveStoryPages = {
    bookmarks : {
        cover: {
            page: 0,
            name: 'intro'
        },
        ch1 : {
            page: 1,
            name: 'classmates'
        },
        ch2 : {
            page: 3,
            name: 'partiers'
        },
        ch3 : {
            page: 6,
            name: 'roadies'
        },
        ch4 : {
            page: 9,
            name: 'the-talk'
        },
        ch5 : {
            page: 12,
            name: 'happiness-graph'
        },
        ch6 : {
            page: 14,
            name: 'happiness-graph'
        },
        ch7 : {
            page: 16,
            name: 'family-plus-plus'
        },
        ch8 : {
            page: 18,
            name: 'city-bound'
        },
        colophon : {
            page: 20,
            name: 'colophon'
        }
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
