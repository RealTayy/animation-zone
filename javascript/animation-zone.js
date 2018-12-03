document.addEventListener("DOMContentLoaded", function (event) {
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
	sr_instance.goPhase('end');
});