var DB,greeting,nameBar,emailIDBar,startButton;

function setup() {
  DB = firebase.database();
  console.log(DB);
  createCanvas(500,500);

  greeting = createElement('h2',"Welcome to my survey");
  greeting.position(250,100);
  nameBar = createInput("Name");
  nameBar.position(250,200);
  emailIDBar = createInput("email ID");
  emailIDBar.position(250,250);
  startButton = createButton("Start the survey");
  startButton.position(400,300);
}

function draw() {
  background(139,195,74);
}