/*
  Love Story
*/

var loveStory = {
  pointer : 0,
  isBusy: false,
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
    var uiWrapper = $('.ui-elements');
    var leftButton = uiWrapper.find('.ui__left-button');
    var rightButton = uiWrapper.find('.ui__right-button');
    var keysWrapper = $('.ui__keyboard');
    var upKey = keysWrapper.find('.ui__keyboard--top-key');
    var leftKey = keysWrapper.find('.ui__keyboard--left-key');
    var downKey = keysWrapper.find('.ui__keyboard--down-key');
    var rightKey = keysWrapper.find('.ui__keyboard--right-key');
    
    //reset the pointer
    self.pointer = 0;
    
    //set our event listeners for the keys
    $(document).keydown(function(e){
      var keycode = e.keyCode;// || e.keycode || e.which;
      var keyLeft = 37;
      var keyUp = 38;
      var keyRight = 39;
      var keyDown = 40;

      var spaceBar = 32;
      
      if(keycode == keyLeft){
          e.preventDefault();
          
          leftKey.addClass('pressed');
          
          //if the pointer is at 1 or 0, just stop
          if(self.pointer <= 1){
            self.pointer = 0;
            return;
          }
          
          //every animation ends with incrementing the pointer, so to go back we need to minus by 2
          self.pointer = self.pointer - 2;
          self.index(self.pointer);
          
          return;
      }
      
      if(keycode == keyRight || keycode == spaceBar){
          e.preventDefault();
          
          rightKey.addClass('pressed');
          
          self.index(self.pointer);
          
          return;
      }
      
      if(keycode == keyUp){
        upKey.addClass('pressed');
      }//if keycode == up
      
      if(keycode == keyDown){
        downKey.addClass('pressed');
      }
      
    });
    
    $(document).keyup(function(e){
      var keycode = e.keyCode;// || e.keycode || e.which;
      var keyLeft = 37;
      var keyUp = 38;
      var keyRight = 39;
      var keyDown = 40;
      
      var spaceBar = 32;
      
      if(keycode == keyUp){
        upKey.removeClass('pressed');
      }//if keycode == up
      
      if(keycode == keyDown){
        downKey.removeClass('pressed');
      }
      
      if(keycode == keyLeft){
        leftKey.removeClass('pressed');
      }
      
      if(keycode == keyRight || keycode == spaceBar){
        rightKey.removeClass('pressed');
      }
    });
    
    //ARROW BUTTONS
      leftButton.click(function(e){
        e.preventDefault();
        
        //if the pointer is at 1 or 0, just stop
        if(self.pointer <= 1){
          self.pointer = 0;
          return;
        }
        
        //every animation ends with incrementing the pointer, so to go back we need to minus by 2
        self.pointer = self.pointer - 2;
        self.index(self.pointer);
  
        
      });
      
      rightButton.click(function(e){
          e.preventDefault();
          self.index(self.pointer);
          return;
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
    
    if( self.isBusy === true ){
      return;
    }
    
    self.isBusy = true;
    
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
    //ui selectors
      var uiWrapper = $('.ui-elements');
          leftArrow = uiWrapper.find('.ui__left-button'),
          rightArrow = uiWrapper.find('.ui__right-button'),
          upKey = uiWrapper.find('.ui__keyboard--top-key'),
          downKey = uiWrapper.find('.ui__keyboard--bottom-key'),
          leftKey = uiWrapper.find('.ui__keyboard--left-key'),
          rightKey = uiWrapper.find('ui__keyboard--right-key');
      
      if(self.pointer >= 2){
        uiWrapper.show(0).children().show(0);
      }
      
    // The nice thing a bout a switch is that the js actually doesn't load that much of the script at once. It 
    //   rifles through each possible case until it finds a match, then it stops. The bad thing about a switch 
    //   is that if you need variables pan-cases, you pretty much have to either name them all above the switch, 
    //   or you have to name them multiple times.
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
      
      //CHAPTER 1: CLASSMATES
        //bring in the title and the first paragraph
        case 1 : 
          
          var slideTitle = slideOne.find('.slide__title');
          var slideP1 = slideOne.find('.classmates__it-all-started');
          
          self.limbo(self.pointer);
          uiWrapper.fadeIn(200).children().fadeIn(200);
          
          //hide everything, position the title, and show stuff
          slideOne.children().hide(0);
          slideOne.show(0);
          
          //animate the title
          slideTitle.delay(100).show(0).animate({
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
            }, 900, 'easeOutBounce');
  
            kate.show().animate({
              top: 167
            }, 900, 'easeOutBounce');
  
            lastP.show(0).animate({
              right: 50
            },700);
          });
          break;
        
      //CHAPTER 2: PARTIERS
        case 3:
          var slideTitle = slideTwo.find('.slide__title');
          var slideP1 = slideTwo.find('.partiers__drunkenly-biked');
          
          self.limbo(self.pointer);
          
          slideTwo.show(0);
  
          //animate the title
          slideTitle.delay(400).show(0).animate({
              right: '-2%'
            }, 1000, function(){
              slideP1.fadeIn(400);
            });
          
          break;
        case 4:
          
          var flags = slideTwo.find('.partiers__little-flags');
          var bar = slideTwo.find('.partiers__bar-bg');
          var couch = slideTwo.find('.partiers__kate-couch');
          var cantSlip = slideTwo.find('.partiers__cant-slip-away');
          var matt = slideTwo.find('.partiers__drunk-matt');
          
          var duration = 200;
          bar.fadeIn(duration);
          flags.fadeIn(duration);
          couch.fadeIn(duration, function(){
              cantSlip.delay(duration).slideDown(duration, function(){
                  matt.delay(400).fadeIn(20).animate({
                    left: 447
                  }, 1200, 'easeInOutElastic');
                });
            });
          
          break;
        case 5:
          var foreshadowing = slideTwo.find('.partiers__foreshadowing');
          foreshadowing.slideDown(200);
          break;
          
      //CHAPTER 3: ROADIES
        case 6: 
          var slideTitle = slideThree.find('.slide__title');
          var roadiesTxt = slideTwo.find('.roadies__moved-home');
          
          self.limbo(self.pointer);
          
          slideThree.show(0);
          
          //animate the title
          slideTitle.delay(400).show(0).animate({
              right: '-2%'
            }, 1000, function(){
              roadiesTxt.fadeIn(400);
            });
          break;
    }//switch
    self.isBusy = false;
    self.pointer++;
  }//index()
  
};//loveStory

$(function() {
  loveStory.init();
});