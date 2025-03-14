const letterButtons = [];
let words, x;
let playTimes=0;
let clickCount = 0;
let w;
function preload() {
  words = loadStrings("words.txt");
}
let lineClick = 0;
let tempString = "";
let tempLetter;

//n will be our line number
function squares(n) {
  stroke("black");
  fill("white");
  for (let i = 0; i < 5; i++) {
    rect(143 + 35 * i, 158 + (n - 1) * 40, 30, 30);
  }
}

function setup() {
  createCanvas(500, 500);
  background("beige");
  for (i = 1; i <= 6; i++) {
    squares(i);
  } //
  x = round(random(words.length));
  console.log(x);
  w = words[x];
  text(words[x], 100, 70); //see how we index our file
  OutputButtons();
} //setup

function delPressed() {
  if((floor(lineClick/ 5))<=6){
  console.log('**tempString= '+tempString)
  console.log('**count= '+count)
  console.log('**lineClick=  '+lineClick)
  console.log('**sending to squares= '+floor(lineClick/ 5) + 1)
  
 if (tempString.length > 0) {
    
    tempString = tempString.slice(0, tempString.length - 1);
   squares(ceil(lineClick / 5) );
    
    count--;
    lineClick--;

    for (let i = 0; i < tempString.length; i++) {
      let c = tempString.charAt(i);
      
      fill("black");
      stroke("black");
      
      textSize(22);
      text(c, 150 + (i % 5) * 35, 180 + floor(lineClick / 5) * 40);
    } //for i 
  } //if
  }
} //fn


function outputWord() {
  
  let playAgainButton;
  
  
   if(count==5){
  //squares(ceil(lineClick / 5) + 1);
  //index each character of the word
  if(tempString!=""){
  console.log("*" + tempString);
  }
  for (let i = 0; i < tempString.length; i++) {
    let t1 = tempString[i];
    
    templetter = unchar(t1)-65;
    
    if (w.indexOf(t1) != -1) {
      if (w[i] == t1) {
        //Owais helped me in colour output buttons
        letterButtons[templetter].buttonName.style("background-color: green")
        fill("green");
        stroke("green");  
        
        let p=0;
        
        for(let x=0; x< tempString.length; x++) {
          if (t1==tempString[x]){
            p++;
          }
        }
          
          let r=0;
        
        for(let n=0; n<tempString.length; n++){
          if(w[n]==t1){
          if (w[n] == tempString[n]){
            r++;
          }
          }
        }
          
          if(p!=r){
            letterButtons[templetter].buttonName.style("background-color:red")
          }
        
         
      } //if
      else {
                letterButtons[templetter].buttonName.style("background-color:red")

        fill("red");
        stroke("red");
      } //else
    } //big if
    else {
    letterButtons[templetter].buttonName.style("background-color:black")
      fill("black");
      stroke("black");
    } //else
    
        
    textSize(22);
    text(t1, 150 + (i % 5) * 35, 180 + floor((lineClick-5)/ 5) * 40);
    
    if(tempString==w){
      fill("green");
        stroke("green");
       text("YOU WIN!", 175, 430);
      playAgainButton = createButton("PLAY AGAIN");
  playAgainButton.position(330, 60);
  playAgainButton.mousePressed(playAgain);
      
    }else{
      if((floor(lineClick/ 5))>5){
        fill("red");
        stroke("red");
        text("YOU LOSE", 175, 430);
        playAgainButton = createButton("PLAY AGAIN");
  playAgainButton.position(330, 60);
  playAgainButton.mousePressed(playAgain);
      }
    }
    
  } //for i
  tempString = "";
   }
  
  function playAgain(){
    playTimes++;
  const letterButtons = [];
clickCount = 0;
lineClick = 0;
tempString = "";
  setup();
    playAgainButton.remove();
  keyCode="";
  keyPressed();
 let replay = new ButtonClass(tempString);
}
  
} //function

let count = 0;
class ButtonClass {
  //all classes have a constructor
  //this is used to create objects of that class
  constructor(text1) {
    //console.log(buttonName + " created");
    
   this.buttonName = createButton(text1);
    this.buttonName.mousePressed(buttonCommand);
    //this.num = num;
    
  if(text1==""){
   this.buttonName.remove();
   }

    function buttonCommand() {
      
       
      if((floor(lineClick/ 5))>5){
        outputWord();
      }else{
        if(count==5){
        count=count-5; 
        tempString=""; 
        }
        if (count<5){
        
     tempString += text1;
        
      console.log("tempString=" + tempString);

          
      fill("black");
      stroke("black");
        
      textSize(22);
      text(text1, 150 + (count % 5) * 35, 180 + floor(lineClick / 5) * 40);
        
      count++;
     
      lineClick++;
        
        }
      }
      
    } //fn command
    
  } //constructor
} //class Lbtn

function keyPressed(){
  if (keyCode === BACKSPACE) {
 delPressed();
 } //if
 else if (keyCode === ENTER) {
 outputWord();
 } //else if
 else if (keyCode >= 65 && keyCode <= 90 ) {

      if((floor(lineClick/ 5))>5){
        outputWord();
      }else{
        if(count==5){
          count=count-5; 
        tempString="";
        }
        if (count<5){
         let Key
     Key = char(keyCode)
     Key = Key.toUpperCase()
     tempString += Key;
        
      console.log("tempString=" + tempString);

          
      fill("black");
      stroke("black");
        
      textSize(22);
      text(Key, 150 + (count % 5) * 35, 180 + floor(lineClick / 5) * 40);
        
      count++;
     
      lineClick++;
        
        }
      }

} //else
}//keyPressed

function OutputButtons() {
  for (i = 0; i < 26; i++) {
    //UC A-->Z is 65 through 90
    letterButtons[i] = new ButtonClass(char(i + 65));
    //button = new ButtonClass("button", "text",0)
    letterButtons[i].buttonName.position(
      100 + 22 * (i % 13),
      100 + 22 * floor(i / 13)
    );
    // button.buttonName.position(100+40*i,100);
  } //for i
  let enterKey;
  enterKey = createButton("ENTER");
  enterKey.position(400, 150);
  enterKey.mousePressed(outputWord);

  let delKey;
  delKey = createButton("DELETE");
  delKey.position(400, 180);
  delKey.mousePressed(delPressed);
  
} //outputbuttons
