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
	milliseconds = 10;
		
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
}

startButton.addEventListener('click', (e)=>{

});

pauseButton.addEventListener('click', ()=>{

});

resetButton.addEventListener('click', ()=>{

})