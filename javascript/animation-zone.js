document.addEventListener("DOMContentLoaded", function (event) {
	// Javascript for slice reveal effect on header
	const sr_target = document.getElementById('header');
	const sr_instance = sliceRevealer(sr_target, {
		direction: 'vertical',
		startPosition: 'middle',
		endPosition: 'top',
		numOfSlices: 16,
		transitionOrder: 'random',
		totalDuration: 1.6,
		sliceDuration: 1,
		color: "#484848",
	});
	sr_instance.goPhase('end', {
		startCB: () => {
			document.getElementById('header-cover').style.display = "none";
		}
	});

	// Javascript for position based transform effect on header	
	const pbt_header = document.getElementById('header');
	const pbt_hero = document.getElementById('hero-header');
	const pbt_logo = document.getElementById('hero-logo');
	const pbt_title = document.getElementById('hero-title');
	const pbt_subtitle = document.getElementById('hero-subtitle');
	pBTransform(pbt_hero, {
		hoverTarget: pbt_header,
		translateY: 10,
		rotate: 5,
		scale: 1.2,
		duration: "1s"
	});
	pBTransform(pbt_logo, {
		hoverTarget: pbt_header,
		translateX: 40,
		tiltX: 30,
	});
	pBTransform(pbt_title, {
		hoverTarget: pbt_header,
		translateX: 30,
		rotate: 7,
		rotateStyle: 2,
		tiltX: 50,
		duration: ".8s"
	});
	pBTransform(pbt_subtitle, {
		hoverTarget: pbt_header,
		translateX: 20,
		rotate: 8,
		rotateStyle: 2,
		tiltX: 70,
		duration: "1.4s"
	});

	// Javascript for Position based transform on lirbary-img of pbt
	const pbt_container = document.getElementById("pbt-container");
	const pbt_wrapper = document.getElementById("pbt-wrapper");
	const pbt_box = document.getElementById("pbt-box");
	const pbt_text = document.getElementById("pbt-text");
	pBTransform(pbt_container, {
		hoverTarget: pbt_wrapper,		
		tilt: 20,		
	})

});
