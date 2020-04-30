var DB, greeting, nameBar, emailIDBar, startButton;
var voterRef, voterCountRef;
var voterCount=0, name = null, emailID = null, vote = null;
var name, emailID, arr = [];
var gameState = "formPage";

function updateCount(count){
  DB.ref('/').update({
    voterCount : count
  });
}

function setup() {
  DB = firebase.database();
  createCanvas(500,500);

  arr.push("yes");
  vote = arr;

  greeting = createElement('h1',"Welcome to my survey");
  greeting.position(width/2+175,100);
  nameBar = createInput("Name");
  nameBar.position(width/2+225,200);
  emailIDBar = createInput("email ID");
  emailIDBar.position(width/2+225,250);
  startButton = createButton("Start the survey");
  startButton.position(500,300);

  

  startButton.mousePressed(()=>{
    greeting.hide();
    nameBar.hide();
    emailIDBar.hide();
    startButton.hide();


  })
  
  if (gameState === "endPage"){
    endButton = createButton("End the survey");
    endButton.position(505,450);

    endButton.mousePressed(()=>{
      name = nameBar.value();
      emailID = emailIDBar.value();
  
      voterCount+=1;
      updateCount(voterCount);
  
      voterRef = "voters/voter" + voterCount;
      DB.ref(voterRef).set({
        name:name,
        emailID:emailID,
        vote:vote
      });
    });  
  }
  
}

function draw() {
  background(139,195,74);
  voterCountRef = DB.ref('voterCount');
  voterCountRef.on("value",(data)=>{
    voterCount = data.val();
  });
  console.log(voterCount);
}