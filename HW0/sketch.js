function setup() {
	createCanvas(800,600); // make an HTML canvas element width x height pixels
}

function draw() {
	let circ = 3.14 * 2;
	let start = 3/4 * circ
	let h = hour();
	let m = minute();
	let s = second();
	if (h >= 12){h=h-12;}

	background(255);
	noFill();

	strokeWeight(6);
	stroke(0);
	arc(150, 155, 150, 150, start, start + h * circ / 12);

	strokeWeight(4);
	stroke(100);
	arc(150, 155, 100, 100, start, start + m * circ / 60);

	strokeWeight(2);
	stroke(150);
	arc(150, 155, 50, 50, start, start + s * circ / 60);
}
