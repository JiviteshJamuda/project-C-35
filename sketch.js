var DB,greeting,nameBar,emailIDBar,startButton;

function setup() {
  DB = firebase.database();
  console.log(DB);
  createCanvas(500,500);

  greeting = createElement('h2',"Welcome to my survey");
  greeting.position(width/2+225,100);
  nameBar = createInput("Name");
  nameBar.position(width/2+225,200);
  emailIDBar = createInput("email ID");
  emailIDBar.position(width/2+225,250);
  startButton = createButton("Start the survey");
  startButton.position(500,300);
}

function draw() {
  background(139,195,74);
}