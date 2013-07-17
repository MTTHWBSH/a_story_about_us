/*
  Love Story
*/

var loveStory = {
  pointer : 0,
  isBusy: false,
  Chapter1: 1,
  Chapter2: 3,
  Chapter3: 6,
  Chapter4: 9,
  Chapter5: 12,
  Chapter6: 14,
  Chapter7: 16,
  Chapter8: 18,
  Colophon: 19,
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
    var uiNav = uiWrapper.find('.ui__nav');
    var chapter1 = uiNav.find('.ui__nav__slide1');
    var chapter2 = uiNav.find('.ui__nav__slide2');
    var chapter3 = uiNav.find('.ui__nav__slide3');
    var chapter4 = uiNav.find('.ui__nav__slide4');
    var chapter5 = uiNav.find('.ui__nav__slide5');
    var chapter6 = uiNav.find('.ui__nav__slide6');
    var chapter7 = uiNav.find('.ui__nav__slide7');
    var chapter8 = uiNav.find('.ui__nav__slide8');
    var colophonThumb = uiNav.find('.ui__nav__colophon');
    
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
      
      leftKey.click(function(e){
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
      
      rightKey.click(function(e){
        e.preventDefault();
        self.index(self.pointer);
      });
      
      rightButton.click(function(e){
          e.preventDefault();
          self.index(self.pointer);
          return;
      });
    
    //THUMBNAIL NAV
      chapter1.click(function(e){
          e.preventDefault();
          self.pointer = self.Chapter1;
          self.index(self.pointer);
      });
      
      chapter2.click(function(e){
          e.preventDefault();
          self.pointer = self.Chapter2;
          self.index(self.pointer);
      });
      
      chapter3.click(function(e){
          e.preventDefault();
          self.pointer = self.Chapter3;
          self.index(self.pointer);
      });
      
      chapter4.click(function(e){
          e.preventDefault();
          self.pointer = self.Chapter4;
          self.index(self.pointer);
      });
      
      chapter5.click(function(e){
          e.preventDefault();
          self.pointer = self.Chapter5
          self.index(self.pointer);
      });
      
      chapter6.click(function(e){
          e.preventDefault();
          self.pointer = self.Chapter6;
          self.index(self.pointer);
      });
      
      chapter7.click(function(e){
          e.preventDefault();
          self.pointer = self.Chapter7;
          self.index(self.pointer);
      });
      
      chapter8.click(function(e){
          e.preventDefault();
          self.pointer = self.Chapter8;
          self.index(self.pointer);
      });
      
      colophonThumb.click(function(e){
          e.preventDefault();
          self.pointer = self.Colophon;
          self.index(self.pointer);
      });

    //do tooltip stuff
    var tooltipPrime = $('.tooltip'),
        tooltipContent = tooltipPrime.data('tooltip-title');
    var tooltipJr = $('<span />');
        tooltipJr.addClass('tooltip--contents');
        tooltipJr.text(tooltipContent);
    //It's a boy!
    tooltipPrime.append(tooltipJr);
    
    //call the index
    var frame = $('.story_book');
    var intro = frame.find('.story_book__intro');
    frame.find('.slide').hide(0);
    leftButton.hide(0);
    self.limbo(self.pointer);
    //so now that we've initialize everything, let'cs call the map in the background
    //self.mapsHooo();
  },
  /**
    mapsHooo()
    --
    call google maps and set our options. 
    
    @param null
    @return void
  */
    mapsHooo : function(){
        //call the maps
        var script = document.createElement('script');
        script.type ='text/javascript';
        script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDq5Q0qZTzd7CyB5EthuZr8cXLQHeZCmes&sensor=false';
        document.body.appendChild(script);
        
        $(window).ready(function(){
            //if google loaded, fine, else, bloody tell me
            if(typeof google === 'undefined' ){
                console.log('Google did not load successfully');
            } else {
                var mapMarker = {
                    
                };//mapMarker
                
                var mapCanvas = $('.meet-up__map-canvas');
                
                var mapOptions = {
                    center: new google.maps.LatLng(41.926797,-87.644987),
                    zoom: 8,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };//mapOpts
                
                
                var map = new google.maps.Map(mapCanvas, mapOptions);
                
            }//if google == undefined
            
            console.log('TODO: \n * Style colophon,\n * style cover,\n * make back button call animations properly,');
        });
  },//mapsHooo()
  
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
          slideFive = frame.find('.slide.happiness-graph'),
          slideSix = frame.find('.slide.family-plus-plus'),
          slideSeven = frame.find('.slide.city-bound'),
          slideEight = frame.find('.slide.meet-up'),
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
      //take this out when you're ready to reverse the story
      var leftButton = uiWrapper.find('.ui__left-button');
      leftButton.hide(0);
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
          
          //Reset the styles for these bits so that the animations work correctly when the user clicks back
          slideTitle.css('');
          slideP1.css('');
          
          uiWrapper.fadeIn(200).children().fadeIn(200);
          leftButton.hide(0);
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
          
          //reset the styles for this bad boy
          classScene.css('');
          matt.css('');
          kate.css('');
          lastP.css('');
          
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
          
          slideTitle.css('');
          slideP1.css('');
          
          self.limbo(self.pointer);
          
          slideTwo.show(0);
  
          //animate the title
          slideTitle.delay(400).show(0).animate({
              right: '-2%'
            }, 1000, function(){
              slideP1.fadeIn(400);
              slideP1.children().fadeIn(400);
            });
          
          break;
        case 4:
          
          var flags = slideTwo.find('.partiers__little-flags');
          var bar = slideTwo.find('.partiers__bar-bg');
          var couch = slideTwo.find('.partiers__kate-couch');
          var cantSlip = slideTwo.find('.partiers__cant-slip-away');
          var matt = slideTwo.find('.partiers__drunk-matt');
          
          flags.css('');
          bar.css('');
          couch.css('');
          cantSlip.css('');
          matt.css('');
          
          var duration = 200;
          bar.fadeIn(duration);
          flags.fadeIn(duration);
          couch.fadeIn(duration, function(){
              cantSlip.delay(duration).slideDown(duration, function(){
                  matt.delay(400).fadeIn(20).animate({
                    left: 337
                  }, 1200, 'easeInOutElastic');
                });
            });
          
          break;
        case 5:
          var foreshadowing = slideTwo.find('.partiers__foreshadowing');
          
          foreshadowing.css('');
          
          foreshadowing.slideDown(200);
          break;
          
      //CHAPTER 3: ROADIES
        case 6: 
          var slideTitle = slideThree.find('.slide__title');
          var roadiesTxt = slideThree.find('.roadies__moved-home');
          var michigan = slideThree.find('.roadies__michigan');
          
          slideTitle.css('');
          roadiesTxt.css('');
          michigan.css('');
          
          self.limbo(self.pointer);
          
          slideThree.show(0);
          
          //animate the title
          slideTitle.delay(400).show(0).animate({
              right: '-2%'
            }, 1000, function(){
              roadiesTxt.fadeIn(400);
            });
          michigan.delay(400).show(0).animate({
            top: 30
          }, 1000);
          
          break;
        
        case 7:
          var eastLansing = slideThree.find('.roadies__el');
          var grandRapids = slideThree.find('.roadies__gr');
          var beaumont = slideThree.find('.roadies__beaumont');
          var caulder = slideThree.find('.roadies__caulder');
          var roadiesPrefix = '.roadies__path';
          
          eastLansing.css('');
          grandRapids.css('');
          beaumont.css('');
          caulder.css('');
          
          eastLansing.show(0).animate({
            height: 135
          }, 300, function(){
              
              beaumont.show(0).animate({
                height: 244,
                top: 240,
                left: 380
              }, 400, 'easeOutBack');
            });
            
          grandRapids.show(0).animate({
            height: 125
          }, 300, function(){
              
              caulder.show(0).animate({
                height: 200,
                top: 470,
                left: 10
              }, 400, 'easeOutBack');
              
              //There's definitely a better way to do this, but we'll figure that out later
              var roadiesDuration = 150;
              $(roadiesPrefix + '1').delay(roadiesDuration * 2).fadeIn(roadiesDuration, function(){
                  $(roadiesPrefix + '2').delay(roadiesDuration).fadeIn(roadiesDuration, function(){
                      $(roadiesPrefix + '3').delay(roadiesDuration).fadeIn(roadiesDuration, function(){
                          $(roadiesPrefix + '4').delay(roadiesDuration).fadeIn(roadiesDuration, function(){
                                $(roadiesPrefix + '5').delay(roadiesDuration).fadeIn(roadiesDuration, function(){
                                    $(roadiesPrefix + '6').delay(roadiesDuration).fadeIn(roadiesDuration, function(){
                                        $(roadiesPrefix + '7').delay(roadiesDuration).fadeIn(roadiesDuration, function(){
                                            $(roadiesPrefix + '8').delay(roadiesDuration).fadeIn(roadiesDuration);
                                        });
                                    });
                                });
                            });
                        });
                    });
                });//roadies
            });//grand rapids
          
          break;
          
        case 8:
            var foreshadowing = slideThree.find('.roadies__foreshadowing');
            foreshadowing.css('');
            foreshadowing.slideDown(300)
            break;
      //CHAPTER 4: THE TALK
        case 9:
            var slideTitle = slideFour.find('.slide__title');
            var thunder1 = slideFour.find('.the-talk__stolen-thunder1');
            var background = slideFour.find('.the-talk__background');
            var brick = slideFour.find('.the-talk__brick');
            var kate = slideFour.find('.the-talk__kate');
            var matt = slideFour.find('.the-talk__matt');
            
            slideTitle.css('');
            thunder1.css('');
            background.css('');
            brick.css('');
            kate.css('');
            matt.css('');
            
            self.limbo(self.pointer);
            
            slideFour.show(0);
            
            //animate the title
            slideTitle.delay(500).show(0).animate({
              right: '-2%'
            }, 1000, function(){
              thunder1.fadeIn(400);
            });
            
            background.delay(500).fadeIn(500);
            brick.delay(500).fadeIn(500, function(){
                    matt.show(0).animate({
                        right: 335
                    }, 1550, 'easeInOutElastic');
                    
                    kate.show(0).animate({
                        right: 90
                    }, 1650, 'easeInOutElastic');
                });
            
            break;
        case 10:
            var thunder2 = slideFour.find('.the-talk__stolen-thunder2');
            var kate = slideFour.find('.the-talk__kate');
            
            thunder2.css('');
            kate.css({right: 90});
            
            thunder2.fadeIn(500);
            kate.animate({
                right: 160
            },800)
            
            break;
        case 11:
            var foreshadowing = slideFour.find('.the-talk__foreshadowing');
            foreshadowing.css('');
            foreshadowing.slideDown(450);
            break;
        //CHAPTER 5: HAPPINESS GRAPH
        case 12:
            var slideTitle = slideFive.find('.slide__title');
            var plusPlus = slideFive.find('.happiness-graph__happiness-plus-plus');
            var axes = slideFive.find('.happiness-graph__background');
            var clockBG = slideFive.find('.happiness-graph__clock-bg');
            var clockFace = slideFive.find('.happiness-graph__clock-face');
            var clockHour = slideFive.find('.happiness-graph__clock-hand-hour');
            var clockMin = slideFive.find('.happiness-graph__clock-hand-minute');
            var happyFace = slideFive.find('.happiness-graph__happy-face');
            
            slideFive.children().css('');
            
            self.limbo(self.pointer);
            
            slideFive.show(0);
            
            //animate the title
            slideTitle.delay(400).show(0).animate({
              right: '-2%'
            }, 1000, function(){
              plusPlus.fadeIn(400);
            });
            
            axes.delay(400).fadeIn(400, function(){
                    
                    clockBG.show(0).animate({
                        left: 12
                    }, 800, 'easeOutBounce');
                    
                    clockFace.show(0).animate({
                        left: 12
                    }, 800, 'easeOutBounce');
                    
                    clockHour.show(0).animate({
                        left: 12
                    }, 900, 'easeOutBounce');
                    
                    clockMin.show(0).animate({
                        left: 12
                    }, 990, 'easeOutBounce');
                    
                    happyFace.show(0).animate({
                        top: 560
                    }, 800, 'easeOutBounce');
                    
                });//axes
            
            break;
            
        case 13:
            var clockBG = slideFive.find('.happiness-graph__clock-bg');
            var clockFace = slideFive.find('.happiness-graph__clock-face');
            var clockHour = slideFive.find('.happiness-graph__clock-hand-hour');
            var clockMin = slideFive.find('.happiness-graph__clock-hand-minute');
            var foreshadowing = slideFive.find('.happiness-graph__foreshadowing');
            var graphPrefix = '.happiness-graph__dash-';
            var dashDuration = 150;
            //clock duration should go the whole time the graph is animating, so 14 dashes with delays, and an extra delay at the beginning
            var clockDuration = dashDuration * 30;
            clockHour.animate({
                rotate: '1500deg'
            }, clockDuration, 'easeInCirc');
            
            clockMin.animate({
                rotate: '6000deg'
            }, clockDuration, 'easeInCirc');
            
            
              //There's definitely a better way to do this, but we'll figure that out later
              
              $(graphPrefix + '1').delay( (dashDuration * 2) ).fadeIn(dashDuration, function(){
                  $(graphPrefix + '2').delay(dashDuration).fadeIn(dashDuration, function(){
                      $(graphPrefix + '3').delay(dashDuration).fadeIn(dashDuration, function(){
                          $(graphPrefix + '4').delay(dashDuration).fadeIn(dashDuration, function(){
                                $(graphPrefix + '5').delay(dashDuration).fadeIn(dashDuration, function(){
                                    $(graphPrefix + '6').delay(dashDuration).fadeIn(dashDuration, function(){
                                        $(graphPrefix + '7').delay(dashDuration).fadeIn(dashDuration, function(){
                                            $(graphPrefix + '8').delay(dashDuration).fadeIn(dashDuration, function(){
                                                $(graphPrefix + '9').delay(dashDuration).fadeIn(dashDuration, function(){
                                                    $(graphPrefix + '10').delay(dashDuration).fadeIn(dashDuration, function(){
                                                        $(graphPrefix + '11').delay(dashDuration).fadeIn(dashDuration, function(){
                                                            $(graphPrefix + '12').delay(dashDuration).fadeIn(dashDuration, function(){
                                                                $(graphPrefix + '13').delay(dashDuration).fadeIn(dashDuration, function(){
                                                                    $(graphPrefix + '14').delay(dashDuration).fadeIn(dashDuration, function(){
                                                                        foreshadowing.fadeIn(600);
                                                                    });
                                                                });
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });//graph
            
            break;
        
        //CHAPTER 6: FAMILY++
        case 14:
            
            var slideTitle = slideSix.find('.slide__title');
            var plusPlus = slideSix.find('.family-plus-plus__along-came-margot');
            
            var kate = slideSix.find('.family-plus-plus__kate-head');
            var matt = slideSix.find('.family-plus-plus__matt-head');
            
            slideSix.children().css('');
            
            self.limbo(self.pointer);
            slideSix.show(0);
            
            //animate the title
            slideTitle.delay(400).show(0).animate({
              right: '-2%'
            }, 1000, function(){
              plusPlus.fadeIn(400);
              
              matt.show(0).animate({
                  width: 390,
                  top: 74,
                  left: 313
              }, 500, 'easeOutElastic');
              
              kate.show(0).animate({
                  width: 340,
                  top: 200,
                  left: 90,
              }, 600, 'easeOutElastic');
            });
            
            
            
            
            break;
        case 15:
            var margotHead = slideSix.find('.family-plus-plus__margot-head');
            var margotPawR = slideSix.find('.family-plus-plus__margot-paw-right');
            
            var setup = slideSix.find('.family-plus-plus__setup');
            var foreshadowing = slideSix.find('.family-plus-plus__foreshadowing');
            
            margotPawR.show(0).animate({
                top: 535,
                left: 672,
                zIndex: 25,
            }, 500, 'easeOutBack');
            
            margotHead.show(0).animate({
                width: 265,
                top: 279,
                left: 555,
            }, 700, 'easeInOutElastic');
            
            setup.delay(700).fadeIn(700, function(){
                foreshadowing.show(0).animate({
                    right: 50
                }, 900, 'easeInOutBack');
            });
            
            break;
        
        //CHAPTER 7: CITY BOUND
        case 16:
            var slideTitle = slideSeven.find('.slide__title');
            var graduation = slideSeven.find('.city-bound__graduation');
            
            slideSeven.children().css('');
            
            self.limbo(self.pointer);
            
            slideSeven.show(0);
            
            //animate the title
            slideTitle.delay(400).show(0).animate({
              right: '-2%'
            }, 1000, function(){
              graduation.fadeIn(400);
            });
            break;
        case 17:
            var foreshadowing = slideSeven.find('.city-bound__foreshadowing');
            var road = slideSeven.find('.city-bound__road');
            var skyScraper = slideSeven.find('.city-bound__skyscraper');
            var willisTower = slideSeven.find('.city-bound__willis-tower');
            var bean = slideSeven.find('.city-bound__bean');
            var apartment = slideSeven.find('.city-bound__apartment');
            var car = slideSeven.find('.city-bound__car');
            
            //set how long the car will drive, then determine how long each object should delay, and how long the animation should take once it's done delaying
            var carDuration = 1000;
            
            var skyScraperDelay = carDuration - 850,
                skyScraperDuration = carDuration - skyScraperDelay;
            
            var beanDelay = carDuration - 650,
                beanDuration = carDuration - beanDelay;
                
            var apartmentDelay = carDuration - 800,
                apartmentDuration = carDuration - apartmentDelay;
                
            var willisTowerDelay = carDuration - 850,
                willisTowerDuration = carDuration - willisTowerDelay;
            
            var roadFadein = 600;
            
            road.fadeIn(roadFadein, function(){
                foreshadowing.show(0).animate({
                    right: 50
                }, 500, function(){
                    //no need to show the car because it's fading in at the same time as the road
                    car.animate({
                        width: 20,
                        top: 320,
                        left: 497
                    }, carDuration, 'easeInBack', function(){
                        car.fadeOut(150);
                    });
                    
                    //the car is fading in at the same time as the road, so when this callback fires, the car should be moving
                    skyScraper.delay(skyScraperDelay).show(0).animate({
                        height: 250,
                        top: 126,
                        left: 334
                    }, skyScraperDuration, 'easeOutElastic');
                    
                    bean.delay(beanDelay).show(0).animate({
                        width: 105,
                        top: 299,
                        left: 282
                    }, beanDuration, 'easeOutElastic');
                    
                    willisTower.delay(willisTowerDelay).show(0).animate({
                        height: 285,
                        top: 92,
                        left: 579
                    }, willisTowerDuration, 'easeOutElastic');
                    
                    apartment.delay(apartmentDelay).show(0).animate({
                        height: 290,
                        top: 66,
                    }, apartmentDuration, 'easeOutBounce');
                });
            });//road.fadein
            
            car.fadeIn(roadFadein);
            
            break;
        //CHAPTER 8: MEET UP
        case 18:
            var slideTitle = slideEight.find('.slide__title');
            var meetup = slideEight.find('.meet-up__message');
            var map = slideEight.find('.meet-up__map-canvas');
            var mapOverlay = slideEight.find('.meet-up__map-tooltip');
            
            slideEight.children().css('');
            
            self.limbo(self.pointer);
            
            slideEight.show(0);
            
            //animate the title
            slideTitle.delay(400).show(0).animate({
              right: '-2%'
            }, 1000, function(){
              meetup.fadeIn(400);
              mapOverlay.delay(400).fadeIn(400).children().show(0);
              map.fadeIn(400);
            });
            
            break;
        //COLOPHON
        case 19:
            var matt = colophon.find('.colophon__collab-list__li--matt');
            var josh = colophon.find('.colophon__collab-list__li--josh');
            var gabe = colophon.find('.colophon__collab-list__li--gabe');
            
            colophon.children().css('');
            
            self.limbo(self.pointer);
            
            colophon.show(0);
            
            break;
    }//switch
    self.isBusy = false;
    self.pointer++;
  }//index()
  
};//loveStory

$(function() {
  loveStory.init();
});