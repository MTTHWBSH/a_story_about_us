/**
 * StoryBook
 * ==
 * acts as the API for the story. Navigates forward and backward through the
 * animations, passed as the primary @param for the class
 *
 * @param object animations Collection of functions, one for every 'page' of
 *   the book--keys being the 'page numbers'
 */
function StoryBook(config){
    this.pointer = 0;
    this.isBusy = false;

    this.defaults = {
        meta: {
            title: 'Digital Storybook',
            authors: '@joshDcomp',
            descrip: 'An interactive storybook in a web browser',
            keywords: 'book, storybook, webapp, html5, css3, javascript, jquery',
            url: 'http://joshdcompton.com',
            shortURL: null,//defaults to `url`
            //@TODO config for favicon/touch icons
        },
        //Overrides for the stuff in `meta`
        social: {
            google: {
                title: null,//defaults to meta.title
                descrip: null,//defaults to meta.descrip
                displayURL: null,//defaults to `meta.url`
                url: null,//defaults to `meta.url`
            },

            fb: {
                title: null,//defaults to meta.title
                descrip: null,//defaults to meta.descrip
                displayURL: null,//defaults to `meta.url`
                url: null,//defaults to `meta.url`
            },

            twitter: {
                tweet: 'Check out this cool storybook framework from @joshDcomp',
                url: null,//defaults to `meta.shortURL`
            },
        },
        container: '.digital_storybook',
        pages: {
            bookmarks: {},
            content: {},
            animations:{}
        },
    };

    //@TODO make the overrides more discrete
    var opts = config || this.defaults;
    this.meta = opts.meta;
    this.social = opts.social;

    this.container = opts.container;

    this.content = opts.pages.content;
    this.bookmarks = opts.pages.bookmarks;
    this.animations = opts.pages.animations;
}

StoryBook.fn = StoryBook.prototype;

/**
 * limbo()
 * --
 * clear the stage between pages or non-sequential transitions, put in a spinner, and call the
 * index with the proper animation. It's assumed that the first animation of the chapter will
 * show the slide, title, and whatever else
 *
 * @param int page define the page we're transitioning /to/
 * @return this
 */
StoryBook.fn.limbo = function(){
    //hide everything and call the index with the current animation
    if(this.pointer >= 0){
        this.UI.show();
        $('.slide__' + this.chapter('name')).show(0)

        // $(this.container).children().fadeOut(500);
    } else {
        this.UI.hide();
    }

    this.next();

    return this;
}


/**
 * validatePointer()
 * --
 * checks that the pointer is an integer, if not, start the story over
 */
StoryBook.fn.validatePointer = function(){
    if(Object.toType(this.pointer) !=  'number'){
        throw new TypeError('The pointer is no longer an integer. The value is ' + this.pointer + ', with the type of: ' + Object.toType(this.pointer) + ' resetting the story');
        this.pointer = 0;
        return false;
    }
    return true;
}


/**
 * skipTo(bookmark)
 * --
 * fades everything out and applies the callback associated with `bookmark`
 *
 * @param int bookmark the slide which the book should skip to
 * @returns this
 */
StoryBook.fn.skipTo = function(bookmark){
    if( this.isBusy === true ) return this;

    this.isBusy = true;

    if(typeof this.pointer ===  'integer'){
        this.pointer = bookmark;
    }
    else{
        throw new TypeError('`bookmark` should be an integer. The value passed is ' + bookmark + ', with the type of: ' + typeof bookmark + '. Quitting.');
        return false;
    }

    this.next();

    return this;
}

/**
 * back()
 * --
 * decrements the pointer by 2 and applies the callback in `this.animations` for
 * that particular step
 * @TODO make sure elements are properly being hidden
 *
 * @param null
 * @returns this
 */
StoryBook.fn.back = function(){
    if( this.isBusy === true ) return this;

    this.isBusy = true;
    this.validatePointer();

    if(this.pointer <= 2){
        this.UI.hide();
        this.pointer = 0;
    }
    else{
        this.pointer = this.pointer - 2;
        this.next();
    }

    return this;
}

/**
 * chapter()
 * --
 * Determines chapter by comparing this.pointer to this.bookmarks,
 * then returns either the name or the page for that particular
 * chapter, defaults to name
 *
 * @param string key either page or name
 * @returns string/number val the value of the key requested
 */
StoryBook.fn.chapter = function(info){
    var val;
    var prev = {
        page: 0,
        name: 'intro'
    };

    // could get fancy with sorting, but we're assuming there
    // aren't more than like 10 chapters, might as well just
    // p through this one
    for(var ch in this.bookmarks){
        if(this.pointer === this.bookmarks[ch]['page']){
            val = this.bookmarks[ch][info] || this.bookmarks[ch]['name'];
            break;
        } else if(this.pointer > ch.page){
            val = prev[info] || prev['name'];
            break;
        } else {
            prev = this.bookmarks.ch;
        }
    }
    return val;
}


/**
 * next()
 * --
 * increments the pointer and applies the callback in `this.animations` for
 * that particular key
 *
 * @param null
 * @returns this
 */

StoryBook.fn.next = function(){
    if( this.isBusy === true ) return this;

    this.isBusy = true;

    this.validatePointer();

    this.limbo();

    this.UI.clean();

    var $chapter = $('.slide__' + this.chapter('name'));
    this.animations[this.pointer]($chapter);
    this.pointer++;

    this.isBusy = false;

    return this;
}

/**
 * kickoff()
 * --
 *
 *
 * @param null
 * @return this
 */
 StoryBook.fn.kickoff = function(){
    //basic setup
    var storyBook = $(this.container);
    var intro = storyBook.find('.story_book__intro');
    storyBook.find('.slide').hide(0);
    //we assume 0 in the animations is for handling the 'cover animations'
    this.pointer = 0;
    this.next();

}

/**
 * init()
 * --
 * Dispatches the Rendering and UI functions, then kicks this baby off
 *
 * @param null
 * @return this
 */
StoryBook.fn.init = function(){
    this.Render.init()
    this.UI.init();
    this.kickoff();

    return this;
}
