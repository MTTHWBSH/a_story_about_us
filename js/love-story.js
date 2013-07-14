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
/*
    $(document).keypress(function(event){
      
      var keyLeft = 12;
      var keyRight = 13;
      var spaceBar = 14;
      
      //left key
      if( event.keycode === keyLeft ){
        event.preventDefault();
        //if the pointer is at 1 or 0, just stop
        if(self.pointer <= 1){
          self.pointer = 0;
          return;
        }
        
        //every animation ends with incrementing the pointer, so to go back we need to minus by 2
        self.pointer - 2;
        self.index(self.pointer);
      }//if e.keycode
      
      //right key and space bar
      if( event.keycode === keyRight ||
          event.keycode === spaceBar ){
        event.preventDefault();
        
      }
    });
*/
    
    //hide everything and call the index
    var frame = $('.story_book');
    var intro = frame.find('.story_book__intro');
    frame.children().hide();
    self.limbo(self.pointer);
  },
  
  
  /**
    limbo()
    --
    clear the stage between pages or non-sequential transitions, put in a spinner, and call the index with the proper animation
    
    @param int page | define the page we're transitioning /to/
    @return void
  */
  limbo : function(pointer){
    var self = this;
    //hide everything and call the index with the current animation
    var frame = $('.story_book');
    if(pointer > 0){
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

    switch(pos){

      case 0 :
        var intro = frame.find('.story_book__intro').fadeIn(800);
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
        var slideOne = frame.find('.slide.classmates');
        var slideTitle = slideOne.find('.slide_title');
        var slideP1 = slideOne.find('.classmates__it-all-started');
        
        //hide everything, position the title, and show stuff
        slideOne.children().hide(0)
        slideTitle.css({
          display: 'block',
          right: -10000
        }, 0);
        
        slideOne.show(0);
        
        //animate the title
        slideTitle.css({
          right: -20
        }, 400);
        
        slideP1.fadeIn(300);
        
        break;
    }//switch
    
  }//index()
  
};//loveStory

$(function() {
  loveStory.init();
});