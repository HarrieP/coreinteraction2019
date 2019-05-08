$(document).ready(function(){

	//Init ScrollMagic
	var controller = new ScrollMagic.Controller();

	//pin the intro
	var pinIntroScene = new ScrollMagic.Scene({
		triggerElement: '#intro',
		triggerHook: 0,
		duration: '30%'
	})
	.setPin('#intro', {pushFollowers: false})
	.addTo(controller);

	//pin the intro
	var pinIntroScene2 = new ScrollMagic.Scene({
		triggerElement: '#project01',
		triggerHook: 0.4,
	})
	.setPin('#intro', {pushFollowers: false})
	.addTo(controller);

	//parallax scene

	var parallaxTl = new TimelineMax();
	parallaxTl
		.from('.content-wrapper', 0.3, {autoAlpha: 0, ease:Power0.easeNone}, 0.3)
		.from('.bcg', 1, {y: '-50%', ease:Power0.easeNone}, 0)
		;

	var slideParallaxScene = new ScrollMagic.Scene({
		triggerElement: '.bcg-parallax',
		triggerHook: 1,
		duration: '100%'
	})
	.setTween(parallaxTl)
	.addTo(controller);

	//loop through each .project element
	$('.project').each(function(){

		//build a scene
		var ourScene = new ScrollMagic.Scene({
			triggerElement: this.children[0],
			//duration: '90%',
			triggerHook: 0.9
			//reverse: false //when you put false, the animation won't happen again
		})
		.setClassToggle(this, 'fade-in') //add class to project01
		.addIndicators({
			name: 'fade scene',
			colorTrigger: 'black',
			//indent: 200,
			colorStart: '#75C695',
			colorEnd: 'pink'
		}) //this requires a plugin
		.addTo(controller);

		});

});




















