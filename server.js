// JavaScript : First-class function
// 3. function return function

function say() {
	return function myName() {
		console.log("Stis & Photon");
	}
}

var nameFn = say();
nameFn();