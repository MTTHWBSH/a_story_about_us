var loveStoryAnimations = {
    0: function(){
        var enterButton = intro.find('.story_book__open');
        //when the enter button is clicked, set the pointer to 1, and call limbo (start of chapter 1)
        $(enterButton).click(function(){
            this.pointer = 1;
            this.limbo(this.pointer);
        });
        intro.fadeIn(800);
    },

    //CHAPTER 1: CLASSMATES
    //bring in the title and the first paragraph
    1: function(){

        var slideTitle = slideOne.find('.slide__title');
        var slideP1 = slideOne.find('.classmates__it-all-started');

        this.limbo(this.pointer);

        //Reset the styles for these bits so that the animations work correctly when the user clicks back
        slideOne.children().removeAttr('style');

        $uiWrapper.fadeIn(200).children().fadeIn(200);
        $left.hide(0);
        //hide everything, position the title, and show stuff
        slideOne.children().hide(0);
        slideOne.show(0);

        //animate the title
        slideTitle.delay(100).show(0).animate({
            right: '-2%'
        }, 1000, function(){
            slideP1.fadeIn(400);
            slideP1.children().fadeIn(400);
        });
    },

    2: function(){
        var classScene = slideOne.find('.classmates__class-scene');
        var matt = slideOne.find('.classmates__matt-head');
        var kate = slideOne.find('.classmates__kate-head');
        var lastP = slideOne.find('.classmates__final-day');

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
    3: function(){
        var slideTitle = slideTwo.find('.slide__title');
        var slideP1 = slideTwo.find('.partiers__drunkenly-biked');


        this.limbo(this.pointer);
        slideTwo.children().removeAttr('style');
        slideTwo.show(0);

        //animate the title
        slideTitle.delay(400).show(0).animate({
            right: '-2%'
        }, 1000, function(){
            slideP1.fadeIn(400);
            slideP1.children().fadeIn(400);
        });
    },

    4: function(){
        var flags = slideTwo.find('.partiers__little-flags');
        var bar = slideTwo.find('.partiers__bar-bg');
        var couch = slideTwo.find('.partiers__kate-couch');
        var cantSlip = slideTwo.find('.partiers__cant-slip-away');
        var matt = slideTwo.find('.partiers__drunk-matt');
        var foreshadowing = slideTwo.find('.partiers__foreshadowing');

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

    5: function(){
        var foreshadowing = slideTwo.find('.partiers__foreshadowing');

        foreshadowing.removeAttr('style');

        foreshadowing.slideDown(200);
    },

    //CHAPTER 3: ROADIES
    6: function(){
        var slideTitle = slideThree.find('.slide__title');
        var roadiesTxt = slideThree.find('.roadies__moved-home');
        var michigan = slideThree.find('.roadies__michigan');

        this.limbo(this.pointer);
        slideThree.children().removeAttr('style');
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
    },

    7: function(){
        var eastLansing = slideThree.find('.roadies__el');
        var grandRapids = slideThree.find('.roadies__gr');
        var beaumont = slideThree.find('.roadies__beaumont');
        var caulder = slideThree.find('.roadies__caulder');
        var foreshadowing = slideThree.find('.roadies__foreshadowing');



        var roadiesPrefix = '.roadies__path';

        foreshadowing.add(eastLansing).add(grandRapids).add(beaumont).add(caulder).removeAttr('style');
        slideThree.find('img[class^="roadies__path"]').removeAttr('style');

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

    8: function(){
        var foreshadowing = slideThree.find('.roadies__foreshadowing');
        foreshadowing.removeAttr('style');
        foreshadowing.slideDown(300)
    },

    //CHAPTER 4: THE TALK
    9: function(){
        var slideTitle = slideFour.find('.slide__title');
        var thunder1 = slideFour.find('.the-talk__stolen-thunder1');
        var background = slideFour.find('.the-talk__background');
        var brick = slideFour.find('.the-talk__brick');
        var kate = slideFour.find('.the-talk__kate');
        var matt = slideFour.find('.the-talk__matt');

        this.limbo(this.pointer);
        slideFour.children().removeAttr('style');
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
    },

    10: function(){
        var thunder2 = slideFour.find('.the-talk__stolen-thunder2');
        var kate = slideFour.find('.the-talk__kate');
        var foreshadowing = slideFour.find('.the-talk__foreshadowing');

        foreshadowing.add(thunder2).removeAttr('style');
        kate.css({right: 90});

        thunder2.fadeIn(500);
        kate.animate({
            right: 160
        },800)
    },

    11: function(){
        var foreshadowing = slideFour.find('.the-talk__foreshadowing');
        foreshadowing.removeAttr('style');
        foreshadowing.slideDown(450);
    },

    //CHAPTER 5: HAPPINESS GRAPH
    12:function(){
        var slideTitle = slideFive.find('.slide__title');
        var plusPlus = slideFive.find('.happiness-graph__happiness-plus-plus');
        var axes = slideFive.find('.happiness-graph__background');
        var clockBG = slideFive.find('.happiness-graph__clock-bg');
        var clockFace = slideFive.find('.happiness-graph__clock-face');
        var clockHour = slideFive.find('.happiness-graph__clock-hand-hour');
        var clockMin = slideFive.find('.happiness-graph__clock-hand-minute');
        var happyFace = slideFive.find('.happiness-graph__happy-face');

        this.limbo(this.pointer);
        slideFive.children().css('');
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
    },

    13: function(){
        var clockBG = slideFive.find('.happiness-graph__clock-bg');
        var clockFace = slideFive.find('.happiness-graph__clock-face');
        var clockHour = slideFive.find('.happiness-graph__clock-hand-hour');
        var clockMin = slideFive.find('.happiness-graph__clock-hand-minute');
        var foreshadowing = slideFive.find('.happiness-graph__foreshadowing');

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
    14: function(){
        var slideTitle = slideSix.find('.slide__title');
        var plusPlus = slideSix.find('.family-plus-plus__along-came-margot');

        var kate = slideSix.find('.family-plus-plus__kate-head');
        var matt = slideSix.find('.family-plus-plus__matt-head');

        this.limbo(this.pointer);
        slideSix.children().removeAttr('style');
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
    },

    15: function(){
        var margotHead = slideSix.find('.family-plus-plus__margot-head');
        var margotPawR = slideSix.find('.family-plus-plus__margot-paw-right');

        var setup = slideSix.find('.family-plus-plus__setup');
        var foreshadowing = slideSix.find('.family-plus-plus__foreshadowing');

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
    16: function(){
        var slideTitle = slideSeven.find('.slide__title');
        var graduation = slideSeven.find('.city-bound__graduation');

        this.limbo(this.pointer);
        slideSeven.children().removeAttr('style');
        slideSeven.show(0);

        //animate the title
        slideTitle.delay(400).show(0).animate({
            right: '-2%'
        }, 1000, function(){
            graduation.fadeIn(400);
        });
    },

    17: function(){
        var foreshadowing = slideSeven.find('.city-bound__foreshadowing');
        var road = slideSeven.find('.city-bound__road');
        var skyScraper = slideSeven.find('.city-bound__skyscraper');
        var willisTower = slideSeven.find('.city-bound__willis-tower');
        var bean = slideSeven.find('.city-bound__bean');
        var apartment = slideSeven.find('.city-bound__apartment');
        var car = slideSeven.find('.city-bound__car');

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
    18: function(){
        var slideTitle = slideEight.find('.slide__title');
        var meetup = slideEight.find('.meet-up__message');
        var map = slideEight.find('.meet-up__map-canvas');
        var mapOverlay = slideEight.find('.meet-up__map-tooltip');

        this.limbo(this.pointer);
        slideEight.children().removeAttr('style');
        slideEight.show(0);

        //animate the title
        slideTitle.delay(400).show(0).animate({
            right: '-2%'
        }, 1000, function(){
            meetup.fadeIn(400);
            mapOverlay.delay(400).fadeIn(400).children().show(0);
            map.fadeIn(400);
        });
    },

    19: function(){
        var sheSaidYes = slideEight.find('.meet-up__she-said-yes');
        sheSaidYes.removeAttr('style');
        sheSaidYes.fadeIn(300);
    },

    20: function(){
        var matt = colophon.find('.colophon__collab-list__li--matt');
        var josh = colophon.find('.colophon__collab-list__li--josh');
        var gabe = colophon.find('.colophon__collab-list__li--gabe');
        this.limbo(this.pointer);
        rightArrow.hide();
        colophon.children().removeAttr('style');
        colophon.delay(1000).fadeIn(800);
    }
};
