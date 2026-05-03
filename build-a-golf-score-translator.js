** start of script.js **

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes){
  if (par==null||strokes==null){
    return "Input par and strokes"
  }
  else if(par==0||strokes==0){
    return "Input valid par and strokes"
  }
  else if (strokes==1){
    return names[0];
  }
  else if(strokes<=par-2){
    return names[1];
  }
  else if(strokes==par-1){
    return names[2];
  }
  else if(strokes==par){
    return names[3];
  }
  else if(strokes==par+1){
    return names[4];
  }
  else if(strokes==par+2){
    return names[5];
  }
  else{
    return "Go Home!"
  }
  
}



console.log(golfScore())

** end of script.js **

