const hoursContainer = document.querySelector('.hours');
const minutesContainer = document.querySelector('.minutes');
const secondsContainer = document.querySelector('.seconds');
const millisecondsContainer = document.querySelector('.milliseconds');

const startButton = document.querySelector('.start-button');
const pauseButton = document.querySelector('.pause-button');
const resetButton = document.querySelector('.reset-button');

let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;

let timerStatus = null;

const handleIncrement = ()=>{
	milliseconds += 10;
		
		if (milliseconds === 1000) {
			milliseconds = 0;
			seconds ++;
			if (seconds === 100) {
				seconds = 0;
				minutes ++;
				if (minutes === 100) {
					minutes = 0;
					hours ++;
				}
			}
		}
		const formattedHours = (hours < 10) ? '0' + hours : hours;
		const formattedMinutes = (minutes < 10) ? '0' + minutes : minutes;
		const formattedSeconds = (seconds < 10) ? '0' + seconds : seconds;
		const formattedMilliseconds = (milliseconds < 100) ? '0' + milliseconds : milliseconds;

		hoursContainer.textContent = formattedHours
		minutesContainer.textContent = formattedMinutes
		secondsContainer.textContent = formattedSeconds
		millisecondsContainer.textContent = formattedMilliseconds;
}



startButton.addEventListener('click', ()=>{
	if (timerStatus !== null){
		clearInterval(timerStatus);
	}
	timerStatus = setInterval(handleIncrement, 10);
});

pauseButton.addEventListener('click', ()=>{
	clearInterval(timerStatus);
});

// resetButton.addEventListener('click', ()=>{

// })