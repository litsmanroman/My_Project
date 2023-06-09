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
		[arr[13], arr[14]] = [arr[14], arr[13]];
	}

}
audit()


for (let item = 0; item < arr.length; item++) {
	const element = arr[item];
	const button = document.querySelector('.button_' + p);
	button.innerHTML = `${element}`;
	p++;

}
// таймер
let p1 = 0, p2 = 0, p3 = 0, p4 = 0, p5 = 0, p6 = 1;

const T = document.querySelector('.timer');

setInterval(function () {
	T.innerHTML = `${p1}${p2}:${p3}${p4}:${p5}${p6++}`;
	if (p6 > 9) {
		p5++, p6 = 0;
	}
	if (p5 > 5) {
		p4++, p5 = 0;
	}
	if (p4 > 9) {
		p3++, p4 = 0;
	}
	if (p3 > 5) {
		p2++, p3 = 0;
	}
	if (p2 > 9) {
		p1++, p2 = 0;
	}
	if (p1 == 2 & p2 == 4) {
		p1 = 0, p2 = 0, p3 = 0, p4 = 0;
		clearInterval();
	}

}, 1000);
let units = 0;
let doz = 0;
let hund = 0;
let key_u = 0;
let key_d = 0;
let key_h = 0;



// передвигаем блоки с числами на пустое место.
document.addEventListener('keydown', (function (event) {


	let keyName = event.key;

	function movement(direction) {
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

		const audio1 = new Audio('audio/11.ogg');
		audio1.play();

		// счетчик ходов
		let c_u = document.querySelector('.counter_units');
		let c_d = document.querySelector('.counter_dozens');
		let c_h = document.querySelector('.counter_hundreds');




		let t_u = setInterval(() => {
			key_u = key_u + 1;
			if (key_u == 100) {
				clearInterval(t_u);
				key_u = 0;
			}
			units = units + 1;
			c_u.style.top = -units + "px";
			console.log(units);


			if (units > 900) {

				let t_d = setInterval(() => {
					key_d = key_d + 1;
					if (key_d == 100) {
						clearInterval(t_d);
						key_d = 0;
					}
					doz = doz + 1;
					c_d.style.top = -doz + "px";
					console.log(doz);

				}, 0);

				units = -99;

				if (doz >= 900) {
					let t_h = setInterval(() => {
						key_h = key_h + 1;
						if (key_h == 100) {
							clearInterval(t_h);
							key_h = 0;
						}
						hund = hund + 1;
						c_h.style.top = -hund + "px";



					}, 0);
					doz = -100;

					if (hund >= 900) {
						hund = -100;
						doz = -100;
						units = -99;
						const audio2 = new Audio('audio/fail.mp3');
						audio2.play();

					}

				}


			}
		}, 0, 5);












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


