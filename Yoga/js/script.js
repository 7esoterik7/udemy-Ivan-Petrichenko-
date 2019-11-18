window.addEventListener('DOMContentLoaded', function() {
	
	var tab = document.querySelectorAll('.info-header-tab');
	var info = document.querySelector('.info-header');
	var tabContent = document.querySelectorAll('.info-tabcontent');
	
	function hideTabContent(a) {
		for (var i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}
	
	hideTabContent(1);
	
	function showTabContent(b) {
		if (tabContent[b].classList.contains('hide')) {
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');			
		}
	}
	
	info.addEventListener('click', function(event) {
		var  target = event.target;
		if (target && target.classList.contains('info-header-tab')) {
			for (var i = 0; i < tab.length; i++) {
				if (target == tab[i]) {
					hideTabContent(0);
					showTabContent(i);
					break;
				}
			}
		}
	});
	
	//Timer
	
	var deadline = '2019-11-19';
	
	function getTimeRemaining(endtime) {
		var t = Date.parse(endtime) - Date.parse(new Date());
		var seconds = Math.floor((t / 1000) % 60);
		var minutes = Math.floor((t / 1000 / 60) % 60);
		var hours = Math.floor((t / 1000 / 60 / 60));
		
		return {
			'total': t,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		}
	}
	
	function setClock(id, endtime) {
		var timer = document.getElementById(id);
		var hours = timer.querySelector('.hours');
		var minutes = timer.querySelector('.minutes');
		var seconds = timer.querySelector('.seconds');
		var timeInterval = setInterval(updateClock, 1000);
		
		function updateClock() {
			var t = getTimeRemaining(endtime);
			hours.textContent = String(t.hours).length === 2 ? t.hours : '0' + t.hours;
			minutes.textContent = String(t.minutes).length === 2 ? t.minutes : '0' + t.minutes;
			seconds.textContent = String(t.seconds).length === 2 ? t.seconds : '0' + t.seconds;
			
			if (t.total <= 0) {
				clearInterval(timeInterval);
			}
		}
	}
	
	setClock('timer', deadline);
})































