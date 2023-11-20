

const dd = document.querySelector('.content');
let x = 1,
y=1;
dd.addEventListener('mousemove', (e) => {
  x = e.clientX-dd.offsetLeft-225;
   y = e.clientY-dd.offsetTop-190;
	let tng=y/x;

	arctng = Math.atan(tng);
	angle = arctng*180/3.1415926535;

 
	let dis=90;
	if ((x<0)|| (x<0 && y<0)) {
		dis= dis+180;
	}
	const eyeL = document.querySelector('.eye_box_l');
	eyeL.style.rotate = `${angle+dis}deg`;
 
	const eyeR = document.querySelector('.eye_box_r');
	eyeR.style.rotate = `${angle+dis}deg`;

	console.log(`${x}:${y}_______${tng}_____${arctng}_____${angle}`);
}, {
})





// mousemove", function (event) {
// 	coord.innerHTML = 
// 		`clientX - ${event.clientX-780} <br> clientY - ${event.clientY-42}`;
// });









// let q = 0;
// const ar1 = document.querySelector('.arrow_1');
// setInterval(function() {  
// 	ar1.style.rotate = `${q}deg`;
//  if (q<360) {
// 		 q=q+0.06;
// 	 }
// 	}, 10);

	



// ar1.style.rotate = `${q}deg`;






// if (a<20) {
// ar1.classList.add('rotate_45')
// } else {
// 	ar1.classList.add('rotate_180')
// }


// console.log(ar1);
