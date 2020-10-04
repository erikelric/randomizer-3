// types of jackets I like
let jacket = [{
  name: "coat",
  color: "black"
}, {
  name: "blazer",
  color: "grey"
}, {
  name: "hoodie",
  color: "green"
}, {
  name: "parka",
  color: "orange"
}, {
  name: "blouson",
  color: "purple"
}];

let randomIndex;
let animating = false;
let shapes = [];
let imageCounter = 0;
let button;

function preload() {

  for (let i = 0; i <= 2; i++) {
    shapes[i] = loadImage(`assets/shape_${i}.JPG`)
  }

}

function setup() {
  createCanvas(600, 600);
  background(200);
  textSize(32);
  imageMode(CENTER);
  frameRate (8);

  text("Click to randomize",width/4, height/2);

  button = createButton("Click to randomize");
  button.mousePressed(buttonPressed);
}

function draw() {

  if (animating == true) {
    clear();
    image(shapes[imageCounter], width / 2, height / 2);

    if (imageCounter < shapes.length - 1) {
      imageCounter++;
    } else {
      imageCounter = 0;
    }
  }
}

function randomizer() {
  animating = false;

  if (jacket[0]) {

    // background(random(200, 255));
    clear();
    randomIndex = int(random(jacket.length));
    text(`${jacket[randomIndex].name}'s favorite color is ${jacket[randomIndex].color}`, width/6, height - 15);
    image(random(shapes), width / 2, height / 2);
    // text(jacket[randomIndex].name + "'s favorite color is" + jacket[randomIndex].color, 50, 50);
    jacket.splice(randomIndex, 1);
  } else {
    background(random(200, 255));
    text("nothing left", 50, 50);
  }

}

function buttonPressed() {
  animating = true;
  setTimeout(randomizer, 2000);

}
