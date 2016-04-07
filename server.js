// JavaScript : First-class function
// 2. function to argument

function myName() {
	console.log("Stis & Photon");
}

function say(what) {
	what();
}

say(myName);