// Создаем массив из 15 чисел
function shuffle(array) {
	array.sort(() => Math.random() - 0.5);
}
let p = 1;
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];


// перемешиваем и проверяем на складываемость
function audit() {
	shuffle(arr);
	let count = 0;
	for (let i = 0; i < arr.length - 1; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] > arr[j]) {
				count++;
			}
		}
	}
	console.log(count);
	if (count % 2 != 0) {
		[arr[13], arr[14]]  = [arr[14], arr[13]];
	}
	
}
audit()


for (let item = 0; item < arr.length; item++) {
	const element = arr[item];
	const button = document.querySelector('.button_' + p);
	button.innerHTML = `${element}`;
	p++;

}
// счетчик ходов
let counter = 0; 


// передвигаем блоки с числами на пустое место.
document.addEventListener('keydown', (function (event) {

counter++;
console.log(counter);
	let keyName = event.key;
	function movement (direction) {
		let empty = document.querySelector('.button_empty');
		let empty_left = empty.getBoundingClientRect().left;
		let empty_top = empty.getBoundingClientRect().top;
		let empty_id = empty.id;

		let step = document.getElementById(+empty_id + direction)

		let step_left = step.getBoundingClientRect().left;
		let step_top = step.getBoundingClientRect().top;
		let step_id = step.id;

		empty.style.left = step_left + "px";
		empty.style.top = step_top + "px";
		empty.id = step_id;

		step.style.left = empty_left + "px";
		step.style.top = empty_top + "px";
		step.id = empty_id;

		const audio = new Audio('audio/11.ogg');
		audio.play();
	
	}

	if (keyName === 'ArrowLeft') {
		movement(1);
	
	}

	if (keyName === 'ArrowRight') {
		movement(-1);

	}

	if (keyName === 'ArrowDown') {
		movement(-5);

	}

	if (keyName === 'ArrowUp') {
		movement(5);

	}
	
}))


