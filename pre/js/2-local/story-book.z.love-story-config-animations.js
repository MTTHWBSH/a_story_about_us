var loveStoryAnimations = {
    0: function($chapter){
        var intro = $chapter
        intro.fadeIn(800);
    },

    //CHAPTER 1: CLASSMATES
    //bring in the title and the first paragraph
    1: function($chapter){
        var slideTitle = $chapter.find('.slide__title');
        var slideP1 = $chapter.find('.classmates__it-all-started');

        //animate the title
        slideTitle.delay(100).show(0).animate({
            right: '-2%'
        }, 1000, function(){
            slideP1.fadeIn(400);
            slideP1.children().fadeIn(400);
        });
    },

    2: function($chapter){

        var classScene = $chapter.find('.classmates__class-scene');
        var matt = $chapter.find('.classmates__matt-head');
        var kate = $chapter.find('.classmates__kate-head');
        var lastP = $chapter.find('.classmates__final-day');

        classScene.add(matt).add(kate).add(lastP).removeAttr('style');

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
    },

    //CHAPTER 2: PARTIERS
    3: function($chapter){
        var slideTitle = $chapter.find('.slide__title');
        var slideP1 = $chapter.find('.partiers__drunkenly-biked');

        //animate the title
        slideTitle.delay(400).show(0).animate({
            right: '-2%'
        }, 1000, function(){
            slideP1.fadeIn(400);
            slideP1.children().fadeIn(400);
        });
    },

    4: function($chapter){
        var flags = $chapter.find('.partiers__little-flags');
        var bar = $chapter.find('.partiers__bar-bg');
        var couch = $chapter.find('.partiers__kate-couch');
        var cantSlip = $chapter.find('.partiers__cant-slip-away');
        var matt = $chapter.find('.partiers__drunk-matt');
        var foreshadowing = $chapter.find('.partiers__foreshadowing');

        flags.add(bar).add(couch).add(cantSlip).add(matt).add(foreshadowing).removeAttr('style');

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
    },

    5: function($chapter){
        var foreshadowing = $chapter.find('.partiers__foreshadowing');

        foreshadowing.removeAttr('style');

        foreshadowing.slideDown(200);
    },

    //CHAPTER 3: ROADIES
    6: function($chapter){
        var slideTitle = $chapter.find('.slide__title');
        var roadiesTxt = $chapter.find('.roadies__moved-home');
        var michigan = $chapter.find('.roadies__michigan');

        //animate the title
        slideTitle.delay(400).show(0).animate({
            right: '-2%'
        }, 1000, function(){
            roadiesTxt.fadeIn(400);
        });
        michigan.delay(400).show(0).animate({
            top: 30
        }, 1000);
    },

    7: function($chapter){
        var eastLansing = $chapter.find('.roadies__el');
        var grandRapids = $chapter.find('.roadies__gr');
        var beaumont = $chapter.find('.roadies__beaumont');
        var caulder = $chapter.find('.roadies__caulder');
        var foreshadowing = $chapter.find('.roadies__foreshadowing');

        var roadiesPrefix = '.roadies__path';

        foreshadowing.add(eastLansing).add(grandRapids).add(beaumont).add(caulder).removeAttr('style');
        $chapter.find('img[class^="roadies__path"]').removeAttr('style');

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
            $(roadiesPrefix + '1').delay(roadiesDuration  * 2).fadeIn(roadiesDuration, function(){
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
    },

    8: function($chapter){
        var foreshadowing = $chapter.find('.roadies__foreshadowing');
        foreshadowing.removeAttr('style');
        foreshadowing.slideDown(300)
    },

    //CHAPTER 4: THE TALK
    9: function($chapter){
        var slideTitle = $chapter.find('.slide__title');
        var thunder1 = $chapter.find('.the-talk__stolen-thunder1');
        var background = $chapter.find('.the-talk__background');
        var brick = $chapter.find('.the-talk__brick');
        var kate = $chapter.find('.the-talk__kate');
        var matt = $chapter.find('.the-talk__matt');

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
    },

    10: function($chapter){
        var thunder2 = $chapter.find('.the-talk__stolen-thunder2');
        var kate = $chapter.find('.the-talk__kate');
        var foreshadowing = $chapter.find('.the-talk__foreshadowing');

        foreshadowing.add(thunder2).removeAttr('style');
        kate.css({right: 90});

        thunder2.fadeIn(500);
        kate.animate({
            right: 160
        },800)
    },

    11: function($chapter){
        var foreshadowing = $chapter.find('.the-talk__foreshadowing');
        foreshadowing.removeAttr('style');
        foreshadowing.slideDown(450);
    },

    //CHAPTER 5: HAPPINESS GRAPH
    12:function(){
        var slideTitle = $chapter.find('.slide__title');
        var plusPlus = $chapter.find('.happiness-graph__happiness-plus-plus');
        var axes = $chapter.find('.happiness-graph__background');
        var clockBG = $chapter.find('.happiness-graph__clock-bg');
        var clockFace = $chapter.find('.happiness-graph__clock-face');
        var clockHour = $chapter.find('.happiness-graph__clock-hand-hour');
        var clockMin = $chapter.find('.happiness-graph__clock-hand-minute');
        var happyFace = $chapter.find('.happiness-graph__happy-face');

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
    },

    13: function($chapter){
        var clockBG = $chapter.find('.happiness-graph__clock-bg');
        var clockFace = $chapter.find('.happiness-graph__clock-face');
        var clockHour = $chapter.find('.happiness-graph__clock-hand-hour');
        var clockMin = $chapter.find('.happiness-graph__clock-hand-minute');
        var foreshadowing = $chapter.find('.happiness-graph__foreshadowing');

        foreshadowing.removeAttr('style');
        $('img[class^="happiness-graph__dash"]').removeAttr('style');

        var graphPrefix = '.happiness-graph__dash-';
        var dashDuration = 150;
        //clock duration should go the whole time the graph is animating, so 14 dashes with delays, and an extra delay at the beginning
        var clockDuration = dashDuration  * 30;
        clockHour.animate({
            rotate: '1500deg'
        }, clockDuration, 'easeInCirc');

        clockMin.animate({
            rotate: '6000deg'
        }, clockDuration, 'easeInCirc');


        //There's definitely a better way to do this, but we'll figure that out later
        $(graphPrefix + '1').delay( (dashDuration  * 2) ).fadeIn(dashDuration, function(){
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
    },

    //CHAPTER 6: FAMILY++
    14: function($chapter){
        var slideTitle = $chapter.find('.slide__title');
        var plusPlus = $chapter.find('.family-plus-plus__along-came-margot');

        var kate = $chapter.find('.family-plus-plus__kate-head');
        var matt = $chapter.find('.family-plus-plus__matt-head');

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
    },

    15: function($chapter){
        var margotHead = $chapter.find('.family-plus-plus__margot-head');
        var margotPawR = $chapter.find('.family-plus-plus__margot-paw-right');

        var setup = $chapter.find('.family-plus-plus__setup');
        var foreshadowing = $chapter.find('.family-plus-plus__foreshadowing');

        margotHead.add(margotPawR).add(setup).add(foreshadowing).removeAttr('style');

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
    },

    //CHAPTER 7: CITY BOUND
    16: function($chapter){
        var slideTitle = $chapter.find('.slide__title');
        var graduation = $chapter.find('.city-bound__graduation');

        //animate the title
        slideTitle.delay(400).show(0).animate({
            right: '-2%'
        }, 1000, function(){
            graduation.fadeIn(400);
        });
    },

    17: function($chapter){
        var foreshadowing = $chapter.find('.city-bound__foreshadowing');
        var road = $chapter.find('.city-bound__road');
        var skyScraper = $chapter.find('.city-bound__skyscraper');
        var willisTower = $chapter.find('.city-bound__willis-tower');
        var bean = $chapter.find('.city-bound__bean');
        var apartment = $chapter.find('.city-bound__apartment');
        var car = $chapter.find('.city-bound__car');

        foreshadowing.add(road).add(skyScraper).add(willisTower).add(bean).add(apartment).add(car).removeAttr('style');

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
    },

    //CHAPTER 8: MEET UP
    18: function($chapter){
        var slideTitle = $chapter.find('.slide__title');
        var meetup = $chapter.find('.meet-up__message');
        var map = $chapter.find('.meet-up__map-canvas');
        var mapOverlay = $chapter.find('.meet-up__map-tooltip');

        //animate the title
        slideTitle.delay(400).show(0).animate({
            right: '-2%'
        }, 1000, function(){
            meetup.fadeIn(400);
            mapOverlay.delay(400).fadeIn(400).children().show(0);
            map.fadeIn(400);
        });
    },

    19: function($chapter){
        var sheSaidYes = $chapter.find('.meet-up__she-said-yes');
        sheSaidYes.$chapter('style');
        sheSaidYes.$chapter(300);
    },

    20: function($chapter){
        var matt = $chapter.find('.colophon__collab-list__li--matt');
        var josh = $chapter.find('.colophon__collab-list__li--josh');
        var gabe = $chapter.find('.colophon__collab-list__li--gabe');

        rightArrow.hide();
        colophon.children().removeAttr('style');
        colophon.delay(1000).fadeIn(800);
    }
};
