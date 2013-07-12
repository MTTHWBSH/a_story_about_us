/*
  Love Story
*/

var loveStory = {
  pointer : 0,
  //TODO MAKE SHIFT + ARROW ADVANCE BETWEEN CHAPTERS
  /**
    init()
    --
    set up our event listeners, make sure we're at the beginning, reset everything.
    
    @param null
    @return void
  */
  init : function(){
    var self = this;
    //reset the pointer
    self.pointer = 0;
    
    //set our event listeners for the keys
    $(document).keydown(function(e){
      var keycode = e.keyCode || e.keycode || e.which;
      var keyLeft = 37;
      var keyRight = 39;
      var spaceBar = 32;
      
      switch(keycode){
        case keyLeft:
          e.preventDefault();

          //if the pointer is at 1 or 0, just stop
          if(self.pointer <= 1){
            self.pointer = 0;
            return;
          }
          
          //every animation ends with incrementing the pointer, so to go back we need to minus by 2
          self.pointer - 2;
          self.index(self.pointer);

          break;
        case keyRight || spaceBar:
          e.preventDefault();
          self.index(self.pointer);
          break;
      }//switch

    });
    
    //call the index
    var frame = $('.story_book');
    var intro = frame.find('.story_book__intro');
    self.hide_this(frame.children('.slide'));
    self.limbo(self.pointer);
  },
  
  //expects a jquery object
  hide_this: function(this_guy){
    this_guy.removeClass('visible');
  },//hide_this
  //expects a jquery object
  show_this: function(this_guy){
    this_guy.addClass('visible');
  },//show_this()
  
  /**
    limbo()
    --
    clear the stage between pages or non-sequential transitions, put in a spinner, and call the
      index with the proper animation. It's assumed that the first animation of the chapter will 
      show the slide, title, and whatever else
    
    @param int page | define the page we're transitioning /to/
    @return void
  */
  limbo : function(pointer){
    var self = this;
    //hide everything and call the index with the current animation
    var frame = $('.story_book');
    if(pointer >= 0){
      frame.children().fadeOut(500);
    }
    
    self.index(pointer);
  },//limbo
  
  
  /**
    index()
    --
    take in the current animation position on the timeline, execute the proper animation for that position, and increment the pointer
    
    @param int position
    @param
    @return void
  */
  index : function(pos){
    var self = this;
    var frame = $('.story_book');
    //chapter selectors
      var intro = frame.find('.story_book__intro'),
          slideOne = frame.find('.slide.classmates'),
          slideTwo = frame.find('.slide.partiers')
          slideThree = frame.find('.slide.roadies'),
          slideFour = frame.find('.slide.the-talk'),
          sldeFive = frame.find('.slide.happiness-graph'),
          slideSix = frame.find('.slide.family-plus-plus'),
          slideSeven = frame.find('.slide.city-bound'),
          colophon = frame.find('.story_book__colophon');
      
    switch(pos){

      case 0 :
        var enterButton = intro.find('.story_book__open');
        //when the enter button is clicked, set the pointer to 1, and call limbo (start of chapter 1)
        $(enterButton).click(function(){
          self.pointer = 1;
          self.limbo(self.pointer);
        });
        intro.fadeIn(800);
        
        break;
      
      //CHAPTER 1
      
      //bring in the title and the first paragraph
      case 1 : 
        var slideTitle = slideOne.find('.slide__title');
        var slideP1 = slideOne.find('.classmates__it-all-started');
        
        //hide everything, position the title, and show stuff
        slideOne.children().hide(0);
        slideOne.show(0);
        
        //animate the title
        slideTitle.show(0).animate({
          right: '-2%'
        }, 1000, function(){
          slideP1.fadeIn(400);
        });
        
        break;
      case 2:
        var classScene = slideOne.find('.classmates__class-scene');
        var matt = slideOne.find('.classmates__matt-head');
        var kate = slideOne.find('.classmates__kate-head');
        var lastP = slideOne.find('.classmates__final-day');
        
        classScene.fadeIn(800, function(){
          matt.show(0).animate({
            top: 130
          }, 900);

          kate.show().animate({
            top: 167
          },900, function(){
              lastP.show(0).animate({
                right: 50
              },700);
            });
        });
        break;
      case 3:
        var slideTitle = slideTwo.find('.slide__title');
        var slideP1 = slideTwo.find('.partiers__foreshadowing');
        
        self.limbo(self.pointer);
        slideTwo.show(0);

        //animate the title
        slideTitle.show(0).animate({
          right: '-2%'
        }, 1000, function(){
          slideP1.fadeIn(400);
        });
        
        break;
    }//switch
    //increment our pointer
    self.pointer++;
  }//index()
  
};//loveStory

$(function() {
  loveStory.init();
});