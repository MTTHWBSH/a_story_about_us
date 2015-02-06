/**
 * Render_fbShareLink()
 * --
 * generates the uri used to share the storybook to facebook
 *
 * @param null
 * @return this
 */
StoryBook.fn.Render_fbShareLink = function(){
    var link = 'http://www.facebook.com/sharer.php?s=100';

    link += '&p[title]=' + encodeURIComponent(this.meta.title);
    link += '&p[summary]=' + encodeURIComponent(this.meta.descrip);
    link += '&p[url]=' + encodeURIComponent(this.meta.url);
    link += '&p[description]=' + encodeURIComponent(this.meta.descrip);
    link += '&p[image]=' + encodeURIComponent(this.meta.thumb);
    return link;
}

/**
* Render_tooltips()
* --
* render tooltip markup based on data(tooltip-title)
*
* @param null
* @return this
*/
StoryBook.fn.Render_tooltips = function(){
    //do tooltip stuff
    var tooltips = $('.tooltip');
    for(var tooltip in tooltips){
        var content = $(tooltip).data('tooltip-title');
        var container = $('<span />');

        container.addClass('tooltip--contents')
                 .text(content);

        $(tooltip).append(container);
    }
    return this;
}

/**
 * Render_registerPartials()
 * --
 *
 * Register the partials for use in the app. Assumes all partials are stored in textareas (for teh speed gainz)
 *
 * @param object partials {name: selector}
 * @return this
 */
StoryBook.fn.Render_registerPartials = function(partials){
    for(var name in partials){
        Handlebars.registerPartial(name, $(partials[name]).val());
    }

    return this;
}

/**
 * Render()
 * --
 *
 * Primary fn responsible for setting up the partials and views and putting content onto the page
 *
 * @param null, though does depend on several properties of StoryBook being set up
 * @return this
 */
StoryBook.fn.Render = function(){
    var partials = {
        _ui : '#partial-ui',
        _cover : '#partial-cover',
        _pages : '#partial-pages',
        _afterword : '#partial-afterword'
    };
    this.Render_registerPartials(partials);

    var storyView = Handlebars.compile($("#view-storybook").val());

    //@TODO could probs make these helpers or partials...or something
    var fbLink = this.Render_fbShareLink();
    var tweet = encodeURIComponent(this.tweet);
    var data = {
        container: this.container.substr(1),//this.container is a selector
        ui: {
            fbLink: fbLink,
            tweet: tweet,
            shareLink: this.meta.shortURL,
            bookmarks: this.bookmarks,
        },
        pages: this.content,
    };
    var story = storyView(data);

    $('body').prepend(story);

    this.$uiWrapper = $('ui-elements');
    //renderTooltips requires the presence of dom objects in the document so it has to happen after
    this.Render_tooltips();

    return this;
}
